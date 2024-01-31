import * as React from "react";
import { View } from "../../../CommonComponents/Primitive/View";
import { Button } from "../../../CommonComponents/Primitive/Button";
import { MicrosoftIcon } from "../../../CommonComponents/FontIcon/MicrosoftIcon";
import { MicrosoftIconSymbol } from "../../../CommonComponents/FontIcon/MicrosoftIconSymbol";
import { CustomControlSeeMoreStyleHelper } from "./CustomControlSeeMoreStyleHelper";
import { CustomControlConstants } from "../../Utilities/CustomControlConstants";
import XrmProxy from "../../Utilities/XrmProxy";
var COMPONENT_NAME = CustomControlConstants.CCF + ".CustomControlSeeMoreHelper";
var CustomControlSeeMoreHelper = (function () {
    function CustomControlSeeMoreHelper() {
        this._seeMorePopupInfo = null;
        this._seeMorePopupStatus = -1;
        this._seeMorePopupAnimDiv = null;
        this._seeMoreTimeoutHelper = -1;
        this._animFadeInReference = this._seeMoreFadeIn.bind(this);
        this._animEndReference = this._seeMoreEnd.bind(this);
        this.shouldGivePoppedOutDimensions = this._shouldGivePoppedOutDimensions.bind(this);
    }
    CustomControlSeeMoreHelper.prototype.destroy = function () {
        if (this._seeMorePopupStatus !== -1) {
            CustomControlSeeMoreStyleHelper.getInstance().seeMoreClose();
        }
        this._seeMorePopupInfo = null;
        this._seeMorePopupAnimDiv = null;
        this._animFadeInReference = null;
        this._animEndReference = null;
    };
    CustomControlSeeMoreHelper.prototype.getSeeMorePopupInfo = function () {
        return this._seeMorePopupInfo;
    };
    CustomControlSeeMoreHelper.prototype.getSeeMorePopupStatus = function () {
        return this._seeMorePopupStatus;
    };
    CustomControlSeeMoreHelper.prototype._shouldGivePoppedOutDimensions = function (isVirtual) {
        var seeMorePopupInfo = this.getSeeMorePopupInfo();
        var seeMorePopupStatus = this.getSeeMorePopupStatus();
        return (seeMorePopupInfo &&
            seeMorePopupStatus !== 4 &&
            ((isVirtual && seeMorePopupStatus !== 0) ||
                (!isVirtual && seeMorePopupStatus !== 3)));
    };
    CustomControlSeeMoreHelper.prototype.seeMorePopup = function (component, seeMoreCallback, value, autosize, isRTL) {
        if (autosize === void 0) { autosize = false; }
        if (isRTL === void 0) { isRTL = false; }
        var componentInfo = component.getBoundingClientRect();
        this._seeMoreCallback = seeMoreCallback;
        var skipUpdateIfVirtual = true;
        switch (this._seeMorePopupStatus) {
            case -1:
                if (!value)
                    return;
                CustomControlSeeMoreStyleHelper.getInstance().seeMoreOpen();
                this._seeMorePopupStatus = 0;
                var docWidth = document.body.getBoundingClientRect().width;
                var endWidth = !autosize || componentInfo.width > (2 / 3) * docWidth
                    ? docWidth
                    : componentInfo.width > (1 / 3) * docWidth
                        ? (2 / 3) * docWidth
                        : (1 / 3) * docWidth;
                var mobileMWidth = 769;
                var isMobile = docWidth < mobileMWidth;
                var fullScreen = endWidth === docWidth && !isMobile;
                var stdmargin = 80;
                endWidth = endWidth - (fullScreen ? stdmargin : 0);
                var endHeight = document.body.getBoundingClientRect().height - (isMobile ? 0 : stdmargin);
                var endTop = 0.5 * endHeight - 0.5 * componentInfo.height + (isMobile ? 0 : 0.5 * stdmargin);
                var endLeft = (fullScreen ? 0.5 * stdmargin : 0) + (fullScreen ? endWidth : docWidth) / 2 - componentInfo.width / 2;
                this._seeMorePopupInfo = {
                    startHeight: componentInfo.height,
                    startWidth: componentInfo.width,
                    startLeft: componentInfo.left,
                    startTop: componentInfo.top,
                    endTop: endTop,
                    endLeft: endLeft,
                    endWidthInner: endWidth - 48,
                    endHeightInner: endHeight - 48,
                    endWidth: endWidth,
                    endHeight: endHeight,
                    isRTL: isRTL,
                };
                this._seeMoreCallback(skipUpdateIfVirtual);
                break;
            case 2:
                if (value)
                    return;
                CustomControlSeeMoreStyleHelper.getInstance().seeMoreClose();
                this._seeMorePopupStatus = 3;
                this._seeMoreCallback(skipUpdateIfVirtual);
                break;
        }
    };
    CustomControlSeeMoreHelper.prototype._getPopupDiv = function (isVirtual, isCompositing, component) {
        switch (this._seeMorePopupStatus) {
            case 0:
            case 3:
                if (isVirtual) {
                    return component.lastChild;
                }
                else {
                    return component.parentElement.parentElement;
                }
            case 4:
                if (isVirtual) {
                    if (isCompositing) {
                        return component.lastChild.lastChild;
                    }
                    return component;
                }
                else {
                    return component.parentElement.parentElement;
                }
            case 1:
                if (isVirtual) {
                    return component.lastChild.lastChild;
                }
                else {
                    return component.parentElement.parentElement;
                }
        }
        XrmProxy.Diagnostics.traceInfo(COMPONENT_NAME + "._getPopupDiv", "Get pop div success");
        return component;
    };
    CustomControlSeeMoreHelper.prototype._getCloseElement = function (component) {
        var element = component;
        if (element) {
            if (element.id.endsWith("_outer")) {
                element = element.firstChild;
            }
            for (var i = 0; i < element.children.length; i++) {
                if (element.children[i].id === "closeButtonContainer") {
                    return element.children[i].firstChild;
                }
            }
        }
        return null;
    };
    CustomControlSeeMoreHelper.prototype.checkOnPopupStatus = function (isVirtual, isCompositing, component) {
        if (this._seeMoreTimeoutHelper !== -1) {
            window.clearTimeout(this._seeMoreTimeoutHelper);
            this._seeMoreTimeoutHelper = -1;
        }
        switch (this._seeMorePopupStatus) {
            case 0:
            case 3:
                this._seeMorePopupAnimDiv = this._getPopupDiv(isVirtual, isCompositing, component);
                this._seeMorePopupAnimDiv.addEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.addEventListener("webkitAnimationEnd", this._animFadeInReference);
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreFadeIn.bind(this), 2500);
                break;
            case 4:
                this._seeMorePopupAnimDiv = this._getPopupDiv(isVirtual, isCompositing, component);
                this._seeMorePopupAnimDiv.addEventListener("animationend", this._animEndReference);
                this._seeMorePopupAnimDiv.addEventListener("webkitAnimationEnd", this._animEndReference);
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreEnd.bind(this), 1000);
                break;
            case 1:
                this._seeMorePopupAnimDiv = this._getPopupDiv(isVirtual, isCompositing, component);
                this._seeMorePopupAnimDiv.addEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.addEventListener("webkitAnimationEnd", this._animFadeInReference);
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreFadeIn.bind(this), 1000);
                break;
        }
    };
    CustomControlSeeMoreHelper.prototype._seeMoreFadeIn = function () {
        if (this._seeMoreTimeoutHelper !== -1) {
            window.clearTimeout(this._seeMoreTimeoutHelper);
            this._seeMoreTimeoutHelper = -1;
        }
        var skipUpdateIfVirtual = false;
        switch (this._seeMorePopupStatus) {
            case 1:
                this._seeMorePopupStatus = 2;
                this._getCloseElement(this._seeMorePopupAnimDiv).focus();
                this._seeMorePopupAnimDiv.removeEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.removeEventListener("webkitAnimationEnd", this._animFadeInReference);
                break;
            case 0:
                this._seeMorePopupStatus = 1;
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreFadeIn.bind(this), 1500);
                this._seeMoreCallback(skipUpdateIfVirtual);
                break;
            case 3:
                this._seeMorePopupStatus = 4;
                this._seeMorePopupAnimDiv.removeEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.removeEventListener("webkitAnimationEnd", this._animFadeInReference);
                this._seeMorePopupAnimDiv = null;
                this._seeMoreCallback(skipUpdateIfVirtual);
        }
    };
    CustomControlSeeMoreHelper.prototype._seeMoreEnd = function () {
        if (this._seeMoreTimeoutHelper !== -1) {
            window.clearTimeout(this._seeMoreTimeoutHelper);
            this._seeMoreTimeoutHelper = -1;
        }
        this._seeMorePopupAnimDiv.removeEventListener("animationend", this._animEndReference);
        this._seeMorePopupAnimDiv.removeEventListener("webkitAnimationEnd", this._animEndReference);
        this._seeMorePopupAnimDiv = null;
        this._seeMorePopupStatus = -1;
        this._seeMorePopupInfo = null;
        var skipUpdateIfVirtual = true;
        this._seeMoreCallback(skipUpdateIfVirtual);
    };
    CustomControlSeeMoreHelper.prototype.renderSpacer = function (isVirtual, isCompositing) {
        if (isVirtual === void 0) { isVirtual = true; }
        if (isCompositing === void 0) { isCompositing = false; }
        if (isVirtual &&
            !isCompositing &&
            (this._seeMorePopupStatus === -1 || this._seeMorePopupStatus === 4)) {
            XrmProxy.Diagnostics.traceInfo(COMPONENT_NAME + ".renderSpacer", "Render Spacer return null");
            return null;
        }
        var outerStyle = this._seeMorePopupStatus === 1 ||
            this._seeMorePopupStatus === 2 ||
            this._seeMorePopupStatus === 3
            ? {
                height: "24px",
                width: "100%",
                backgroundColor: "white",
            }
            : { display: "none" };
        return React.createElement(View, { key: "ccf_spacer", style: outerStyle });
    };
    CustomControlSeeMoreHelper.prototype.renderCloseButton = function (closeCallback, isVirtual, isCompositing, isRTL) {
        if (isVirtual === void 0) { isVirtual = true; }
        if (isCompositing === void 0) { isCompositing = false; }
        if (isRTL === void 0) { isRTL = false; }
        if (isVirtual &&
            !isCompositing &&
            (this._seeMorePopupStatus === -1 || this._seeMorePopupStatus === 4)) {
            return null;
        }
        var iconStyle = {
            fontSize: "16px",
            color: "#333333",
            position: "absolute",
            top: "0px",
            right: "0px",
            left: "0px",
            height: "48px",
            width: "48px",
            textAlign: "center",
            paddingTop: "16px",
            cursor: "pointer",
        };
        var buttonStyle = {
            backgroundColor: "transparent",
            border: "none",
            position: "absolute",
            top: "0px",
            right: isRTL ? "" : "-24px",
            left: isRTL ? "-24px" : "",
            height: "48px",
            width: "48px",
            textAlign: "center",
            paddingTop: "16px",
            cursor: "pointer",
        };
        var outerStyle = this._seeMorePopupStatus === 1 ||
            this._seeMorePopupStatus === 2 ||
            this._seeMorePopupStatus === 3
            ? {
                height: "48px",
                width: "100%",
                top: "-24px",
                position: "absolute",
            }
            : { display: "none" };
        return (React.createElement(View, { key: "closeButtonContainer", id: "closeButtonContainer", style: outerStyle },
            React.createElement(Button, { key: "closeButton", id: "closeButton", style: buttonStyle, tabIndex: 0, title: "Close Fullscreen Control button", onClick: closeCallback, accessibilityLabel: "Close Fullscreen Control button" },
                React.createElement(MicrosoftIcon, { key: "closeButtonIcon", style: iconStyle, type: MicrosoftIconSymbol.Close }))));
    };
    return CustomControlSeeMoreHelper;
}());
export { CustomControlSeeMoreHelper };
