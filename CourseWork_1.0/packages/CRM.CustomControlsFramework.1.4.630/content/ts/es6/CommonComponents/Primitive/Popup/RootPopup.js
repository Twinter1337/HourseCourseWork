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
import { View } from "../View";
import { CustomControlSeeMoreStyleHelper } from "../../../CustomControls/Components/Helpers/CustomControlSeeMoreStyleHelper";
var ROOT_POPUP_ATTRIBUTE = "openedPopups";
var containerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
};
var RootNodeSuffix = "_popupContainer";
var RootPopup = (function (_super) {
    __extends(RootPopup, _super);
    function RootPopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._seeMorePopupCount = null;
        return _this;
    }
    RootPopup.prototype._getPopupId = function () {
        return ((this.props.parentCustomControlId ? this.props.parentCustomControlId + "|" : "") + this.props.id + RootNodeSuffix);
    };
    RootPopup.prototype._initializeRootNode = function () {
        if (!this._rootNode) {
            this._rootNode = document.createElement("section");
            this._rootNode.id = this._getPopupId();
            Object.assign(this._rootNode.style, {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
            });
            this._rootNode.setAttribute(ROOT_POPUP_ATTRIBUTE, "");
            document.body.appendChild(this._rootNode);
        }
    };
    RootPopup.prototype._getChildrenWithProps = function (children) {
        var _this = this;
        if (!children)
            return null;
        var result;
        if (children.map) {
            result = children.map(function (child) {
                return React.cloneElement(child, { rootPopupId: _this._getPopupId() });
            });
        }
        else {
            result = React.cloneElement(children, { rootPopupId: this._getPopupId() });
        }
        return result;
    };
    RootPopup.prototype._renderToBody = function () {
        var popupContainerStyle = this.props.style ? this.props.style : containerStyle;
        if (this._seeMorePopupCount === null) {
            this._seeMorePopupCount = CustomControlSeeMoreStyleHelper.getInstance().getPopupCount();
        }
        var shouldHaveZIndex = this._seeMorePopupCount > 0;
        if (!this._style) {
            this._style = shouldHaveZIndex ? Object.assign({ zIndex: 1 }, popupContainerStyle) : popupContainerStyle;
        }
        this._initializeRootNode();
        if (this.props.children && this._rootNode) {
            ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement(View, { style: this._style, tabIndex: this.props.tabIndex }, this._getChildrenWithProps(this.props.children)), this._rootNode);
        }
    };
    RootPopup.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.style !== this.props.style) {
            this._style = null;
        }
        if (nextProps.rootNodes &&
            nextProps.rootNodes[this._getPopupId()] !== undefined &&
            nextProps.rootNodes[this._getPopupId()]) {
            this._initializeRootNode();
            this._renderToBody();
        }
    };
    RootPopup.prototype.componentDidMount = function () {
        this._renderToBody();
        if (this.props.openPopup) {
            this.props.openPopup(this._getPopupId());
        }
    };
    RootPopup.prototype.componentDidUpdate = function () {
        this._renderToBody();
    };
    RootPopup.prototype.componentWillUnmount = function () {
        ReactDOM.unmountComponentAtNode(this._rootNode);
        if (document.getElementById(this._rootNode.id)) {
            document.body.removeChild(this._rootNode);
        }
        if (this.props.closePopup) {
            this.props.closePopup(this._getPopupId());
        }
        this._rootNode = null;
    };
    RootPopup.prototype.render = function () {
        return null;
    };
    return RootPopup;
}(React.Component));
export { ROOT_POPUP_ATTRIBUTE, RootPopup };
