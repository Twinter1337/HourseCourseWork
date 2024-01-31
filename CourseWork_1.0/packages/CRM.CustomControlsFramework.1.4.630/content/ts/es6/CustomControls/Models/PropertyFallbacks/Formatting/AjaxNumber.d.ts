import { CultureInfo } from "../../../Utilities/CultureInfo";
export declare class AjaxNumber {
    private static _getValueFromDictionary;
    private static _toFormattedString;
    static localeFormat(num: number, format: string, cultureInfo: CultureInfo): string;
}
