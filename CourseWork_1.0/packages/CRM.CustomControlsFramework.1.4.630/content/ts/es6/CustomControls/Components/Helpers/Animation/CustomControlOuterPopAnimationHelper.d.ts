import { SeeMoreStatus, ICustomControlAnimationProps } from "./ICustomControlAnimationProps";
declare class CustomControlOuterPopAnimationHelper {
    private static _outerOutKeyframeGen;
    private static _outerInKeyframeGen;
    static generateOuterClass(renderer: Fela.Renderer, status: SeeMoreStatus, props: ICustomControlAnimationProps): {
        animationDuration: string;
        animationFillMode: string;
        animationDirection: string;
        animationIterationCount: string;
        animationName: string;
        position: string;
        display: string;
        height: string;
        width: string;
        overflow: string;
        backgroundColor: string;
        transform: string;
        left: string;
        top: string;
        zIndex: number;
    };
}
export { CustomControlOuterPopAnimationHelper };
