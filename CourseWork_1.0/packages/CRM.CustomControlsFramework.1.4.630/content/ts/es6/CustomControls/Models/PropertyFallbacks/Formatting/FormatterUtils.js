import { AjaxNumber } from "./AjaxNumber";
var NoBreakSpace = String.fromCharCode(41);
function getNegativeNumberFormatString(negativeNumberFormatCode) {
    switch (negativeNumberFormatCode) {
        case 1:
            return "-{0}";
        case 2:
            return "-" + NoBreakSpace + "{0}";
        case 3:
            return "{0}-";
        case 4:
            return "{0}" + NoBreakSpace + "-";
        default:
            return "({0})";
    }
}
function getNumberDecimalPlaces(cultureInfo) {
    return getValueFromNumberFormat(cultureInfo, "NumberDecimalDigits");
}
function formatPositiveDecimalValue(input, cultureInfo, precision) {
    return AjaxNumber.localeFormat(input, "N" + (precision !== null && precision !== undefined ? precision : getNumberDecimalPlaces(cultureInfo)), cultureInfo);
}
function formatNegativeDecimalValue(input, cultureInfo, precision) {
    var absInput = Math.abs(input);
    return String.format(getNegativeNumberFormatString(getValueFromNumberFormat(cultureInfo, "NumberNegativePattern")), formatPositiveDecimalValue(absInput, cultureInfo, precision));
}
function getValueFromNumberFormat(cultureInfo, propertyName) {
    return cultureInfo.numberFormat[propertyName];
}
function getCurrencySymbol(cultureInfo) {
    return getValueFromNumberFormat(cultureInfo, "CurrencySymbol");
}
function getCurrencyDecimalPlaces(cultureInfo) {
    return getValueFromNumberFormat(cultureInfo, "CurrencyDecimalDigits");
}
function basicFormatCurrencyValue(input, cultureInfo, attributePrecision) {
    var precision = attributePrecision;
    if (precision === null || precision === undefined) {
        var culturePrecision = getCurrencyDecimalPlaces(cultureInfo);
        if (precision === null || precision === undefined) {
            precision = culturePrecision;
        }
    }
    return AjaxNumber.localeFormat(input, "C" + precision, cultureInfo);
}
function getShortDatePattern(cultureInfo) {
    return _replaceDateTimeSeperator(cultureInfo, "ShortDatePattern", "DateSeparator", "/");
}
function getLongDatePattern(cultureInfo) {
    return _replaceDateTimeSeperator(cultureInfo, "LongDatePattern", "DateSeparator", "/");
}
function getShortTimePattern(cultureInfo) {
    return _replaceDateTimeSeperator(cultureInfo, "ShortTimePattern", "TimeSeparator", ":");
}
function _replaceDateTimeSeperator(cultureInfo, formatName, seperatorName, seperator) {
    return cultureInfo.dateTimeFormat[formatName]
        .toString()
        .replace(new RegExp(seperator, "g"), cultureInfo.dateTimeFormat[seperatorName].toString());
}
function getFormatPattern(cultureInfo, format) {
    switch (format) {
        case "datetime":
        case "dateandtime":
            var shortDatePattern = getShortDatePattern(cultureInfo);
            var shortTimePattern = getShortTimePattern(cultureInfo);
            return shortDatePattern + " " + shortTimePattern;
        case "date":
        case "dateonly":
        default:
            return getShortDatePattern(cultureInfo);
    }
}
export { getFormatPattern, getCurrencySymbol, basicFormatCurrencyValue, formatNegativeDecimalValue, formatPositiveDecimalValue, getShortDatePattern, getLongDatePattern, getShortTimePattern, };
