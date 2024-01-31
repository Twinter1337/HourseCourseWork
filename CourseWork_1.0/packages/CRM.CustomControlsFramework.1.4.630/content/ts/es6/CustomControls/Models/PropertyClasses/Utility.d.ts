import { ICustomControlHostProps, IExternalUtils } from "./../CustomControlDataInterfaces";
import * as CustomControlBagInterfaces from "./../CustomControlExposedInterfaces";
import { VirtualComponent } from "../../components/VirtualComponent";
import { IPerformanceStopwatch } from "./../CustomControlDependantInterfaces";
import { Dictionary } from "../../Utilities/Dictionary";
export declare class Utility implements CustomControlBagInterfaces.IUtility {
    private _customControlProperties;
    private _externalUtils;
    private _internalEventListeners;
    private _globalCommandManagerInitialized;
    constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
    private _generateInternalEventListeners;
    private _handleSystemKeydown;
    doesControlExist(customControlName: string): Promise<boolean>;
    beginSecureSessionForResource(resource: string, cookieName: string, cookieDomain: string, allowPrompt?: boolean): Promise<Date>;
    createPerformanceMarker(id: string): void;
    createPerformanceStopwatch(id: string): IPerformanceStopwatch;
    log(customControlName: string, message: string, logType: number): void;
    getEntityMetadata(entityType: string, attributes?: string[]): Promise<ControlAndClientApiInterfaces.EntityMetadata>;
    getEntitiesMetadata(entityToAttributes: {
        [entityType: string]: string[];
    }): Promise<ControlAndClientApiInterfaces.EntityMetadata[]>;
    getParentControlName(): string;
    getResourceString(webResourceName: string, key: string): string;
    isFeatureEnabled(featureName: string): boolean;
    canOpenUrl(url: string): Promise<boolean>;
    getFormId(entityType: string, formType: string): Promise<string>;
    lookupObjects(lookupOptions: ControlAndClientApiInterfaces.LookupOptions): Promise<ControlAndClientApiInterfaces.LookupValue[]>;
    bindDOMElement(virtualComponent: VirtualComponent, DOMNode: Element): void;
    fireEvent(eventName: string, params: any): void;
    getControlDefaultMapping(dataType: string, attributes?: CustomControlInterfaces.ICustomControlAttributes): string;
    getPopupService(): CustomControlBagInterfaces.IPopupService;
    requestRender(callback?: () => void): void;
    unbindDOMComponent(componentId: string): boolean;
    updateComponent(id: string, props: Dictionary): void;
    createCrmUri(url: string): string;
    createServerUri(url: string): string;
    openInBrowser(url: string): void;
    getServiceUri(): string;
    setState(state: any): boolean;
    crmUrlEncode(s: string): string;
    hasEntityPrivilege(entityTypeName: string, privilegeType: Constants.PrivilegeType, privilegeDepth: Constants.PrivilegeDepth): boolean;
    crmHtmlEncode(s: string): string;
    isNullOrUndefined(object: any): boolean;
    isNullOrEmptyString(object: any): boolean;
    notifyOutputChanged(): void;
    eventListenerExists(eventName: string): boolean;
    getElementByRef(): Element;
    disablePanoramaScroll(): boolean;
    scrollToView(): void;
    setNotification(): boolean;
    clearNotification(): boolean;
    triggerOfflineMetadataSync(): Promise<void>;
    addGlobalNotification(type: number, level: number, message: string, title: string, action: ControlAndClientApiInterfaces.ActionDescriptor, onCloseHandler: ControlAndClientApiInterfaces.EventHandler): Promise<string>;
    clearGlobalNotification(id: string): Promise<void>;
    clearGlobalNotifications(): Promise<void>;
    retrieveChartDrilldownAttributes(etn: string): Promise<any>;
    retrieveFormWithAttributes(entityName: string, formId?: string, formType?: string): Promise<any>;
    getEntityName(entityTypeCode: number): string;
    retrieveRecordCommand(allRecords: {
        [id: string]: CustomControlInterfaces.DataSetRecord;
    }, commandManagerId: string, records: string[], commandButtonIds?: string[], filterByPriority?: boolean, useNestedFormat?: boolean): DynamicsSrc.IDeferred<CustomControlInterfaces.ICommandObjectWrapper[], CustomControlInterfaces.ErrorResponse>;
}
