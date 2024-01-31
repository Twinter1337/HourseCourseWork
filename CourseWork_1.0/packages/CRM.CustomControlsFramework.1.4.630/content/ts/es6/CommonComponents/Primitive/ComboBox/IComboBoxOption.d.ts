import { ITextStyle } from "../Text";
interface IComboBoxOption {
    id?: string;
    value: string;
    text: string;
    style?: ITextStyle;
}
export default IComboBoxOption;
