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
var InnerTableRow = (function (_super) {
    __extends(InnerTableRow, _super);
    function InnerTableRow(props) {
        var _this = _super.call(this, props) || this;
        _this._onClickWrapper = _this._onClickWrapper.bind(_this);
        return _this;
    }
    InnerTableRow.prototype._onClickWrapper = function (event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };
    InnerTableRow.prototype.getElementName = function () {
        return "tr";
    };
    InnerTableRow.prototype.getElementProps = function () {
        var returnElementProps = Object.assign({}, this.props, {
            children: null,
            onClick: this._onClickWrapper,
        });
        return returnElementProps;
    };
    InnerTableRow.displayName = "TableRow";
    return InnerTableRow;
}(ComponentBase));
var TableRow = ReactFela.connect(mapStylesToProps)(InnerTableRow);
export { InnerTableRow, TableRow };
