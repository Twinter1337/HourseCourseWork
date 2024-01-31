import { ICustomControlHostProps } from "./../CustomControlDataInterfaces";
import { IAccessibility, AccessibilityInternalData } from "./../CustomControlExposedInterfaces";
export declare class Accessibility implements IAccessibility {
    private _customControlProperties;
    private _accessibilityInternalData;
    isHighContrastEnabled: boolean;
    assignedTabIndex: number;
    constructor(customControlProperties: ICustomControlHostProps);
    registerShortcut(keyCombination: number[], shortcutHandler: (event: KeyboardEvent) => void, isGlobal: boolean, areaName: string, shortcutDescription: string, srcElementId?: string): void;
    getUniqueId(id: string): string;
    focusElementById(id: string, isAbsoluteId?: boolean): void;
    blurElementById(id: string, isAbsoluteId?: boolean): void;
    accessibilityInternalData: AccessibilityInternalData;
}
