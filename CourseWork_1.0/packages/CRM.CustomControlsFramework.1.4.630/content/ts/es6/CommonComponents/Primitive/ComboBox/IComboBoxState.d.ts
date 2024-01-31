import IComboBoxOption from "./IComboBoxOption";
interface IComboBoxState {
    option?: IComboBoxOption;
    freeTextValue?: string;
    freeTextOptionDisplayValue?: string;
    isExpanded?: boolean;
    isAutoCompleting?: boolean;
    hasFocus?: boolean;
}
export default IComboBoxState;
