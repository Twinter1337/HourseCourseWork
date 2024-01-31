var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComponentBase } from "./ComponentBase";
import XrmProxy from "../../CustomControls/Utilities/XrmProxy";
import { COMPONENT_NAME } from "../../CustomControls/Utilities/TelemetryManager";
var PRIMITIVE_COMPONENT_NAME = COMPONENT_NAME + ".Primitive.FontIcon";
var FontIcon = (function (_super) {
    __extends(FontIcon, _super);
    function FontIcon(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (props && props.type === undefined) {
            var error = Error("FontIcon type property cannot be null");
            XrmProxy.Reporting.reportFailure(PRIMITIVE_COMPONENT_NAME, error);
            throw error;
        }
        return _this;
    }
    FontIcon.prototype.getElementName = function () {
        return "span";
    };
    FontIcon.prototype.getElementClassName = function () {
        var styleClasses = this.props.styles ? " " + this.props.styles : "";
        return this.getSymbolClassName(this.props.type) + styleClasses;
    };
    FontIcon.displayName = "FontIcon";
    return FontIcon;
}(ComponentBase));
export { FontIcon };
