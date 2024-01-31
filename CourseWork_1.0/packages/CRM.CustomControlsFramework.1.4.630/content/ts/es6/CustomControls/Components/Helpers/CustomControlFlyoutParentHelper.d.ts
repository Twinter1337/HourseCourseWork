declare class CustomControlFlyoutParentHelper {
    private static _instance;
    private _parentFlyoutNameToChildRootNameMap;
    static getInstance(): CustomControlFlyoutParentHelper;
    mountChildFlyout(parentKey: string, childKey: string): void;
    unmountChildFlyout(parentKey: string, childKey: string): boolean;
    getChildRoots(parentKey: string): string[];
}
export { CustomControlFlyoutParentHelper };
