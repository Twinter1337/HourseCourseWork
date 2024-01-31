import { ICustomControlHostProps } from "./../CustomControlDataInterfaces";
import * as CustomControlBagInterfaces from "./../CustomControlExposedInterfaces";
export declare class Device implements CustomControlBagInterfaces.IDevice {
    private _bagProps;
    constructor(customControlProperties: ICustomControlHostProps);
    captureImage(options?: ControlAndClientApiInterfaces.CaptureImageOptions): Promise<File>;
    captureAudio(): Promise<File>;
    captureVideo(): Promise<File>;
    pickFile(options?: ControlAndClientApiInterfaces.PickFileOptions): Promise<File[]>;
    getBarcodeValue(): Promise<string>;
    getCurrentPosition(): Promise<Position>;
    isGetBarcodeValueOperationAvailable(): boolean;
    isTakePictureOperationAvailable(): boolean;
    isCaptureVideoOperationAvailable(): boolean;
    isCaptureAudioOperationAvailable(): boolean;
}
