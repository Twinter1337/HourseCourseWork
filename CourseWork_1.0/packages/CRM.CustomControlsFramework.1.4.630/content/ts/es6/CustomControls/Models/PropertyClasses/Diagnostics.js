var Diagnostics = (function () {
    function Diagnostics(customControlProperties, externalUtils) {
        this._traceLocation = "CustomControl.";
        this._externalUtils = externalUtils;
        this._controlId = customControlProperties.controlId;
    }
    Diagnostics.prototype.addControlId = function (message) {
        return message + "[CustomControlId = " + this._controlId + "]";
    };
    Diagnostics.prototype.traceError = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceError(this._traceLocation + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceWarning = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceWarning(this._traceLocation + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceInfo = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceInfo(this._traceLocation + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceDebug = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceDebug(this._traceLocation + componentName, this.addControlId(message));
    };
    return Diagnostics;
}());
export { Diagnostics };
