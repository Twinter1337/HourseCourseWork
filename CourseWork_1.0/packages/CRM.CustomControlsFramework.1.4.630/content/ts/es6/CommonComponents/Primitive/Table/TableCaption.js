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
var InnerTableCaption = (function (_super) {
    __extends(InnerTableCaption, _super);
    function InnerTableCaption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerTableCaption.prototype.getElementName = function () {
        return "caption";
    };
    InnerTableCaption.displayName = "TableCaption";
    return InnerTableCaption;
}(ComponentBase));
var TableCaption = ReactFela.connect(mapStylesToProps)(InnerTableCaption);
export { InnerTableCaption, TableCaption };
