import { SeeMoreStatus } from "./ICustomControlAnimationProps";
declare class CustomControlShadowAnimationHelper {
    private static _shadowOutAnimationName;
    private static _shadowInAnimationName;
    private static _shadowOutKeyframeGen;
    private static _shadowInKeyframeGen;
    static generateFancyShadowInAnimationName(renderer: Fela.Renderer): string;
    static generateFancyShadowOutAnimationName(renderer: Fela.Renderer): string;
    static generateShadowClass(renderer: Fela.Renderer, status: SeeMoreStatus): any;
}
export { CustomControlShadowAnimationHelper };
