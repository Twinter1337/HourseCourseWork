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
import { CrmIcon } from "../FontIcon/CrmIcon";
import { MicrosoftIcon } from "../FontIcon/MicrosoftIcon";
import { MicrosoftIconSymbol } from "../FontIcon/MicrosoftIconSymbol";
import { InnerComboBox } from "../Primitive/ComboBox";
import { Image } from "../Primitive/Image";
import { List } from "../Primitive/List";
import { ListItem } from "../Primitive/ListItem";
import { ScrollView } from "../Primitive/ScrollView";
import { Text } from "../Primitive/Text";
import { View } from "../Primitive/View";
import * as roles from "../Supplementary/Accessibility/Attributes/Role";
import { Flyout, FlyoutDirection } from "../Primitive/Flyout";
var iconCategory;
(function (iconCategory) {
    iconCategory[iconCategory["Crm"] = 0] = "Crm";
    iconCategory[iconCategory["Microsoft"] = 1] = "Microsoft";
})(iconCategory || (iconCategory = {}));
var ViewSelectorControl = (function (_super) {
    __extends(ViewSelectorControl, _super);
    function ViewSelectorControl(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleItemSelected = _this.handleItemSelected.bind(_this);
        _this.handleItemIconPointerDown = _this.handleItemIconPointerDown.bind(_this);
        _this.handleSpaceKey = _this.handleSpaceKey.bind(_this);
        _this.handleRelativeToElementSelector = _this.handleRelativeToElementSelector.bind(_this);
        _this._getOptionTestHooks = _this._getOptionTestHooks.bind(_this);
        return _this;
    }
    ViewSelectorControl.prototype.handleItemSelected = function (item) {
        this.selectedListItem = item;
    };
    ViewSelectorControl.prototype.handleItemIconPointerDown = function (e) {
        var iconElement = e.currentTarget;
        this._handleIconClick(iconElement);
    };
    ViewSelectorControl.prototype.handleSpaceKey = function (e) {
        var iconElement = e.currentTarget;
        this._handleIconClick(iconElement);
    };
    ViewSelectorControl.prototype.handleArrowUp = function (amount) {
        if (!this.state.isExpanded) {
            return;
        }
        _super.prototype.handleArrowUp.call(this, amount);
    };
    ViewSelectorControl.prototype.handleArrowDown = function (e, amount) {
        if (!this.state.isExpanded) {
            _super.prototype.handleEnterKey.call(this, e);
        }
        else {
            _super.prototype.handleArrowDown.call(this, e, amount);
        }
    };
    ViewSelectorControl.prototype.handleRelativeToElementSelector = function (element) {
        return element;
    };
    ViewSelectorControl.prototype.calculateWidth = function () {
        return this.props.style && this.props.style.width ? this.props.style.width : "20em";
    };
    ViewSelectorControl.prototype._handleIconClick = function (iconElement) {
        if (iconElement &&
            iconElement.parentElement &&
            iconElement.parentElement.parentElement &&
            iconElement.parentElement.parentElement.localName === "li") {
            var listItem = iconElement.parentElement.parentElement;
            var value = listItem.dataset.value;
            if (this.props.onItemIconPointerDown && value) {
                var option = this.getOptionByValue(this.props.options, value);
                if (option) {
                    this.props.onItemIconPointerDown(option);
                }
            }
        }
    };
    ViewSelectorControl.prototype._renderListItem = function (option) {
        var iconStyle = option.iconStyle
            ? option.iconStyle
            : {
                width: 16,
                height: 16,
                margin: 2,
            };
        var icon = !option.imageSource && option.iconType ? (option.iconCategory === iconCategory.Crm ? (React.createElement(CrmIcon, { type: option.iconType, style: iconStyle })) : (React.createElement(MicrosoftIcon, { type: option.iconType, style: iconStyle }))) : null;
        var pinIconLabelText = option.iconType === 30 ? "Pin " : option.iconType === 31 ? "Unpin " : null;
        var pinAriaLabel = pinIconLabelText == null ? pinIconLabelText : pinIconLabelText + option.text;
        var listItemImage = option.imageSource ? (React.createElement(View, null,
            React.createElement(Image, { source: option.imageSource, style: iconStyle, altText: option.altText || "" }))) : option.iconType ? (React.createElement(View, { title: option.iconTitle, accessibilityLabel: pinAriaLabel, role: option.iconType === 30 || option.iconType === 31 ? roles.BUTTON : roles.PRESENTATION, onKeyDown: option.iconType === 30 || option.iconType === 31 ? this.handleSpaceKey : null, onPointerDown: this.handleItemIconPointerDown }, icon)) : null;
        return (React.createElement(View, { style: { display: "flex" } },
            listItemImage,
            React.createElement(Text, { role: roles.PRESENTATION, style: {
                    marginLeft: "10px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                } }, option.text || "\u00a0")));
    };
    ViewSelectorControl.prototype._renderOptions = function (categoryId, indexAddendum) {
        var _this = this;
        var options = this.props.options;
        var selectedStyle = this.props.selectedItemStyle || ViewSelectorControl.getSelectedItemStyle();
        return options
            .filter(function (option) { return option.categoryId === categoryId; })
            .map(function (option, i) {
            var itemId = _this.getListItemId(option);
            var optionTesthooks = _this._getOptionTestHooks(i);
            indexAddendum = indexAddendum ? indexAddendum : 0;
            var listItemKey = i + indexAddendum;
            return (React.createElement(ListItem, { key: listItemKey, id: itemId, tabIndex: -1, role: roles.OPTION, title: option.text, accessibilityLabel: option.text, dataText: option.text, dataValue: option.value, onSelected: _this.handleItemSelected, isSelected: _this.selectedIndex === listItemKey, style: ViewSelectorControl.getListItemStyle(), selectedStyle: selectedStyle, ref: _this.saveItemRef, onClick: _this.handleItemPointerDown, testhooks: optionTesthooks }, _this._renderListItem(option)));
        });
    };
    ViewSelectorControl.prototype._getOptionTestHooks = function (i) {
        if (!this.props.testhooks)
            return null;
        var testhooks = Object.assign({}, this.props.testhooks);
        for (var key in testhooks) {
            testhooks[key] += "-item-" + i;
        }
        return testhooks;
    };
    ViewSelectorControl.prototype._renderCategories = function () {
        var _this = this;
        var categories = this.props.categories;
        var renderedCategories = [];
        if (categories) {
            var indexAddendum_1 = 0;
            categories.map(function (category, i) {
                var categoryOptions = _this._renderOptions(category.id, indexAddendum_1);
                renderedCategories.push(React.createElement(View, { key: i, style: { display: "block" } },
                    category.name,
                    categoryOptions));
                indexAddendum_1 += categoryOptions.length;
            });
        }
        else {
            renderedCategories.push(React.createElement(View, null, this._renderOptions()));
        }
        return renderedCategories;
    };
    ViewSelectorControl.prototype.renderOptionsList = function () {
        var options = this.props.options;
        if (options) {
            var categoriesRendered = this._renderCategories();
            var visibleItemsAmount = this.getPageSize();
            var scrollViewId = this.getListId() + "_scrollView";
            var showScroll = visibleItemsAmount < options.length;
            var assumedItemHeight = 2.35;
            var scrollStyle = {
                height: showScroll ? visibleItemsAmount * assumedItemHeight + "em" : undefined,
                overflowY: showScroll ? "scroll" : "hidden",
                overflowX: "hidden",
                flex: "1 1 auto",
                display: "block",
            };
            var listStyle = {
                listStyleType: "none",
                width: "100%",
            };
            var selectedId = undefined;
            if (~this.selectedIndex) {
                var handleOption = options[this.selectedIndex];
                selectedId = this.getListItemId(handleOption);
            }
            var listAriaLabel = "Select a view.";
            var scrollViewAriaLabel = "Expanded list";
            return (React.createElement(List, { role: roles.LISTBOX, id: this.getListId(), title: listAriaLabel, accessibilityLabel: listAriaLabel, tabIndex: -1, style: listStyle, onKeyDown: this.keyboardNavigation },
                React.createElement(ScrollView, { id: scrollViewId, accessibilityLabel: this.isIE ? scrollViewAriaLabel : null, style: scrollStyle, role: roles.PRESENTATION, scrollToId: selectedId, horizontal: false }, categoriesRendered)));
        }
        return null;
    };
    ViewSelectorControl.prototype.getTextOnlyStyle = function () {
        var textStyle = this.props.textStyle
            ? this.props.textStyle
            : {
                borderWidth: 0,
                flex: "0 1 auto",
                outline: "none",
                cursor: "pointer",
                padding: "0.5em 0.75em",
            };
        return Object.assign({}, textStyle, { maxWidth: "100%", display: "flex" });
    };
    ViewSelectorControl.prototype.getTextOnlyInnerComponent = function (valueId) {
        return (React.createElement(View, { style: { display: "flex", maxWidth: "100%" } },
            React.createElement(Text, { style: { display: "inline-block", overflow: "hidden", textOverflow: "ellipsis" }, id: valueId, accessibilityHidden: true }, this.getSelectedOptionText()),
            this._renderCaretButton()));
    };
    ViewSelectorControl.prototype.handleValueChange = function (valueNew) {
        if (this.props.onChange) {
            this.props.onChange(valueNew);
            var thisObj_1 = this;
            setTimeout(function () {
                thisObj_1.selectItem(thisObj_1.getInternalId() + "_text");
            }, 500);
        }
    };
    ViewSelectorControl.prototype._renderCaretButton = function () {
        var caretStyle = this.props.caretStyle
            ? Object.assign({}, this.props.caretStyle)
            : {
                paddingLeft: "5px",
                color: "black",
                backgroundColor: "transparent",
            };
        var hoverStyle = this.props.hoveredStyle || { ":hover": { backgroundColor: "#EFEFEF" } };
        Object.assign(caretStyle, hoverStyle, { cursor: "pointer" });
        if (this.state.isExpanded) {
            caretStyle.backgroundColor = "#EFEFEF";
        }
        var caretType = this.props.caretType && MicrosoftIconSymbol[this.props.caretType]
            ? this.props.caretType
            : MicrosoftIconSymbol.DropdownArrow;
        return (React.createElement(Text, { id: this.getButtonId(), style: caretStyle, accessibilityHidden: true },
            React.createElement(MicrosoftIcon, { type: caretType, role: roles.PRESENTATION })));
    };
    ViewSelectorControl.prototype.renderFlyout = function (isRTL) {
        if (isRTL === void 0) { isRTL = document.body.dir === "rtl"; }
        var flyout = undefined;
        var testhooks = undefined;
        if (this.props.testhooks) {
            testhooks = Object.assign({}, this.props.testhooks);
            for (var i in testhooks) {
                testhooks[i] += "-flyout";
            }
        }
        if (!this.props.readOnly && this.state.isExpanded) {
            var optionsRendered = this.renderOptionsList();
            var itemFocusId = this.getActiveDescendantId();
            if (optionsRendered) {
                var flyoutStyle = {
                    borderWidth: "0.1em",
                    borderStyle: "solid",
                    borderColor: "#666666",
                    backgroundColor: "white",
                    width: this.calculateWidth(),
                    boxShadow: InnerComboBox.SHADOWS.Shadow01,
                };
                flyout = (React.createElement(Flyout, { id: this.getFlyoutId(), key: this.getFlyoutId(), focusElementId: itemFocusId, testhooks: testhooks, focusCallback: this.setFocusToItem, flyoutDirection: isRTL ? FlyoutDirection.down : FlyoutDirection.downleft, flyoutStyle: flyoutStyle, positionType: "relative", relativeToElementId: this.props.relativeToElementId ? this.props.relativeToElementId : this.getButtonId(), relativeToElementIdSelector: this.handleRelativeToElementSelector, onOutsideClick: this.handleFlyoutOutsideClick, parentCustomControlId: this.props.parentCustomControlId, parentFlyoutRoot: this.props.parentFlyoutRoot, rootZIndex: this.props.rootZIndex, enableTrackOnScroll: true, dismissOnScroll: !this.props.keepFlyoutOpenOnScroll }, optionsRendered));
            }
        }
        return flyout;
    };
    ViewSelectorControl.prototype.handleFlyoutOutsideClick = function (e) {
        var viewSelectorId = this.props.id;
        var viewSelector = document.getElementById(viewSelectorId);
        if (viewSelector &&
            viewSelector.contains(event.target) &&
            viewSelector.childNodes[0] !== event.target) {
            return;
        }
        var targetElement = e.target;
        if (targetElement.id !== this.getButtonId()) {
            this.setIsExpanded(false);
        }
        this.setFocus();
        this.clickedOutside = true;
    };
    ViewSelectorControl.prototype.render = function () {
        var props = Object.assign({}, this.getElementPropsInternal(), {
            title: "",
        });
        Object.assign(props.style, {
            backgroundColor: "transparent",
            display: "flex",
            flex: "0 1 auto",
            width: "100%",
        }, this.props.viewSelectorStyle);
        var control = (React.createElement(View, __assign({}, props, { ref: this.saveContainerRef }),
            React.createElement(View, { style: props.style, id: this.getInternalId() },
                this.renderTextOnly(this.focusableControlId, this.props.testhooks),
                !this.props.readOnly && this.renderFlyout(this.props.isRTL))));
        return control;
    };
    ViewSelectorControl.displayName = "ViewSelectorControl";
    return ViewSelectorControl;
}(InnerComboBox));
export { ViewSelectorControl, };
