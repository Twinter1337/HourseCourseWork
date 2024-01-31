import * as React from "react";
import { ICustomControlHostProps, IHostData } from "../Models/CustomControlDataInterfaces";
import { PrimitiveControls } from "../Models/CustomControlExposedInterfaces";
import { CommandingWrapper } from "../Models/CommandingWrapper";
import { CustomControlMemoizationHelper } from "./Helpers/CustomControlMemoizationHelper";
declare class VirtualComponentTranslator {
    private static _baseAttributes;
    static renderVirtualComponent(component: CustomControlInterfaces.IVirtualComponent, props: ICustomControlHostProps, hostData: IHostData, memHelper: CustomControlMemoizationHelper, purgeMemHelper?: boolean): JSX.Element;
    static generateJSXElement(elementType: PrimitiveControls, props?: any, children?: React.ReactChild | React.ReactChild[], ownProps?: ICustomControlHostProps, hostData?: IHostData, complexKeeper?: (key: string, cw: CommandingWrapper) => void): JSX.Element;
    private static _generateFlyoutParentId;
    static generateReactComponent(component: CustomControlInterfaces.IVirtualComponent, parentKey: string, defaultKey: string, props: ICustomControlHostProps, hostData: IHostData, memHelper: CustomControlMemoizationHelper, flyoutParent: string, children?: React.ReactChild | React.ReactChild[]): JSX.Element;
    private static _getComponentKey;
    private static _updateDataIdInTesthooks;
    static generateComplexControl(component: CustomControlInterfaces.IVirtualComponent, props: ICustomControlHostProps, hostData: IHostData, flyoutParent: string): JSX.Element;
    private static _parseParameters;
    private static _isVirtualComponent;
    private static _generateReactChild;
    static generateReactChildren(parentKey: string, virtualComponents: CustomControlInterfaces.VirtualComponentChild | CustomControlInterfaces.VirtualComponentChild[], props: ICustomControlHostProps, hostData: IHostData, memHelper: CustomControlMemoizationHelper, flyoutKey: string): React.ReactChild | React.ReactChild[];
    static isComplexComponent(virtualComponent: CustomControlInterfaces.IVirtualComponent): boolean;
    private static _buildContextString;
}
export { VirtualComponentTranslator };
