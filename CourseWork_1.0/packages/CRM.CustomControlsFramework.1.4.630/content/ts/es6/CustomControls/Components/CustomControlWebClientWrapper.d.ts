import * as React from "react";
import * as Fela from "fela";
import { ICustomControlWebClientWrapperProps } from "../Models/CustomControlDataInterfaces";
interface CustomControlWebClientWrapperState {
}
declare class CustomControlWebClientWrapper extends React.Component<ICustomControlWebClientWrapperProps, CustomControlWebClientWrapperState> {
    private static _FelaInitialized;
    private static _FelaRenderer;
    private static _FelaElement;
    constructor(props?: ICustomControlWebClientWrapperProps);
    private _initializeFela;
    private _forceUpdate;
    getChildContext(): {
        renderer: Fela.Renderer;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export { CustomControlWebClientWrapperState, CustomControlWebClientWrapper };
