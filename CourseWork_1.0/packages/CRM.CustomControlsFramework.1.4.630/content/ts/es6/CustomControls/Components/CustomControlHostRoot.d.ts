import * as React from "react";
import { ICustomControlHostProps, ICustomControlHostRoot } from "../Models/CustomControlDataInterfaces";
declare const enum CustomControlLifecycleState {
    InError = 0,
    Ready = 1
}
interface CustomControlHostState {
    _status?: CustomControlLifecycleState;
}
declare class CustomControlHostRoot extends React.Component<ICustomControlHostProps, CustomControlHostState> implements ICustomControlHostRoot {
    static displayName: string;
    private _internalStatus;
    private _controlInstance;
    private _propertyBag;
    private _outputChangedDebouncer;
    private _popupService;
    private _accessibilityComponent;
    private _childElements;
    private _manifestRetrieveFailed;
    private _manifestRequestedOnce;
    private _dynamicDataRequestedOnce;
    private _trackingDimensions;
    private _subscriber;
    private _commandingWrapper;
    private _latestOutputs;
    private _ignoreSelfUpdates;
    private _parentId;
    private _currentlyRendering;
    private _rootElement;
    private _skipControlUpdate;
    private _internalState;
    private _memoHelper;
    private _internalWorkPromiseResolve;
    private _internalPendingUnsentUpdates;
    private _outputChangedInternalInProgress;
    private _updateInternalTracker;
    private _seeMoreHelper;
    private _descendantInSeeMore;
    private _errorData;
    private _resolveWidth;
    private _customControlName;
    private _componentName;
    private _constantHostData;
    private _globalCommandManagerPromise;
    constructor(props?: ICustomControlHostProps);
    private _setGlobalCommandManagerPromise;
    private _getGlobalCommandManagerPromise;
    private _getPopupService;
    private _initializeData;
    private _isVirtual;
    private _seeMoreCallback;
    private _descendantSeeMoreUpdate;
    private _getDomIdDivStyleProperties;
    private _createPropertyBag;
    private _updateSelfUpdateIgnore;
    private _updateTrackResize;
    private _loadManifest;
    private _loadResources;
    private _setXrmObject;
    private _bindDOMElement;
    private _updateChildComponent;
    private _forceUpdate;
    private _unbindDOMComponent;
    private _clearAllDOMComponents;
    private _ensureParameterDynamicDataInitialization;
    private _initializeControl;
    private _updateControl;
    private _executeAnyOnLoadEventsWhenNeeded;
    private _disposeControl;
    private _onControlLoadedError;
    private _onOutputChanged;
    private _onOutputChangedInternal;
    private _convertValueToSdkFormat;
    private _getAllocatedHeight;
    private _getAllocatedWidth;
    private _generateHostDataForPropertyBag;
    private _seeMorePopup;
    private _generateHostData;
    private _getComponent;
    private _updateDimensions;
    componentWillUnmount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ICustomControlHostProps): void;
    componentDidUpdate(): void;
    private _registerToLearningPath;
    shouldComponentUpdate(nextProps: ICustomControlHostProps): boolean;
    private _renderMainControlComponent;
    renderShadow(domId: string, style: any): JSX.Element;
    private _getErrorElement;
    private _setErrorData;
    renderWrappedMainElement(domId: string, innerStyle: any): JSX.Element;
    renderContainerWithResizePads(mainElement: JSX.Element, outerStyle: any, domId: string): JSX.Element;
    private _renderGenericDiv;
    private _renderCommandingComponent;
    private _handleErrorLinkClick;
    render(): JSX.Element;
}
export { CustomControlLifecycleState, CustomControlHostState, CustomControlHostRoot };
