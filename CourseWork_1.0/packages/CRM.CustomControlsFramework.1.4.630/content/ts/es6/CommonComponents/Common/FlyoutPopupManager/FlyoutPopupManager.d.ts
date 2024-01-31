import { IFlyoutPopupManager } from "./IFlyoutPopupManager";
import { IFlyoutPopupManagerSubscriber } from "./IFlyoutPopupManagerSubscriber";
declare class FlyoutPopupManager implements IFlyoutPopupManager {
    private static readonly _isIOS;
    static readonly pointerDownEvent: string;
    static readonly scrollEvent: string;
    private static _instance;
    private _subscribers;
    constructor();
    static getInstance(): FlyoutPopupManager;
    readonly subscribers: IFlyoutPopupManagerSubscriber[];
    addSubscribers(subscriber: IFlyoutPopupManagerSubscriber): void;
    removeSubscribers(subscriber: IFlyoutPopupManagerSubscriber): void;
    fireEvent(event: MouseEvent): void;
}
export { FlyoutPopupManager };
