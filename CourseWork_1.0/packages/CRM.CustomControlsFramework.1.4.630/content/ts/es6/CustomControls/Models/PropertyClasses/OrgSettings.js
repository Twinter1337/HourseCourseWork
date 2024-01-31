var OrgSettings = (function () {
    function OrgSettings(customControlProperties, externalUtils) {
        this._customControlExposedOrgSettings = customControlProperties.propBagData.clientData.orgSettingsData;
        this._xrmProxy = externalUtils.xrmProxy;
        this.languageId = this._xrmProxy.OrgSettings.languageId;
        this.attributes = this._xrmProxy.OrgSettings.attributes;
        this.uniqueName = this._xrmProxy.OrgSettings.uniqueName;
        this.isAutoSaveEnabled = this._xrmProxy.OrgSettings.isAutoSaveEnabled;
        this.isRTL = this._customControlExposedOrgSettings.isRTL;
        this.fiscalYearStartDate = this._customControlExposedOrgSettings.fiscalYearStartDate;
        this.fiscalPeriodFormat = this._customControlExposedOrgSettings.fiscalPeriodFormat;
        this.fiscalPeriodType = this._customControlExposedOrgSettings.fiscalPeriodType;
        this.fiscalYearFormatYear = this._customControlExposedOrgSettings.fiscalYearFormatYear;
        this.fiscalYearFormatPrefix = this._customControlExposedOrgSettings.fiscalYearFormatPrefix;
        this.fiscalYearFormatSuffix = this._customControlExposedOrgSettings.fiscalYearFormatSuffix;
        this.fiscalYearDisplayCode = this._customControlExposedOrgSettings.fiscalYearDisplayCode;
        this.fiscalPeriodConnector = this._customControlExposedOrgSettings.fiscalPeriodConnector;
        this.showWeekNumber = this._customControlExposedOrgSettings.showWeekNumber;
        this.boundDashboardDefaultCardExpanded = this._customControlExposedOrgSettings.boundDashboardDefaultCardExpanded;
        this.allowUnresolvedPartiesOnEmailSend = this._customControlExposedOrgSettings.allowUnresolvedPartiesOnEmailSend;
        this.webResourceHash = this._customControlExposedOrgSettings.webResourceHash;
        this.enableBingMapsIntegration = this._customControlExposedOrgSettings.enableBingMapsIntegration;
        this.bingMapsApiKey = this._customControlExposedOrgSettings.bingMapsApiKey;
        this.availableBingMapLocales = this._customControlExposedOrgSettings.availableBingMapLocales;
        this.excludedCountriesForMaps = this._customControlExposedOrgSettings.excludedCountriesForMaps;
        this.bFDatacenter = this._customControlExposedOrgSettings.bFDatacenter;
        this.securitySettingForEmail = this._customControlExposedOrgSettings.securitySettingForEmail;
        this.appointmentRichEditorExperience = this._customControlExposedOrgSettings.appointmentRichEditorExperience;
        this.gridTotalRecordCountLimit = this._customControlExposedOrgSettings.gridTotalRecordCountLimit;
    }
    return OrgSettings;
}());
export { OrgSettings };
