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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import { View } from "../View";
import { ROOT_POPUP_ATTRIBUTE } from "./RootPopup";
import { FlyoutPopupManager } from "../../Common/FlyoutPopupManager/FlyoutPopupManager";
import { FlyoutPopupManagerSubscriberType, } from "../../Common/FlyoutPopupManager/IFlyoutPopupManagerSubscriber";
var PopupType;
(function (PopupType) {
    PopupType[PopupType["Root"] = 1] = "Root";
    PopupType[PopupType["Nested"] = 2] = "Nested";
})(PopupType || (PopupType = {}));
function getVisibilityStyle(isVisible, style) {
    return {
        display: isVisible ? (style.display ? style.display : "flex") : "none",
    };
}
function getPositioningStyle(style, parent) {
    var result = Object.assign({}, style);
    var parentPosition = parent && parent.getBoundingClientRect();
    if (parentPosition) {
        result.top = parseInt(result.top, 10) - parentPosition.top + "px";
        result.left = parseInt(result.left, 10) - parentPosition.left + "px";
    }
    return result;
}
var shadowStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    backgroundColor: "rgba(0, 0, 0, 0.3)",
};
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = null;
        _this._popupElement = null;
        _this._stopPropagation = function (e) {
            e.stopPropagation();
        };
        _this._forceClosePopup = function (e) {
            _this._stopPropagation(e);
            if (_this.props.closeOnOutsideClick) {
                _this.setState({
                    forceClose: true,
                });
                if (_this.props.onPopupForcedClosed) {
                    _this.props.onPopupForcedClosed();
                }
            }
        };
        _this.state = {
            forceClose: false,
        };
        _this._rootElement = document.getElementById(props.rootPopupId);
        return _this;
    }
    Popup.prototype._getId = function () {
        return this.props.rootPopupId + "_" + (this.props.id || "innerPopup");
    };
    Popup.prototype._getCurrentPopupToOpen = function (forceClose, popupToOpen) {
        var result = "";
        if (!forceClose && popupToOpen) {
            var popupArray = popupToOpen.split(".");
            result = popupArray[0];
        }
        return result;
    };
    Popup.prototype._getNextPopupToOpen = function (forceClose, popupToOpen) {
        var result = "";
        if (!forceClose && popupToOpen) {
            var popupArray = popupToOpen.split(".");
            popupArray.splice(0, 1);
            result = popupArray.join(".");
        }
        return result;
    };
    Popup.prototype._getChildrenProps = function () {
        return {
            type: PopupType.Nested,
            parent: this._popupElement,
            popupToOpen: this._getNextPopupToOpen(this.state.forceClose, this.props.popupToOpen),
            rootPopupId: this.props.rootPopupId,
        };
    };
    Popup.prototype._getChildrenWithProps = function (children) {
        var _this = this;
        if (!children)
            return null;
        var result;
        if (children.map) {
            result = children.map(function (child) {
                return child.type === Popup ? React.cloneElement(child, _this._getChildrenProps()) : child;
            });
        }
        else {
            result = children === Popup ? React.cloneElement(children, this._getChildrenProps()) : children;
        }
        return result;
    };
    Popup.prototype._isVisible = function () {
        return this._getCurrentPopupToOpen(this.state.forceClose, this.props.popupToOpen) === this.props.name;
    };
    Popup.prototype._applyRootNodeStyle = function () {
        Object.assign(this._rootElement.style, this.props.rootStyle);
        this._toggleRootElementVisibility();
    };
    Popup.prototype._toggleRootElementVisibility = function () {
        if (this.props.isDialogPopup) {
            return;
        }
        var openedPopups = this._rootElement.getAttribute(ROOT_POPUP_ATTRIBUTE);
        if (!openedPopups) {
            this._rootElement.style.display = "none";
        }
        else if (this._rootElement.style.display === "none") {
            this._rootElement.style.display = "flex";
        }
    };
    Popup.prototype._getStaticContent = function () {
        var content = this.props.content;
        var result = null;
        if (content) {
            result = React.createElement(View, { ref: "staticContent" });
        }
        return result;
    };
    Popup.prototype._registerPopup = function (props, state) {
        var name = props.name, popupToOpen = props.popupToOpen;
        var forceClose = state.forceClose;
        var openedPopups = this._rootElement.getAttribute(ROOT_POPUP_ATTRIBUTE);
        openedPopups = !openedPopups ? "" : openedPopups;
        var popupIndex = openedPopups.indexOf(name);
        if (forceClose || name !== this._getCurrentPopupToOpen(forceClose, popupToOpen)) {
            if (~popupIndex) {
                this._rootElement.setAttribute(ROOT_POPUP_ATTRIBUTE, openedPopups.replace("." + name, ""));
            }
            return;
        }
        if (!~popupIndex) {
            this._rootElement.setAttribute(ROOT_POPUP_ATTRIBUTE, openedPopups.concat("." + name));
        }
    };
    Popup.prototype._subscribeFlyoutPopupManager = function () {
        var _this = this;
        this._managerSubscriber = {
            type: FlyoutPopupManagerSubscriberType.Popup,
            onPointerDown: function (e) {
                if (e.target === document.getElementById(_this._getId())) {
                    _this._forceClosePopup(e);
                }
            },
            getComponent: function () {
                return _this._popupElement;
            },
        };
        FlyoutPopupManager.getInstance().addSubscribers(this._managerSubscriber);
    };
    Popup.prototype.componentWillMount = function () {
        if (!this.props.isDialogPopup) {
            this._registerPopup(this.props, this.state);
        }
    };
    Popup.prototype.componentDidMount = function () {
        var _this = this;
        this._popupElement = ReactDOM.findDOMNode(this.refs.popup);
        this.forceUpdate(function () {
            var staticContentRef = _this.refs.staticContent;
            if (staticContentRef) {
                var staticContentElement = ReactDOM.findDOMNode(staticContentRef);
                staticContentElement.appendChild(_this.props.content);
            }
        });
        this._subscribeFlyoutPopupManager();
    };
    Popup.prototype.componentWillReceiveProps = function () {
        this.setState({
            forceClose: false,
        });
    };
    Popup.prototype.componentWillUpdate = function (nextProps, nextState) {
        this._registerPopup(nextProps, nextState);
        var staticContentRef = this.refs.staticContent;
        if (staticContentRef) {
            var staticContentElement = ReactDOM.findDOMNode(staticContentRef);
            while (staticContentElement.firstChild) {
                staticContentElement.removeChild(staticContentElement.firstChild);
            }
            staticContentElement.appendChild(nextProps.content);
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        FlyoutPopupManager.getInstance().removeSubscribers(this._managerSubscriber);
    };
    Popup.prototype.render = function () {
        var _a, _b;
        var combinedShadowContainerStyle = this.props.isDialogPopup
            ? this.props.style
            : Object.assign({}, this.props.style, getPositioningStyle(this.props.shadowStyle, this.props.parent), getVisibilityStyle(this._isVisible(), this.props.shadowStyle));
        var combinedPopupStyle = Object.assign({}, this.props.popupStyle, this.props.isDialogPopup ? {} : getVisibilityStyle(this._isVisible(), this.props.popupStyle));
        this._applyRootNodeStyle();
        var overlayHandlerProps = (_a = {},
            _a[FlyoutPopupManager.pointerDownEvent] = this._forceClosePopup,
            _a);
        var popupHandlerProps = (_b = {},
            _b[FlyoutPopupManager.pointerDownEvent] = this._stopPropagation,
            _b);
        return (React.createElement(View, __assign({ id: this._getId(), style: combinedShadowContainerStyle }, overlayHandlerProps),
            React.createElement(View, __assign({ style: combinedPopupStyle }, popupHandlerProps, { ref: "popup" }),
                this._getStaticContent(),
                this._getChildrenWithProps(this.props.children))));
    };
    return Popup;
}(React.Component));
Popup.defaultProps = {
    shadowStyle: shadowStyle,
    isDialogPopup: false,
    type: PopupType.Root,
    closeOnOutsideClick: false,
};
export { PopupType, Popup };
