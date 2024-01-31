import * as CCFUtils from "./../CustomControlUtilityPointers";
var Mode = (function () {
    function Mode(customControlProperties, _externalUtils, hostData) {
        this.hasFocus = true;
        this.isPreview = false;
        this.isActive = false;
        this.isRead = false;
        this._customControlProperties = customControlProperties;
        this._descriptor = customControlProperties ? customControlProperties.descriptor : null;
        this._modeData = customControlProperties ? customControlProperties.propBagData.modeData : null;
        this._hostData = hostData;
        this.allocatedWidth = CCFUtils.IsNullOrUndefined(this._hostData.allocatedWidth)
            ? -1
            : this._hostData.allocatedWidth;
        this.allocatedHeight = CCFUtils.IsNullOrUndefined(this._hostData.allocatedHeight)
            ? -1
            : this._hostData.allocatedHeight;
        this.trackContainerResize = this._hostData.trackResize;
        this.setFullScreen = this._hostData.updateFullscreen;
        this.isControlDisabled = this._descriptor ? this._descriptor.Disabled : false;
        this.isVisible = this._descriptor ? this._descriptor.Visible : true;
        this.label = this._descriptor ? (this._descriptor.ShowLabel ? this._descriptor.Label : "") : "";
        this.accessibilityLabel = this._descriptor ? (!this._descriptor.ShowLabel ? this._descriptor.Label : null) : null;
        this.isOffline = this._modeData.isOffline;
        this.isRead = !!this._modeData.isRead;
        this.fullPageParam =
            customControlProperties &&
                customControlProperties.descriptor &&
                customControlProperties.descriptor.FullPageParamers
                ? customControlProperties.descriptor.FullPageParamers
                : null;
        this.rowSpan = this._customControlProperties ? this._customControlProperties.rowSpan : 0;
        this.contextInfo = {
            entityTypeName: this._modeData && this._modeData.entityTypeName,
            entityId: this._modeData && this._modeData.entityId,
            entityRecordName: this._modeData && this._modeData.entityRecordName,
        };
    }
    Mode.prototype.setNotification = function (message, id) {
        if (message &&
            message.trim().length > 0 &&
            this.isVisible &&
            !this.isControlDisabled &&
            this._customControlProperties.descriptor.parentFieldSectionItem) {
            var baseControlName = this._customControlProperties.descriptor.parentFieldSectionItem;
            return this._customControlProperties.propBagMethods.mode.setNotification(message, id, this._customControlProperties.id, baseControlName, this._customControlProperties.contextToken, this._modeData.entityTypeName, this._modeData.entityId);
        }
        return false;
    };
    Mode.prototype.clearNotification = function (id) {
        if (this._customControlProperties.descriptor.parentFieldSectionItem) {
            var baseControlName = this._customControlProperties.descriptor.parentFieldSectionItem;
            return this._customControlProperties.propBagMethods.mode.clearNotification(this._customControlProperties.id, baseControlName, this._customControlProperties.contextToken, this._modeData.entityTypeName, this._modeData.entityId, id);
        }
        else
            return false;
    };
    Mode.prototype.setControlState = function (state, globalSetting) {
        var personalizationConfig = this._customControlProperties.personalizationConfiguration;
        if (personalizationConfig) {
            if (globalSetting) {
                if (this._customControlProperties.manifest.CustomControlId) {
                    this._customControlProperties.actions.setGlobalControlPersonalization(this._customControlProperties.manifest.CustomControlId, state);
                }
                return;
            }
            if (personalizationConfig.areaType === "form") {
                this._customControlProperties.actions.setFieldControlPersonalization(personalizationConfig, state);
            }
            if (personalizationConfig.areaType === "grid") {
                this._customControlProperties.actions.setGridControlPersonalization(personalizationConfig, state);
            }
            if (personalizationConfig.areaType === "dashboard") {
                this._customControlProperties.actions.setDashboardControlPersonalization(personalizationConfig, state);
            }
        }
        return this._customControlProperties.propBagMethods.utils.setState(state);
    };
    Mode.prototype.blur = function () { };
    Mode.prototype.focus = function () { };
    return Mode;
}());
export { Mode };
