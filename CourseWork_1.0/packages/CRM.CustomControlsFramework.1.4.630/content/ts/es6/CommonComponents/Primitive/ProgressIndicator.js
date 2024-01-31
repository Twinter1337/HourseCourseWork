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
import * as React from "react";
import { applyIFlexboxContainerProp, getCssClassName as getIFlexboxContainerCssClassName, } from "./IFlexboxContainerStyle";
import { ComponentBase } from "./ComponentBase";
import * as ReactFela from "react-fela";
import { mapStylesToProps } from "./FelaConnectHelper";
var InnerProgressIndicator = (function (_super) {
    __extends(InnerProgressIndicator, _super);
    function InnerProgressIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerProgressIndicator.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.active !== nextProps.active || this.props.progressType !== nextProps.progressType;
    };
    InnerProgressIndicator.prototype.getElementName = function () {
        return "div";
    };
    InnerProgressIndicator.prototype.getFlexClassName = function (style) {
        var classString = "";
        var styleTemp;
        if (style) {
            styleTemp = Object.assign(applyIFlexboxContainerProp(style));
        }
        else {
            return null;
        }
        if (!this.props.progressType || this.props.progressType === "bar") {
            classString += "indeterminateProgressBar";
        }
        else if (this.props.progressType === "ring") {
            classString += "indeterminateProgressRing";
        }
        if (this.props.active !== true && this.props.animating !== true) {
            classString += " hideProgressBar";
        }
        classString += " " + getIFlexboxContainerCssClassName(styleTemp ? styleTemp.display : null);
        return classString;
    };
    InnerProgressIndicator.prototype.getElementChildren = function () {
        if (this.isIE) {
            return React.createElement("div", null, "......");
        }
        if (this.props.progressType === "ring") {
            return (React.createElement("div", null,
                React.createElement("div", { className: "progressDot" }),
                React.createElement("div", { className: "progressDot" }),
                React.createElement("div", { className: "progressDot" }),
                React.createElement("div", { className: "progressDot" }),
                React.createElement("div", { className: "progressDot" })));
        }
        return undefined;
    };
    InnerProgressIndicator.displayName = "ProgressIndicator";
    return InnerProgressIndicator;
}(ComponentBase));
var ProgressIndicator = ReactFela.connect(mapStylesToProps)(InnerProgressIndicator);
export { InnerProgressIndicator, ProgressIndicator };
