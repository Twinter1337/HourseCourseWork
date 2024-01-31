import { IThemeMap } from "../Models/CustomControlDataInterfaces";
declare class ManifestDesignHelper {
    private _map;
    GetThemeData(manifest: CustomControlInterfaces.ICustomControlManifest, theme: IThemeMap): {
        [key: string]: string;
    };
}
declare const instance: ManifestDesignHelper;
export { ManifestDesignHelper, instance as default };
