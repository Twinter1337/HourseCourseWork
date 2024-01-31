/// <reference types="react" />
import { CommandingWrapper } from "../../Models/CommandingWrapper";
declare class CustomControlMemoizationHelper {
    private _memoizedMap;
    private _newMemoizedMap;
    private _isCompositing;
    private _newIsCompositing;
    private _midRender;
    private _memoizedRoot;
    private _wrapperMap;
    constructor();
    startRenderFunction(): void;
    stopRenderFunction(): void;
    destroy(): void;
    getVirtualComponentByKey(key: string): CustomControlInterfaces.IVirtualComponent;
    getReactElementByKey(key: string): JSX.Element;
    retainElement(key: string): void;
    addUpdatedEntry(key: string, element: JSX.Element, vc: CustomControlInterfaces.IVirtualComponent): void;
    setIsCompositing(value: boolean): void;
    getIsCompositing(): boolean;
    setRoot(element: JSX.Element): void;
    getRoot(): JSX.Element;
    addCommandWrapper(key: string, cw: CommandingWrapper): void;
}
export { CustomControlMemoizationHelper };
