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
import * as ReactDOM from "react-dom";
import { applyIFlexboxContainerProp, getCssClassName as getIFlexboxContainerCssClassName, } from "./IFlexboxContainerStyle";
import { ComponentBase } from "./ComponentBase";
import { MeasuringHandler } from "../Common/MeasuringHandler/MeasuringHandler";
import * as ReactFela from "react-fela";
import { ruleGen } from "./FelaConnectHelper";
import { CustomControlSeeMoreStyleHelper } from "../../CustomControls/Components/Helpers/CustomControlSeeMoreStyleHelper";
var InnerView = (function (_super) {
    __extends(InnerView, _super);
    function InnerView(props) {
        var _this = _super.call(this, props) || this;
        _this._subscriber = null;
        _this._mountedElement = null;
        _this._getReference = _this._getReference.bind(_this);
        return _this;
    }
    InnerView.prototype.getElementName = function () {
        return this.props.semanticTag || "div";
    };
    InnerView.prototype.getFlexClassName = function (style) {
        return getIFlexboxContainerCssClassName(style ? style.display : null);
    };
    InnerView.prototype.componentDidMount = function () {
        if (this.props.isRequestedMeasuring) {
            this._subscriber = {
                forceMeasure: this.props.forceMeasure,
                getComponent: this.getComponent.bind(this),
                onMeasure: this.props.onMeasuring,
            };
            MeasuringHandler.getInstance().addMeasuringSubscribers(this._subscriber);
        }
    };
    InnerView.prototype.componentDidUpdate = function () {
        if (this.props.isRequestedMeasuring) {
            this._mountedElement = ReactDOM.findDOMNode(this);
        }
    };
    InnerView.prototype._getReference = function (viewRef) {
        if (viewRef && this.props.isRequestedMeasuring) {
            this._mountedElement = ReactDOM.findDOMNode(viewRef);
        }
    };
    InnerView.prototype.getComponent = function () {
        return this._mountedElement;
    };
    InnerView.prototype.componentWillUnmount = function () {
        if (this.props.isRequestedMeasuring) {
            MeasuringHandler.getInstance().removeMeasuringSubscribers(this._subscriber);
        }
    };
    InnerView.prototype.getElementStyle = function () {
        if (this.props.style) {
            return applyIFlexboxContainerProp(this.props.style);
        }
    };
    InnerView.prototype.getElementClassName = function () {
        var className = _super.prototype.getElementClassName.call(this);
        if (this.props && this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.style && InnerView.isElementScrollable(this.props.style)) {
            className +=
                CustomControlSeeMoreStyleHelper.getInstance().getDisableScrollStyle() && !this.props.isWithinATopMostSeeMore
                    ? " webkitScrollAuto"
                    : " webkitScroll";
        }
        return className;
    };
    InnerView.prototype.getElementProps = function () {
        var props = {
            id: this.props.id,
            accessKey: this.props.accessKey === "" ? null : this.props.accessKey,
            ref: this.props.isRequestedMeasuring ? this._getReference : undefined,
        };
        if (typeof this.props.isRTL === "boolean") {
            props.dir = this.props.isRTL ? "rtl" : "ltr";
        }
        if (!this.isIE &&
            !this.hasAriaProperty() &&
            typeof this.props.tabIndex !== "number" &&
            (!this.props.semanticTag || this.props.semanticTag === "div" || this.props.semanticTag === "span")) {
            props.role = "presentation";
        }
        return props;
    };
    InnerView.prototype.render = function () {
        return React.createElement(this.getElementName(), this.getElementPropsInternal(), this.getElementChildren());
    };
    InnerView.displayName = "View";
    return InnerView;
}(ComponentBase));
function viewRuleGen(props) {
    if (props && props.style) {
        return Object.assign(props.style, ruleGen(props));
    }
    return {};
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(viewRuleGen, props); }; };
var View = ReactFela.connect(mapStylesToProps)(InnerView);
export { InnerView, View };
