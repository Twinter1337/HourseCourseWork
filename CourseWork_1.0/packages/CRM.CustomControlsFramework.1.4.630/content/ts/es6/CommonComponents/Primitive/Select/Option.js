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
import { ComponentBase } from "../ComponentBase";
import * as ReactFela from "react-fela";
import { mapStylesToProps } from "../FelaConnectHelper";
var InnerOption = (function (_super) {
    __extends(InnerOption, _super);
    function InnerOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerOption.prototype.getElementName = function () {
        return "option";
    };
    InnerOption.prototype.getElementProps = function () {
        var props = {
            value: this.props.value ? this.props.value.Value.toString() : "-1",
        };
        if (this.props.disabled) {
            props.disabled = true;
        }
        if (this.props.selected) {
            props[InnerOption._DATA_SELECTED] = true;
        }
        return props;
    };
    InnerOption.prototype.getElementChildren = function () {
        return this.props.value ? this.props.value.Label || "" : "";
    };
    InnerOption._DATA_SELECTED = "data-selected";
    return InnerOption;
}(ComponentBase));
var Option = ReactFela.connect(mapStylesToProps)(InnerOption);
export { InnerOption, Option };
