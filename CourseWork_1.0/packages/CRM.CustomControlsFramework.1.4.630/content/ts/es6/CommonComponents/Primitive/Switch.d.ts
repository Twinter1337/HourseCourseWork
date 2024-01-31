/// <reference types="react" />
import { IViewStyle } from "./IViewStyle";
import { ComponentBase, IPropsBase } from "./ComponentBase";
import { ITextStyle } from "./Text";
import { ISelectCompositeStyle } from "./Select/Select";
import { IRadioInputCompositeStyle } from "./Radio/RadioInput";
import { ICheckboxStyle } from "./Checkbox";
interface ISwitchProps extends IPropsBase {
    options?: CustomControlInterfaces.ICCFOptionSetValue[];
    style?: ISwitchStyle;
    disabled?: boolean;
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    onOptionSetValueChange?: (option?: CustomControlInterfaces.ICCFOptionSetValue) => void;
    displayValue?: string;
    displayAs?: string;
    name?: string;
    absoluteId?: string;
    defaultValue?: string;
}
interface ISwitchState {
    checked: boolean;
}
interface ISwitchStyle extends IViewStyle, ISelectCompositeStyle, ITextStyle, IRadioInputCompositeStyle, ICheckboxStyle {
}
declare class InnerSwitch extends ComponentBase<ISwitchProps, ISwitchState> {
    static displayName: string;
    private static _CHECKBOX_DISPLAY_TAG;
    private static _SELECT_DISPLAY_TAG;
    private static _RADIO_DISPLAY_TAG;
    constructor(props?: ISwitchProps, context?: any);
    componentWillReceiveProps(nextProps: ISwitchProps): void;
    private _onCheckboxChange;
    private _optionSetChange;
    protected onClick(): void;
    protected getCheckboxComponent(): JSX.Element;
    protected getSelectComponent(): JSX.Element;
    protected getLabelComponent(): JSX.Element;
    render(): JSX.Element;
}
declare const Switch: any;
export { ISwitchState, ISwitchStyle, ISwitchProps, InnerSwitch, Switch };
