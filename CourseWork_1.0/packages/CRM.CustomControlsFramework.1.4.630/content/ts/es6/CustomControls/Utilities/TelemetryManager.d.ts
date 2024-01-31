import { ICustomControlHostProps } from "../Models/CustomControlDataInterfaces";
declare const COMPONENT_NAME = "CustomControlFramework";
declare class TelemetryManager {
    reportUsage(props: ICustomControlHostProps, status: string): void;
    reportEventFailure(props: ICustomControlHostProps, exception: Error, ApiName: string, parentId?: string, suggestedMitigation?: string, failureType?: string): void;
    reportEventSuccess(props: ICustomControlHostProps, ApiName?: string): void;
    generateEventParams(props: ICustomControlHostProps, apiName?: string, parentId?: string, status?: string): ControlAndClientApiInterfaces.EventParameter[];
}
declare const instance: TelemetryManager;
export { TelemetryManager, instance as default, COMPONENT_NAME };
