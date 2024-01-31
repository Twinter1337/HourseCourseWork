/// <reference types="react" />
import { ICustomControlAnimationProps } from "./Animation/ICustomControlAnimationProps";
import { SeeMoreStatus } from "./Animation/CustomControlAnimationHelper";
declare class CustomControlSeeMoreHelper {
    private _seeMorePopupInfo;
    private _seeMorePopupStatus;
    private _seeMorePopupAnimDiv;
    private _seeMoreTimeoutHelper;
    private _animFadeInReference;
    private _animEndReference;
    private _seeMoreCallback;
    shouldGivePoppedOutDimensions: any;
    destroy(): void;
    getSeeMorePopupInfo(): ICustomControlAnimationProps;
    getSeeMorePopupStatus(): SeeMoreStatus;
    private _shouldGivePoppedOutDimensions;
    seeMorePopup(component: HTMLElement, seeMoreCallback: (skipUpdateIfVirtual: boolean) => void, value: boolean, autosize?: boolean, isRTL?: boolean): void;
    private _getPopupDiv;
    private _getCloseElement;
    checkOnPopupStatus(isVirtual: boolean, isCompositing: boolean, component: HTMLElement): void;
    private _seeMoreFadeIn;
    private _seeMoreEnd;
    renderSpacer(isVirtual?: boolean, isCompositing?: boolean): JSX.Element;
    renderCloseButton(closeCallback: () => void, isVirtual?: boolean, isCompositing?: boolean, isRTL?: boolean): JSX.Element;
}
export { CustomControlSeeMoreHelper };
