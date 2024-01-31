import { SeeMoreStatus, ICustomControlAnimationProps } from "./ICustomControlAnimationProps";
declare class CustomControlInnerPopAnimationHelper {
    private static _innerOutKeyframeGen;
    private static _innerInKeyframeGen;
    private static _fadeInAnimation;
    private static _isIE;
    static generateInnerClass(renderer: Fela.Renderer, status: SeeMoreStatus, props: ICustomControlAnimationProps): {
        animationFillMode: string;
        animationDirection: string;
        animationIterationCount: string;
        display: string;
        backgroundColor: string;
        opacity: string;
        height: string;
        width: string;
        transform: string;
        marginTop: string;
        marginLeft: string;
        marginRight: string;
        paddingTop: string;
        animationName: string;
        animationDuration: string;
        webkitBackfaceVisibility: string;
        backfaceVisibility: string;
        position: string;
    };
}
export { CustomControlInnerPopAnimationHelper };
