import { buildUniqueCustomControlId, buildTabIndexValue, focusElementById, blurElementById, getHighContrastEnabled, } from "../../Utilities/CustomControlHelper";
var Accessibility = (function () {
    function Accessibility(customControlProperties) {
        this._customControlProperties = customControlProperties;
        this.assignedTabIndex = buildTabIndexValue(this._customControlProperties);
        this._accessibilityInternalData = { keyboardShortcuts: [] };
        this.isHighContrastEnabled = getHighContrastEnabled();
    }
    Accessibility.prototype.registerShortcut = function (keyCombination, shortcutHandler, isGlobal, areaName, shortcutDescription, srcElementId) {
        var keyboardShortcut = this._customControlProperties.actions.createKeyboardShortcut(keyCombination, shortcutHandler, isGlobal, areaName, shortcutDescription, srcElementId);
        this._accessibilityInternalData.keyboardShortcuts.push(keyboardShortcut);
    };
    Accessibility.prototype.getUniqueId = function (id) {
        return buildUniqueCustomControlId(this._customControlProperties, id);
    };
    Accessibility.prototype.focusElementById = function (id, isAbsoluteId) {
        focusElementById(this._customControlProperties, id, isAbsoluteId);
    };
    Accessibility.prototype.blurElementById = function (id, isAbsoluteId) {
        blurElementById(this._customControlProperties, id, isAbsoluteId);
    };
    Object.defineProperty(Accessibility.prototype, "accessibilityInternalData", {
        get: function () {
            return this._accessibilityInternalData;
        },
        set: function (data) {
            this._accessibilityInternalData = data;
        },
        enumerable: true,
        configurable: true
    });
    return Accessibility;
}());
export { Accessibility };
