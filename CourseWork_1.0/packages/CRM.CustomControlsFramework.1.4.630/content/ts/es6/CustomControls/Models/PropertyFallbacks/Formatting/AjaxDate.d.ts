import { CultureInfo } from "../../../Utilities/CultureInfo";
export declare class AjaxDate {
    private static _getValueFromDictionary;
    private static _appendPreOrPostMatch;
    private static _expandFormat;
    private static _getEra;
    private static _getEraYear;
    private static _getTokenRegExp;
    private static _toFormattedString;
    private static _getParseRegExp;
    private static _toUpper;
    private static _toUpperArray;
    private static _getIndex;
    private static _getMonthIndex;
    private static _getAbbrMonthIndex;
    private static _getDayIndex;
    private static _getAbbrDayIndex;
    private static _expandYear;
    static localeFormat(value: Date, format: string, culture: CultureInfo): string;
    static parse(value: string, format: string, cultureInfo: CultureInfo): Date;
}
