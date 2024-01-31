import * as React from "react";
import { IViewProps } from "../View";
interface IRootPopupProps extends IViewProps {
    parentCustomControlId?: string;
    rootNodes?: {
        [id: string]: boolean;
    };
}
interface IRootPopupDisptachProps {
    openPopup?: (popupId: string) => Promise<any>;
    closePopup?: (popupId: string) => Promise<any>;
}
declare const ROOT_POPUP_ATTRIBUTE = "openedPopups";
declare type RootPopupProps = IRootPopupProps & IRootPopupDisptachProps;
declare class RootPopup extends React.Component<RootPopupProps, {}> {
    private _rootNode;
    private _style;
    private _seeMorePopupCount;
    private _getPopupId;
    private _initializeRootNode;
    private _getChildrenWithProps;
    private _renderToBody;
    componentWillReceiveProps(nextProps: IRootPopupProps): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<RootPopup>;
}
export { ROOT_POPUP_ATTRIBUTE, IRootPopupProps, IRootPopupDisptachProps, RootPopupProps, RootPopup };
