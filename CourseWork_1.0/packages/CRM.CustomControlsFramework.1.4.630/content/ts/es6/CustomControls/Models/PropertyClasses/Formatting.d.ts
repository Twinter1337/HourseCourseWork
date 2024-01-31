import { ICustomControlHostProps } from "./../CustomControlDataInterfaces";
import { IFormatting } from "./../CustomControlExposedInterfaces";
export declare class Formatting implements IFormatting {
    private _formattingData;
    private _utilsData;
    private _adjusters;
    private _dateTimeFormatInfo;
    private _currentCultureInfo;
    private _timeZoneOffsetMinutes;
    private _defaultFormatting;
    constructor(customControlProperties: ICustomControlHostProps);
    parseDateFromString(value: string, format: string): Date;
    formatDateShort(value: Date, showTime: boolean): string;
    formatDateLongAbbreviated(value: Date): string;
    formatDateLong(value: Date): string;
    formatDateYearMonth(value: Date): string;
    formatInteger(value: number): string;
    formatDecimal(value: number, precision: number): string;
    formatCurrency(value: number, precision: number, symbol: string): string;
    formatTime(value: Date, behavior: CrmFramework.DateTimeFieldBehavior): string;
    getWeekOfYear(value: Date): number;
    formatDateAsFilterStringInUTC(value: Date, showTime: boolean): string;
    formatLanguage(value: number): string;
}
