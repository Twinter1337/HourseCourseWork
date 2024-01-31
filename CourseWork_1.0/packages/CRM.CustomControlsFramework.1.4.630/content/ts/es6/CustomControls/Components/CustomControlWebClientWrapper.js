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
import * as Fela from "fela";
import * as PropTypes from "prop-types";
import { CustomControlHostRoot } from "./CustomControlHostRoot";
import { MeasuringHandler } from "../../CommonComponents/Common/MeasuringHandler/MeasuringHandler";
import XrmProxy from "../Utilities/XrmProxy";
import * as DefaultControlMapper from "../Utilities/DefaultControlMapper";
var CustomControlWebClientWrapper = (function (_super) {
    __extends(CustomControlWebClientWrapper, _super);
    function CustomControlWebClientWrapper(props) {
        return _super.call(this, props) || this;
    }
    CustomControlWebClientWrapper.prototype._initializeFela = function () {
        if (!CustomControlWebClientWrapper._FelaInitialized) {
            if (!CustomControlWebClientWrapper._FelaRenderer) {
                CustomControlWebClientWrapper._FelaRenderer = Fela.createRenderer();
            }
            if (!CustomControlWebClientWrapper._FelaElement) {
                CustomControlWebClientWrapper._FelaElement = document.createElement("style");
                CustomControlWebClientWrapper._FelaElement.id = "stylesheet";
                document.head.appendChild(CustomControlWebClientWrapper._FelaElement);
            }
            Fela.render(CustomControlWebClientWrapper._FelaRenderer, CustomControlWebClientWrapper._FelaElement);
            CustomControlWebClientWrapper._FelaInitialized = true;
        }
    };
    CustomControlWebClientWrapper.prototype._forceUpdate = function (callback) {
        this.forceUpdate(callback);
    };
    CustomControlWebClientWrapper.prototype.getChildContext = function () {
        if (!CustomControlWebClientWrapper._FelaInitialized) {
            this._initializeFela();
        }
        return {
            renderer: CustomControlWebClientWrapper._FelaRenderer,
        };
    };
    CustomControlWebClientWrapper.prototype.componentDidMount = function () {
        this.props.setReRenderCallBack(this._forceUpdate.bind(this));
    };
    CustomControlWebClientWrapper.prototype.render = function () {
        return React.createElement(CustomControlHostRoot, __assign({}, this.props.givenHostProps));
    };
    CustomControlWebClientWrapper._FelaInitialized = false;
    CustomControlWebClientWrapper._FelaRenderer = null;
    CustomControlWebClientWrapper._FelaElement = null;
    return CustomControlWebClientWrapper;
}(React.Component));
CustomControlWebClientWrapper.contextTypes = {
    context: PropTypes.object,
};
CustomControlWebClientWrapper.childContextTypes = {
    renderer: PropTypes.object,
};
window.CustomControls = {};
window.CustomControls.CustomControlHostRoot = CustomControlHostRoot;
window.CustomControls.CustomControlWebClientWrapper = CustomControlWebClientWrapper;
window.CustomControls.MeasuringHandler = MeasuringHandler.getInstance();
window.CustomControls.XrmProxy = XrmProxy;
window.CustomControls.Utilities = {};
window.CustomControls.Utilities.GetDefaultControlConfig =
    DefaultControlMapper.retrieveDefaultConfigurationForControl;
window.CustomControls.Utilities.GetDefaultControlManifest =
    DefaultControlMapper.retrieveDefaultManifestByConfiguration;
export { CustomControlWebClientWrapper };
