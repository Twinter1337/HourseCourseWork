import { ICustomControlHostProps } from "../Models/CustomControlDataInterfaces";
declare class LearningPathHelper {
    static LEARNING_PATH_ATTRIBUTE: string;
    static registerToLearningPath(element: HTMLElement, domAttribute: string, controlId: string): void;
    static getLearningPathControlId(bagProps: ICustomControlHostProps): string;
    private static _generateLpControlIdForWebresource;
    private static _generateLpControlIdForccDataSetControl;
}
export { LearningPathHelper };
