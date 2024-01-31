param(
	[string]$solution = "", 
	[string]$controlName = "", 
	[string]$innerPath = "",
	[string]$exportPath = "",
	[string]$solutionFileName = "",
	[string]$solutionLogicName = "",
	[string]$solutionDesc = ""
)

function AddPathsToArray([System.Collections.ArrayList]$array, $nodes){
	foreach ($i in $nodes) {	
		$path = $i.node.Attributes["path"].Value
		$array.Add($path)
	}
}

function ParseOutResxResources($resxNodes, [string]$rootPath, $zipFile, $controlName, $exportPath){
	foreach ($i in $resxNodes) {
		$path = $i.node.Attributes["path"].Value
		$path = $path.Substring(0, $path.LastIndexOf('.'))
		$path = $path.Substring(0, $path.LastIndexOf('.'))
		
		$searchpath = $rootPath + "/" + $path + "*.resx"
		
		$resx = $zipFile.Entries | where {$_.FullName -like $searchpath}
		
		foreach ($j in $resx){
			$shortName = $j.FullName.Substring($rootPath.Length+1,$j.FullName.Length-1-$rootPath.Length)
			$extractPath = Join-Path (Join-Path $exportPath -ChildPath "Control") -ChildPath $shortName
			$extractDir = Split-Path $extractPath
			if(-NOT (Test-Path $extractDir)){
				New-Item -ItemType Directory -Force -Path $extractDir
			}
			[System.IO.Compression.ZipFileExtensions]::ExtractToFile($j, $extractPath, $true)
		}
		
	}
}

if (-NOT ($exportPath)){
	$exportPath = $PSScriptRoot
}
else {
	if (-NOT (Split-Path -Path $exportPath -IsAbsolute)){
		$exportPath = Join-Path $PSScriptRoot -ChildPath $exportPath
	}
}

if ($solutionFileName)
{
	$exportPath = Join-Path $exportPath -ChildPath "temp"
}

$tempFilePath = Join-Path $PSScriptRoot -ChildPath "$solution"
Add-Type -assembly "system.io.compression.filesystem"
$zip = [io.compression.zipfile]::OpenRead($tempFilePath)

[string]$manifestXML = "";
[string]$controlPath = "";
$manifestFile = $null;
if(-NOT ($innerPath -eq "")){
	$manifestFile = ($zip.Entries | where {$_.FullName -Match $innerPath})
	$manifestXML = (New-Object IO.StreamReader($manifestFile.Open())).ReadToEnd()
	$controlPath = Split-Path $innerPath
	if (-NOT ($controlName)){
		$rootNode = (Select-XML -content $manifestXML -XPath "//manifest/control")
		$controlName =  $rootNode.node.Attributes["namespace"].Value + "." + $rootNode.node.Attributes["constructor"].Value
	}
}
else
{
	$customizations = $zip.Entries | where {$_.FullName -like "customizations.xml"}
	
	$customizationsXML = (New-Object IO.StreamReader($customizations.Open())).ReadToEnd()
	
	$controlsRoots = Select-Xml -Content $customizationsXML -XPath "//ImportExportXml/CustomControls/CustomControl"
	foreach ($i in $controlsRoots) {
		$controlPath = (Select-Xml -Xml $i.node -XPath "./FileName").node.InnerXML
		if ($controlPath.StartsWith("/")){
			$controlPath = $controlPath.Substring(1, $controlPath.Length-1)
		}
		
		$manifestFile = $zip.Entries | where {$_.FullName -Match $controlPath}
		$manifestXML = (New-Object IO.StreamReader($manifestFile.Open())).ReadToEnd()
		$rootNode = (Select-XML -content $manifestXML -XPath "//manifest/control")
		$manifestName =  $rootNode.node.Attributes["namespace"].Value + "." + $rootNode.node.Attributes["constructor"].Value
		if ($controlName -eq $manifestName){
			break;
		}
		else {
			$manifestXML = $null;
		}
		#Attributes	
	}
}

if (-NOT ($manifestXML)){
	Write-Host "Could not find the manifest you are looking for"
	break;
}

$rootControlpath = Split-Path $controlPath
$rootControlpath = $rootControlpath -replace "\\","/"

$resources = (Select-XML -content $manifestXML -XPath "//manifest/control/resources")

$relativeFilePaths = New-Object System.Collections.ArrayList
$absoluteFilepaths = New-Object System.Collections.ArrayList

