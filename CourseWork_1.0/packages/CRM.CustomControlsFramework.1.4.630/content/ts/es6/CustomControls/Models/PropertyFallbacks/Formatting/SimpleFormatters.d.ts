import { CultureInfo } from "../../../Utilities/CultureInfo";
declare class SimpleFormatter {
    static ParseDateFromString(value: string, format: string, cultureInfo: CultureInfo): Date;
    static formatIntegerValue(input: number, cultureInfo: CultureInfo): string;
    static formatCurrencyValue(input: number, cultureInfo: CultureInfo, currencySymbol?: string, precision?: number): string;
    static formatShortDateValue(input: Date, cultureInfo: CultureInfo): string;
    static formatLongDateValue(input: Date, cultureInfo: CultureInfo): string;
    static formatDecimalValue(input: number, cultureInfo: CultureInfo, precision?: number): string;
    static formatSortableDateValue(input: Date): string;
    static formatSortableDateTimeValue(input: Date): string;
    static formatShortDateTimeValue(input: Date, cultureInfo: CultureInfo): string;
    static formatDateLongAbbreviated(input: Date, cultureInfo: CultureInfo): string;
    static formatDateYearMonthValue(input: Date, cultureInfo: CultureInfo): string;
    static formatLanguageValue(input: number, languagesByCode: {
        [code: number]: string;
    }): string;
}
export { SimpleFormatter };
