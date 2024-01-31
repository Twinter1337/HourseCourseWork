import XrmProxy from "./XrmProxy";
var EVENT_NAME = "uci_controlframework_usage";
var COMPONENT_NAME = "CustomControlFramework";
var TelemetryManager = (function () {
    function TelemetryManager() {
    }
    TelemetryManager.prototype.reportUsage = function (props, status) {
        var usageEvent = {
            eventName: EVENT_NAME,
            eventParameters: this.generateEventParams(props, null, null, status),
        };
        XrmProxy.Reporting.reportEvent(usageEvent);
    };
    TelemetryManager.prototype.reportEventFailure = function (props, exception, ApiName, parentId, suggestedMitigation, failureType) {
        var telemetryComponentName = props.manifest ? props.manifest.ConstructorName : props.configuration.CustomControlId;
        if (failureType && failureType === "ControlFramework") {
            telemetryComponentName = COMPONENT_NAME + "." + telemetryComponentName;
        }
        XrmProxy.Reporting.reportFailure(telemetryComponentName, exception, suggestedMitigation, this.generateEventParams(props, ApiName, parentId));
    };
    TelemetryManager.prototype.reportEventSuccess = function (props, ApiName) {
        var telemetryComponentName = props.manifest ? props.manifest.ConstructorName : props.configuration.CustomControlId;
        telemetryComponentName = COMPONENT_NAME + "." + telemetryComponentName;
        XrmProxy.Reporting.reportSuccess(telemetryComponentName, this.generateEventParams(props, ApiName));
    };
    TelemetryManager.prototype.generateEventParams = function (props, apiName, parentId, status) {
        var eventParams = [];
        var ControlName = {
            name: "ControlName",
            value: props ? props.controlId : "",
        };
        var ControlId = {
            name: "ControlId",
            value: props && props.manifest ? props.manifest.CustomControlId : "",
        };
        var APIName = {
            name: "APIName",
            value: apiName,
        };
        var HostPage = {
            name: "HostPage",
            value: props ? props.pageType : "",
        };
        var NumberOfResources = {
            name: "ResourceArrayLength",
            value: props && props.manifest ? props.manifest.Properties.Resources.length : "",
        };
        eventParams.push(ControlName);
        eventParams.push(ControlId);
        eventParams.push(HostPage);
        eventParams.push(NumberOfResources);
        if (status) {
            var Status = {
                name: "ControlLoadStatus",
                value: status,
            };
            eventParams.push(Status);
        }
        if (apiName) {
            eventParams.push(APIName);
        }
        if (parentId) {
            var ParentCCContext = {
                name: "ParentCCContext",
                value: parentId,
            };
            eventParams.push(ParentCCContext);
        }
        if (props.propBagData) {
            var Entity = {
                name: "Entity",
                value: props.propBagData && props.propBagData.modeData ? props.propBagData.modeData.entityTypeName : null,
            };
            eventParams.push(Entity);
        }
        return eventParams;
    };
    return TelemetryManager;
}());
var instance = new TelemetryManager();
export { TelemetryManager, instance as default, COMPONENT_NAME };
