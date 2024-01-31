import * as React from "react";
import { IPropsBase, ComponentBase } from "../ComponentBase";
import { ITextStyle } from "../Text";
interface IInputOptionProps extends IPropsBase {
    name?: string;
    value?: CustomControlInterfaces.ICCFOptionSetValue;
    style?: IInputOptionStyle;
    disabled?: boolean;
    onChange?: (option: CustomControlInterfaces.ICCFOptionSetValue) => void;
    checked?: boolean;
}
interface IInputOptionStyle extends ITextStyle {
}
declare class InputOption extends ComponentBase<IInputOptionProps, any> {
    static displayName: string;
    private static _DATA_CHECKED;
    constructor(props?: IInputOptionProps, context?: any);
    protected getElementName(): string;
    private _onChangeHandler;
    protected getElementProps(): React.HTMLAttributes<Element>;
}
export { IInputOptionStyle, IInputOptionProps, InputOption };