$codeResources = (Select-XML -Xml $resources.node -XPath "./code")
$libraryResources = (Select-XML -Xml $resources.node -XPath "./library/packaged_library")
$cssResources = (Select-XML -Xml $resources.node -XPath "./css")
$resxResources = (Select-XML -Xml $resources.node -XPath "./resx")

AddPathsToArray -array $relativeFilePaths -nodes $codeResources
AddPathsToArray -array $relativeFilePaths -nodes $libraryResources
AddPathsToArray -array $relativeFilePaths -nodes $cssResources

foreach ($k in $relativeFilePaths){
	$longName = $rootControlPath + "/" + $k
	$extractPath = Join-Path (Join-Path $exportPath -ChildPath "Control") -ChildPath $k
	$extractDir = Split-Path $extractPath
	if(-NOT (Test-Path $extractDir)){
		New-Item -ItemType Directory -Force -Path $extractDir
	}
	$extractFile = $zip.Entries | where {$_.FullName -like $longName}
	[System.IO.Compression.ZipFileExtensions]::ExtractToFile($extractFile, $extractPath, $true)
}

ParseOutResxResources -array $filePaths -resxNodes $resxResources -rootPath $rootControlpath -zipFile $zip -controlName $controlName -exportPath $exportPath

$manifestRelPath = Join-Path "Control" -ChildPath "ControlManifest.xml"
$manifestOutput = Join-Path $exportPath -ChildPath $manifestRelPath

Write-Host $manifestRelPath
[System.IO.Compression.ZipFileExtensions]::ExtractToFile($manifestFile, $manifestOutput, $true)

$zip.Dispose()

if ($solutionFileName){
	$custPath = Join-Path $PSScriptRoot -ChildPath ".\ExtractSolutionFiles\customizations.xml"
	$solPath = Join-Path $PSScriptRoot -ChildPath ".\ExtractSolutionFiles\solution.xml"
	
	$customizations = [IO.File]::ReadAllText($custPath)
	$solution = [IO.File]::ReadAllText($solPath)
	
	$manPathFixed = "/" + ($manifestRelPath -replace "\\","/")
	
	$customizations = $customizations -replace "CONTROL_PATH_PLEASE_REPLACE",$manPathFixed
	
	if (-NOT($solutionDesc)){
		$solutionDesc = "$controlName Solution"
	}
	
	if (-NOT($solutionLogicName)){
		$solutionLogicName = ($controlName -replace "\.","_") + "_Solution"
	} 
	
	$solution = $solution -replace "CONTROL_NAME_REPLACE", $controlName
	$solution = $solution -replace "SOLUTION_DESCRIPTION_REPLACE", $solutionDesc
	$solution = $solution -replace "SOLUTION_NAME_REPLACE", $solutionLogicName
	
	$solOutput = Join-Path $exportPath -ChildPath "solution.xml"
	$custOutput = Join-Path $exportPath -ChildPath "customizations.xml"
	
	[IO.File]::WriteAllText($solOutput, $solution)
	[IO.File]::WriteAllText($custOutput, $customizations)
	
	$contentPath = Join-Path $PSScriptRoot -ChildPath "ExtractSolutionFiles\content.xml"
	$contentOut = Join-Path $exportPath -ChildPath "[Content_Types].xml"
	Write-Host $contentPath
	Write-Host $exportPath
	
	Copy-Item $contentPath -Destination $contentOut -Force -Verbose
	
	$zipOut = Join-Path $PSScriptRoot -ChildPath $solutionFileName

	Set-Content $zipOut ("PK" + [char]5 + [char]6 + ("$([char]0)" * 18))
	(dir $zipOut).IsReadOnly = $false  

	$ShellApplication = New-Object -com shell.application
	$ZipPack = $ShellApplication.NameSpace($zipOut)

	$TargetFiles = Get-ChildItem -Path $exportPath
	foreach($TargetFile in $TargetFiles) 
	{ 
			$ZipPack.CopyHere($TargetFile.FullName)
			do
			{
				Start-Sleep -milliseconds 300
			}
			while ($ZipPack.Items().count -eq 0)
	}
	
	#Compress-Archive -Path $zipWildcard -Destination $zipOut -Force
	#[System.IO.Compression.ZipFile]::CreateFromDirectory($exportPath, $zipOut)	
	Remove-Item $exportPath -Recurse
}