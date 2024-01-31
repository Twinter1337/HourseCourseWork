var UserSettings = (function () {
    function UserSettings(customControlProperties, externalUtils) {
        this._formattingData = customControlProperties.propBagData.formattingData;
        this._xrmProxy = externalUtils.xrmProxy;
        this._utilsData = customControlProperties.propBagData.utilsData;
        this.userId = this._xrmProxy.UserSettings.userId;
        this.userName = this._xrmProxy.UserSettings.userName;
        this.dateFormattingInfo = this._formattingData.dateTimeFormatInfo;
        this.numberFormattingInfo = this._formattingData.numberFormatInfo;
        this.isRTL = this._xrmProxy.UserSettings.isRTL;
        this.languageId = this._xrmProxy.UserSettings.languageId;
        this.securityRoles = this._xrmProxy.UserSettings.securityRoles;
        this.isHighContrastEnabled = this._xrmProxy.UserSettings.isHighContrastEnabled;
        this.timeZoneUtcOffsetMinutes = this._formattingData.timeZoneUtcOffsetMinutes;
        this.pagingLimit = this._xrmProxy.UserSettings.pagingLimit;
    }
    UserSettings.prototype.getTimeZoneOffsetMinutes = function (date) {
        if (!date) {
            return this._formattingData.timeZoneUtcOffsetMinutes;
        }
        else {
            return (this._formattingData.timeZoneUtcOffsetMinutes +
                this._utilsData.dateTimeUtils.getDSTAdjustmentMinutes(date, this._formattingData.timeZoneAdjusters));
        }
    };
    return UserSettings;
}());
export { UserSettings };
