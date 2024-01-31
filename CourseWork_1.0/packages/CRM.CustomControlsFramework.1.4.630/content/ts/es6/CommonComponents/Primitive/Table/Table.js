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
var InnerTable = (function (_super) {
    __extends(InnerTable, _super);
    function InnerTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerTable.prototype.getElementName = function () {
        return "table";
    };
    InnerTable.displayName = "Table";
    return InnerTable;
}(ComponentBase));
var Table = ReactFela.connect(mapStylesToProps)(InnerTable);
export { InnerTable, Table };
