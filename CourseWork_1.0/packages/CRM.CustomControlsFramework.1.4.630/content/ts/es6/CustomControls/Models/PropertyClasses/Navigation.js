import { default as XrmProxyInstance } from "../../Utilities/XrmProxy";
var Navigation = (function () {
    function Navigation(customControlProperties) {
        this._customControlProperties = customControlProperties;
        if (customControlProperties.manifest && customControlProperties.manifest.Properties.DataSetDefinitions !== null) {
            for (var dataSetKey in customControlProperties.manifest.Properties.DataSetDefinitions) {
                if (customControlProperties.manifest.Properties.DataSetDefinitions[dataSetKey].Primary) {
                    this._paramKey = dataSetKey;
                }
            }
        }
    }
    Navigation.prototype.openEditForm = function (entityReference, processId, processInstanceId, selectedStageId, isCrossEntityNavigate) {
        if (processId) {
            this._customControlProperties.propBagMethods.navigation.openEditForm(entityReference, processId, processInstanceId, selectedStageId, isCrossEntityNavigate);
        }
        else {
            var entityName = entityReference.entityName || entityReference.LogicalName;
            var entityReferenceId = entityReference.id || (entityReference.Id && entityReference.Id.toString());
            var recordSetQueryKey = this._getRecordSetQueryFromProps(this._paramKey);
            XrmProxyInstance.openForm({
                entityName: entityName,
                entityId: entityReferenceId,
                recordSetQueryKey: recordSetQueryKey,
                processInstanceId: processInstanceId,
                selectedStageId: selectedStageId,
                isCrossEntityNavigate: isCrossEntityNavigate,
            });
        }
    };
    Navigation.prototype.openGridPage = function (entityTypeName, viewId, showChart, visualizationId, filterExpression) {
        this._customControlProperties.propBagMethods.navigation.openGridPage(entityTypeName, viewId, showChart, null, visualizationId, filterExpression);
    };
    Navigation.prototype.openGrid = function (entityTypeName, viewId, showChart, visualizationType, visualizationId, filterExpression, chartDrillDownParameters) {
        this._customControlProperties.propBagMethods.navigation.openGridPage(entityTypeName, viewId, showChart, visualizationType, visualizationId, filterExpression, chartDrillDownParameters);
    };
    Navigation.prototype.openDashboard = function (id) {
        this._customControlProperties.propBagMethods.navigation.openDashboard(id);
    };
    Navigation.prototype.openCreateForm = function (logicalName, initialValues, createFromEntity) {
        this._customControlProperties.propBagMethods.navigation.openCreateForm(logicalName, initialValues, createFromEntity);
    };
    Navigation.prototype.openForm = function (options, parameters) {
        options.recordSetQueryKey = this._getRecordSetQueryFromProps(this._paramKey);
        if (this._customControlProperties.parentDefinedControlProps &&
            this._customControlProperties.parentDefinedControlProps.propertyBagOverrides &&
            this._customControlProperties.parentDefinedControlProps.propertyBagOverrides.openForm) {
            return this._customControlProperties.parentDefinedControlProps.propertyBagOverrides.openForm(options, parameters);
        }
        return XrmProxyInstance.openForm(options, parameters);
    };
    Navigation.prototype.openSearch = function (query) {
        this._customControlProperties.propBagMethods.navigation.openSearch(query);
    };
    Navigation.prototype.openPowerBIFullScreenPage = function (powerBIEmbedUrl, powerBIGroupId, powerBIDashboardId, powerBITileId, powerBIReportId, powerBIReportUrl, powerBIComponentTypeCode) {
        this._customControlProperties.propBagMethods.navigation.openPowerBIFullScreenPage(powerBIEmbedUrl, powerBIGroupId, powerBIDashboardId, powerBITileId, powerBIReportId, powerBIReportUrl, powerBIComponentTypeCode);
    };
    Navigation.prototype.openUrl = function (url, options) {
        XrmProxyInstance.openUrl(url, options);
    };
    Navigation.prototype.openUrlWithProtocol = function (url, protocol) {
        this._customControlProperties.propBagMethods.navigation.openUrlWithProtocol(url, protocol);
    };
    Navigation.prototype.openPhoneNumber = function (phoneNumber, useForm, passedEtn, passedId, passedName) {
        var etn = passedEtn || this._customControlProperties.propBagData.modeData.entityTypeName;
        var id = passedId || this._customControlProperties.propBagData.modeData.entityId;
        var name = passedName || this._customControlProperties.propBagData.modeData.entityRecordName;
        this._customControlProperties.propBagMethods.navigation.openPhoneNumber(phoneNumber, etn, id, name, useForm);
    };
    Navigation.prototype.openMaps = function (address) {
        this._customControlProperties.propBagMethods.navigation.openMaps(address);
    };
    Navigation.prototype.openMap = function (address) {
        this._customControlProperties.propBagMethods.navigation.openMap(address);
    };
    Navigation.prototype.openAlertDialog = function (alertStrings, options) {
        return XrmProxyInstance.openAlertDialog(alertStrings, options);
    };
    Navigation.prototype.openConfirmDialog = function (confirmStrings, options) {
        return XrmProxyInstance.openConfirmDialog(confirmStrings, options);
    };
    Navigation.prototype.openErrorDialog = function (options) {
        return XrmProxyInstance.openErrorDialog(options);
    };
    Navigation.prototype.openDialog = function (name, options, parameters) {
        return XrmProxyInstance.openDialog(name, options, parameters);
    };
    Navigation.prototype.openFile = function (file, options) {
        return XrmProxyInstance.openFile(file, options);
    };
    Navigation.prototype.openTaskFlow = function (name, options, parameters) {
        return XrmProxyInstance.openTaskFlow(name, options, parameters);
    };
    Navigation.prototype.openWebResource = function (name, options, data) {
        XrmProxyInstance.openWebResource(name, options, data);
    };
    Navigation.prototype._getRecordSetQueryFromProps = function (paramKey) {
        var params = paramKey && this._customControlProperties.dynamicData
            ? this._customControlProperties.dynamicData.parameters[paramKey]
            : null;
        return this._customControlProperties.actions &&
            this._customControlProperties.actions.getRecordSetQueryKey &&
            params !== null
            ? this._customControlProperties.actions.getRecordSetQueryKey(params)
            : null;
    };
    return Navigation;
}());
export { Navigation };
