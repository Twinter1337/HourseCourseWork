import { ICustomControlAnimationProps, SeeMoreStatus } from "./ICustomControlAnimationProps";
interface ICustomControlFancyPopoutStyles {
    shadowStyle: any;
    outerStyle: any;
    innerStyle: any;
}
declare class CustomControlAnimationHelper {
    static getCustomControlFancyPopoutStyles(renderer: Fela.Renderer, status: SeeMoreStatus, props: ICustomControlAnimationProps): ICustomControlFancyPopoutStyles;
}
export { SeeMoreStatus, ICustomControlFancyPopoutStyles, CustomControlAnimationHelper };
