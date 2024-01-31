import { IPropsBase } from "./ComponentBase";
interface ILivePersonaCardHoverTargetProps extends IPropsBase {
    displayName: string;
    emailAddress?: string;
    entityReference: any;
    personaType: string;
    onKeyDownContainerId: string;
    recordId: string;
    registerHasLivePersonaCardLoadedCallback?: (hasLivePersonaCardLoaded: () => boolean) => void;
    registerOpenCardCallback: (openCardCallback: () => void) => void;
}
declare const LivePersonaCardHoverTarget: any;
export { ILivePersonaCardHoverTargetProps, LivePersonaCardHoverTarget };
