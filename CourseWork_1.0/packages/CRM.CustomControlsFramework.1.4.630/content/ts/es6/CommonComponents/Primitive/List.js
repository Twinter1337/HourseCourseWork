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
import { applyIFlexboxContainerProp, getCssClassName as getIFlexboxContainerCssClassName, } from "./IFlexboxContainerStyle";
import { ComponentBase } from "./ComponentBase";
import * as AttributeName from "../Supplementary/Accessibility/Attributes/AttributeName";
import * as AriaLive from "../Supplementary/Accessibility/Attributes/AriaLive";
import * as ReactFela from "react-fela";
import { mapStylesToProps } from "./FelaConnectHelper";
var InnerList = (function (_super) {
    __extends(InnerList, _super);
    function InnerList(props) {
        var _this = _super.call(this, props) || this;
        _this._refCallbackTrigger = _this._refCallbackTrigger.bind(_this);
        return _this;
    }
    InnerList.prototype.getElementName = function () {
        return "ul";
    };
    InnerList.prototype.getFlexClassName = function (style) {
        return getIFlexboxContainerCssClassName(style ? style.display : null);
    };
    InnerList.prototype.getElementProps = function () {
        var options = {};
        if (this.props.announceAccessibilityNotification === true) {
            options[AttributeName.ARIA_LIVE] = this.props.notificationType || AriaLive.POLITE;
        }
        return Object.assign(options, { ref: this.props.refCallback ? this._refCallbackTrigger : null });
    };
    InnerList.prototype._refCallbackTrigger = function (list) {
        this.props.refCallback(list);
    };
    InnerList.prototype.getElementStyle = function () {
        if (this.props.style) {
            return Object.assign({}, applyIFlexboxContainerProp(this.props.style));
        }
    };
    InnerList.displayName = "List";
    return InnerList;
}(ComponentBase));
var List = ReactFela.connect(mapStylesToProps)(InnerList);
export { InnerList, List };
