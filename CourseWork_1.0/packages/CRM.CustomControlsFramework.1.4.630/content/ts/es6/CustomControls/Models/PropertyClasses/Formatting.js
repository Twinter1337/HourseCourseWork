import { SimpleFormatter } from "./../PropertyFallbacks/Formatting/SimpleFormatters";
import { CultureInfo } from "../../Utilities/CultureInfo";
var Formatting = (function () {
    function Formatting(customControlProperties) {
        this._defaultFormatting = {
            timeZoneUtcOffsetMinutes: new Date().getTimezoneOffset(),
            dateTimeFormatInfo: CultureInfo.CurrentCulture.dateTimeFormat,
            numberFormatInfo: CultureInfo.CurrentCulture.numberFormat,
            timeZoneAdjusters: [],
            formatInfoCultureName: CultureInfo.CurrentCulture.name,
            formatter: SimpleFormatter,
            languagesByCode: {},
        };
        var overrideFormatter = customControlProperties.propBagData.formattingData
            ? Object.assign(this._defaultFormatting.formatter, customControlProperties.propBagData.formattingData.formatter)
            : this._defaultFormatting.formatter;
        this._formattingData = Object.assign(this._defaultFormatting, customControlProperties.propBagData.formattingData, {
            formatter: overrideFormatter,
        });
        this._utilsData = customControlProperties.propBagData.utilsData;
        this._adjusters = this._formattingData.timeZoneAdjusters;
        this._dateTimeFormatInfo = this._formattingData.dateTimeFormatInfo;
        this._currentCultureInfo = new CultureInfo(this._formattingData.formatInfoCultureName, this._formattingData.numberFormatInfo, this._formattingData.dateTimeFormatInfo);
        this._timeZoneOffsetMinutes = this._formattingData.timeZoneUtcOffsetMinutes;
    }
    Formatting.prototype.parseDateFromString = function (value, format) {
        var formatterProperties = { cultureInfo: this._currentCultureInfo };
        return this._formattingData.formatter.ParseDateFromString(value, format, this._currentCultureInfo, formatterProperties);
    };
    Formatting.prototype.formatDateShort = function (value, showTime) {
        if (showTime) {
            return this._formattingData.formatter.formatShortDateTimeValue(value, this._currentCultureInfo, 0, this._timeZoneOffsetMinutes, this._adjusters);
        }
        else {
            return this._formattingData.formatter.formatShortDateValue(value, this._currentCultureInfo, 0, this._timeZoneOffsetMinutes, this._adjusters);
        }
    };
    Formatting.prototype.formatDateLongAbbreviated = function (value) {
        return this._formattingData.formatter.formatDateLongAbbreviated(value, this._currentCultureInfo, 0, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.formatDateLong = function (value) {
        return this._formattingData.formatter.formatLongDateValue(value, this._currentCultureInfo, 0, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.formatDateYearMonth = function (value) {
        return this._formattingData.formatter.formatDateYearMonthValue(value, this._currentCultureInfo, 0, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.formatInteger = function (value) {
        return this._formattingData.formatter.formatIntegerValue(value, this._currentCultureInfo);
    };
    Formatting.prototype.formatDecimal = function (value, precision) {
        return this._formattingData.formatter.formatDecimalValue(value, this._currentCultureInfo, precision);
    };
    Formatting.prototype.formatCurrency = function (value, precision, symbol) {
        return this._formattingData.formatter.formatCurrencyValue(value, this._currentCultureInfo, symbol, precision);
    };
    Formatting.prototype.formatTime = function (value, behavior) {
        return this._formattingData.formatter.formatShortDateTimeValue(value, this._currentCultureInfo, behavior, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.getWeekOfYear = function (value) {
        return this._utilsData.dateTimeUtils.getWeekOfYear(value, this._dateTimeFormatInfo.firstDayOfWeek, this._dateTimeFormatInfo.calendarWeekRule);
    };
    Formatting.prototype.formatDateAsFilterStringInUTC = function (value, showTime) {
        if (showTime) {
            return this._formattingData.formatter.formatSortableDateTimeValue(value, this._currentCultureInfo, 0, this._timeZoneOffsetMinutes, this._adjusters);
        }
        else {
            return this._formattingData.formatter.formatSortableDateValue(value, this._currentCultureInfo, 0);
        }
    };
    Formatting.prototype.formatLanguage = function (value) {
        return this._formattingData.formatter.formatLanguageValue(value, this._formattingData.languagesByCode);
    };
    return Formatting;
}());
export { Formatting };
