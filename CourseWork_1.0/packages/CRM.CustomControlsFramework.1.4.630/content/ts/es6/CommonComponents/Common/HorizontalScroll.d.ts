import * as React from "react";
import { IViewStyle } from "../Primitive/IViewStyle";
import { ComponentBase, IPropsBase } from "../Primitive/ComponentBase";
import { IButtonStyle } from "../Primitive/Button";
import { IScrollViewStyle } from "../Primitive/IScrollViewStyle";
import { IFlexboxContainerStyle } from "../Primitive/IFlexboxContainerStyle";
import { MicrosoftIconSymbol } from "../FontIcon/MicrosoftIconSymbol";
interface IHorizontalScrollState {
    prevArrowDisabled?: boolean;
    nextArrowDisabled?: boolean;
}
interface IHorizontalScrollStyle extends IViewStyle {
}
interface IHorizontalScrollProps extends IPropsBase {
    style?: IHorizontalScrollStyle;
    startChildIndex?: number;
    arrowWidth?: number;
    arrowButtonStyle?: IButtonStyle;
    prevArrowIconType?: MicrosoftIconSymbol;
    nextArrowIconType?: MicrosoftIconSymbol;
    onPrevArrowClick?: (event: React.MouseEvent, index: number) => void;
    onNextArrowClick?: (event: React.MouseEvent, index: number) => void;
    onPrevArrowKeyDown?: (event: React.KeyboardEvent, index: number) => void;
    onNextArrowKeyDown?: (event: React.KeyboardEvent, index: number) => void;
    scrollViewStyle?: IScrollViewStyle & IFlexboxContainerStyle;
    semanticTag?: "div" | "ul";
    isRTL?: boolean;
}
declare class InnerHorizontalScroll extends ComponentBase<IHorizontalScrollProps, IHorizontalScrollState> {
    static displayName: string;
    private _userAgent;
    private _scrollView;
    private _currentChildIndex;
    private _SCROLL_THRESHOLD;
    private _FULL_BROWSER_TRANSLATE_DURATION;
    private _TABLET_TRANSLATE_DURATION;
    private _MOBILE_BROWSER_TRANSLATE_DURATION;
    constructor(props: IHorizontalScrollProps);
    protected getElementProps(): React.HTMLAttributes<Element>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _saveScrollViewRefCallback;
    private _onPrevKeyDown;
    private _onNextKeyDown;
    private _onPrevClick;
    private _onNextClick;
    private _slideByArrow;
    private _getScrollLeft;
    private _getPrevIcon;
    private _getNextIcon;
    private _getCurrentChildIndex;
    private _boundIndex;
    private _getChildIndexToScroll;
    private _recalculateState;
    private _getChildByIndex;
    private _scrollToChildByIndex;
    private _scrollToChild;
    private _scrollToWithTransition;
    private _scrollTransition;
    private _scrollEase;
    private _getScrollableContainer;
    private _renderPrevArrowButton;
    private _renderNextArrowButton;
    private _renderArrowIcon;
    private _isBrowserIEorEdge;
    private _isBrowserFirefox;
    private _isBrowserChromeOrAndroid;
    private _isBrowserSafari;
    private _scrollToContent;
    private _scrollToContentHorizontal;
    private _getCalculatedStyle;
    private _getTotalWidthIncludingMargins;
    private _getChildIndex;
    private _determineDuration;
    render(): JSX.Element;
}
declare const HorizontalScroll: any;
export { IHorizontalScrollState, IHorizontalScrollStyle, IHorizontalScrollProps, InnerHorizontalScroll, HorizontalScroll, };
