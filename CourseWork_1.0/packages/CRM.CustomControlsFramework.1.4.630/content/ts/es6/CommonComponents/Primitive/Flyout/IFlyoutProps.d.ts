import FlyoutPositionType from "./FlyoutPositionType";
import IPosition from "./IPosition";
import ISize from "./ISize";
import FlyoutDirection from "./FlyoutDirection";
import { IViewStyle } from "../IViewStyle";
interface IFlyoutProps {
    id?: string;
    role?: string;
    accessibilityModal?: boolean;
    groupId?: string;
    relativeToElementId?: string;
    relativeToElementIdSelector?: (element: HTMLElement) => HTMLElement;
    positionType?: FlyoutPositionType;
    position?: IPosition;
    size?: ISize;
    flyoutDirection?: FlyoutDirection;
    enforceDirection?: boolean;
    flyoutStyle?: IViewStyle;
    key?: string;
    onOutsideClick?: (e: MouseEvent) => void;
    testhooks?: {
        [hookName: string]: string;
    };
    parentCustomControlId?: string;
    focusCallback?: (elemntId: string) => void;
    focusElementId?: string;
    hasDynamicContent?: boolean;
    parentFlyoutRoot?: string;
    rootZIndex?: boolean;
    isPortalToElement?: boolean;
    portalContainerId?: string;
    enableTrackOnScroll?: boolean;
    dismissOnScroll?: boolean;
    keepOpenOnWindowBlur?: boolean;
}
export default IFlyoutProps;
