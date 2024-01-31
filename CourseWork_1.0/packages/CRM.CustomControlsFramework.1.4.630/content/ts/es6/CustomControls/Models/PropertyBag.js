import { VirtualComponent } from "../Components/VirtualComponent";
import CCFPerformanceTracker from "../Utilities/CCFPerformanceTracker";
import { openDatasetItemAction, getParentIdFromProps } from "../Utilities/CustomControlHelper";
import { default as XrmProxyInstance } from "../Utilities/XrmProxy";
import { CommandingWrapper } from "./CommandingWrapper";
import { LearningPathHelper } from "../Utilities/LearningPathHelper";
import { Reporting } from "./PropertyClasses/Reporting";
import { Formatting } from "./PropertyClasses/Formatting";
import { Factory } from "./PropertyClasses/Factory";
import { Diagnostics } from "./PropertyClasses/Diagnostics";
import { Utility } from "./PropertyClasses/Utility";
import { Performance } from "./PropertyClasses/Performance";
import { OrgSettings } from "./PropertyClasses/OrgSettings";
import { UserSettings } from "./PropertyClasses/UserSettings";
import { Client } from "./PropertyClasses/Client";
import { Navigation } from "./PropertyClasses/Navigation";
import { Mode } from "./PropertyClasses/Mode";
import { Device } from "./PropertyClasses/Device";
import { ExternalContext } from "./PropertyClasses/ExternalContext";
import { Communication } from "./PropertyClasses/Communication";
import { Theming } from "./PropertyClasses/Theming";
import { Resources } from "./PropertyClasses/Resources";
import { Accessibility } from "./PropertyClasses/Accessibility";
import { WebAPI } from "./PropertyClasses/WebAPI";
import { Page } from "./PropertyClasses/Page";
import { PropertyBagFactory } from "./PropertyInfrastructure/PropertyBagFactory";
import ManifestDesignHelper from "../Utilities/ManifestDesignHelper";
import * as ParamUtils from "./PropertyFallbacks/Parameters/ParameterUtils";
var PropertyBag = (function () {
    function PropertyBag(ownProps, externalUtils) {
        this._accessibilityInternalData = { keyboardShortcuts: [] };
        var bagFactory = new PropertyBagFactory(ownProps, externalUtils);
        var stop = CCFPerformanceTracker.createPerformanceEvent("PropertyBag.constructor", ownProps.logLevel).startStopwatch({
            controlId: ownProps.controlId,
            manifestControlName: ownProps.manifest.CustomControlId,
            parentId: getParentIdFromProps(ownProps),
            level: 0..toString(),
        });
        this._bagObject = {
            formatting: bagFactory.getInstance(Formatting),
            factory: bagFactory.getInstance(Factory),
            navigation: bagFactory.getInstance(Navigation),
            reporting: bagFactory.getInstance(Reporting),
            diagnostics: bagFactory.getInstance(Diagnostics),
            resources: bagFactory.getInstance(Resources),
            theming: bagFactory.getInstance(Theming),
            design: ManifestDesignHelper.GetThemeData(ownProps.manifest, ownProps.designLanguage),
            performance: bagFactory.getInstance(Performance),
            utils: bagFactory.getInstance(Utility),
            orgSettings: bagFactory.getInstance(OrgSettings),
            userSettings: bagFactory.getInstance(UserSettings),
            offline: externalUtils.xrmProxy.Offline,
            learningPath: null,
            page: bagFactory.getInstance(Page),
            webAPI: null,
            client: bagFactory.getInstance(Client),
            parameters: {
                labelForPrefix: {
                    type: "",
                    raw: ownProps.descriptor.DomId + "-" + ownProps.descriptor.Id + "-" + ownProps.descriptor.Id,
                    error: false,
                    errorMessage: "",
                    security: null,
                },
            },
            mode: null,
            accessibility: null,
            updatedProperties: [],
            device: bagFactory.getInstance(Device),
            externalContext: bagFactory.getInstance(ExternalContext),
            communicationChannel: null,
        };
        stop();
    }
    PropertyBag.prototype.generateBag = function (ownProps, hostData) {
        var bagFactory = new PropertyBagFactory(ownProps, null, hostData);
        var stop = CCFPerformanceTracker.createPerformanceEvent("PropertyBag.generateBag", ownProps.logLevel).startStopwatch({
            controlId: ownProps.controlId,
            manifestControlName: ownProps.manifest.CustomControlId,
            parentId: getParentIdFromProps(ownProps),
            level: 1..toString(),
        });
        this._bagObject.accessibility = bagFactory.getInstance(Accessibility);
        this._bagObject.mode = bagFactory.getInstance(Mode);
        this._bagObject.parameters = this._updateLatestParameters(ownProps);
        this._bagObject.children = this._getChildren(ownProps.children);
        this._bagObject.resources = bagFactory.getInstance(Resources);
        this._bagObject.webAPI = bagFactory.getInstance(WebAPI);
        this._bagObject.offline = XrmProxyInstance.Offline;
        this._bagObject.learningPath = this._getLearningPathBag(ownProps);
        this._bagObject.updatedProperties = this._getUpdatedPropertiesBag(ownProps, hostData);
        this._bagObject.communicationChannel = bagFactory.getInstance(Communication);
        this._bagObject.decorators =
            ownProps.parentDefinedControlProps != null ? ownProps.parentDefinedControlProps.decorators : null;
        this._accessibilityInternalData = this._bagObject.accessibility.accessibilityInternalData;
        this._bagObject.client.updateClientBag(hostData);
        if (ownProps.propBagData.pageData != null) {
            this._bagObject.page.updateBag(ownProps);
        }
        stop();
        this._bagObject.utils.setNotification = this._bagObject.mode.setNotification.bind(this._bagObject.mode);
        this._bagObject.utils.clearNotification = this._bagObject.mode.clearNotification.bind(this._bagObject.mode);
        return this._bagObject;
    };
    PropertyBag.prototype._getChildren = function (childrenProps) {
        if (this._memoizedChildrenRaw !== childrenProps) {
            this._memoizedChildrenRaw = childrenProps;
            var newChildren = {};
            for (var childKey in this._memoizedChildrenRaw) {
                var child = this._memoizedChildrenRaw[childKey];
                newChildren[childKey] = new VirtualComponent(child.CustomControlId, childKey, { parameters: child.Parameters }, null);
            }
            this._memoizedChildrenConverted = newChildren;
        }
        return this._memoizedChildrenConverted;
    };
    PropertyBag.prototype._updateLatestParameters = function (ownProps) {
        var labelForPrefix = "labelForPrefix";
        var params = {
            labelForPrefix: this._bagObject.parameters[labelForPrefix],
        };
        if (ownProps.dynamicData.generateDummySystemProps) {
            Object.assign(params, ParamUtils.generateDummySystemParameters());
        }
        var parameters = ownProps.dynamicData && ownProps.dynamicData.parameters;
        var _loop_1 = function (paramKey) {
            var parameter = parameters[paramKey];
            if (parameter && parameter.attributes && parameter.attributes.SourceType) {
                if (parameter.attributes.SourceType === 2) {
                    var EntityType_1 = ownProps.propBagData.modeData.entityTypeName;
                    var EntiTyId_1 = ownProps.propBagData.modeData.entityId;
                    var FieldName_1 = parameter.attributes.LogicalName;
                    parameter.attributes.recalculate = function () {
                        ownProps.actions.executeRollupRequest({ entityType: EntityType_1, id: EntiTyId_1 }, FieldName_1);
                    };
                }
            }
            if (parameters[paramKey] && parameters[paramKey].getLatestData) {
                var wrapper = parameters[paramKey];
                var param = wrapper.getLatestData();
                if (wrapper && wrapper.ensureLookupMetaDataInitialization) {
                    var delayMetadataInitializationName = "delayMetadataInitialization";
                    var delayMetadataInitializationParameter = ownProps.descriptor.Parameters && ownProps.descriptor.Parameters[delayMetadataInitializationName];
                    if (!delayMetadataInitializationParameter) {
                        var lookupWrapper = wrapper;
                        lookupWrapper.ensureLookupMetaDataInitialization({
                            retrieveLookupMetadataAction: ownProps.actions.retrieveLookupMetadataAction,
                            refreshDataSetParameter: ownProps.actions.refreshDataSetParameter,
                        });
                    }
                }
                wrapper.linkToParameter(param, {
                    retrieveAction: ownProps.actions.retrieveLookupData,
                    retrieveViewAction: ownProps.actions.retrieveView,
                    retrieveViewSelectorAction: ownProps.actions.retrieveViewSelector,
                    retrieveLookupMetadataAction: ownProps.actions.retrieveLookupMetadataAction,
                    retrieveRecordDataForForm: ownProps.actions.retrieveRecordDataForForm,
                    updateFieldValue: ownProps.actions.updateFieldValue,
                    saveEmbeddedEntity: ownProps.actions.saveEmbeddedEntity,
                    refreshDataSetParameter: ownProps.actions.refreshDataSetParameter,
                    retrieveDataSetLookupCellParameter: ownProps.actions.retrieveDataSetLookupCellParameter,
                    executeAddOnLoad: ownProps.actions.executeAddOnLoad,
                    setPowerBISignedInState: ownProps.actions.setPowerBISignedInState,
                    beginSecureSessionForResource: ownProps.actions.beginSecureSessionForResource,
                    executeNotifyHandlersThatEventOccurred: ownProps.actions.executeNotifyHandlersThatEventOccurred,
                    addSessionTab: ownProps.actions.addSessionTab,
                    closeSessionTab: ownProps.actions.closeSessionTab,
                    updateSessionTab: ownProps.actions.updateSessionTab,
                    closeAllSessionTabs: ownProps.actions.closeAllSessionTabs,
                    dismissMessage: ownProps.actions.dismissMessage,
                    markActiveTab: ownProps.actions.markActiveTab,
                    initializeReferencePanelControl: ownProps.actions.initializeReferencePanelControl,
                    cleanReferencePanelState: ownProps.actions.cleanReferencePanelState,
                    openDatasetItem: openDatasetItemAction.bind(null, ownProps, param, paramKey),
                    updateControlMemoizedDataSet: ownProps.actions.updateControlMemoizedDataSet,
                    executeRollupRequest: ownProps.actions.executeRollupRequest,
                    loadWebResource: ownProps.actions.loadWebResource,
                    updateChartFilterExpression: ownProps.actions.updateChartFilterExpression,
                    sendLookupRequest: ownProps.actions.sendLookupRequest,
                    runPreSearch: ownProps.actions.runPreSearch,
                });
                var possibleDataSetWrapper = wrapper;
                if (possibleDataSetWrapper.applyDataSetInputs) {
                    var nextAction = possibleDataSetWrapper.applyDataSetInputs(param);
                    var possibleDataSet = param;
                    if (nextAction !== 0) {
                        switch (nextAction) {
                            case 1:
                                if (possibleDataSet.refresh) {
                                    possibleDataSet.refresh();
                                }
                                break;
                            case 2:
                                if (possibleDataSet.paging &&
                                    possibleDataSet.paging.hasNextPage &&
                                    possibleDataSet.paging.loadNextPage) {
                                    possibleDataSet.paging.loadNextPage();
                                }
                                break;
                            case 3:
                                if (possibleDataSet.paging &&
                                    possibleDataSet.paging.hasPreviousPage &&
                                    possibleDataSet.paging.loadPreviousPage) {
                                    possibleDataSet.paging.loadPreviousPage();
                                }
                                break;
                            case 6:
                                var pageInput = parameters[paramKey] &&
                                    parameters[paramKey]._wrapper &&
                                    parameters[paramKey]._wrapper.previousAppliedSubParametersInput.pagingInput
                                    ? parameters[paramKey]._wrapper.previousAppliedSubParametersInput.pagingInput.raw
                                    : null;
                                var pageNumber = pageInput ? JSON.parse(pageInput).firstPageNumber : null;
                                if (possibleDataSet.paging && possibleDataSet.paging.loadExactPage) {
                                    possibleDataSet.paging.loadExactPage(pageNumber);
                                }
                        }
                    }
                }
                var commandingWrapper = CommandingWrapper.getWrapperByCommandManagerId(ownProps.id + ":" + ownProps.controlId);
                if (commandingWrapper && param.getTargetEntityType) {
                    commandingWrapper.linkParameterMethod(param);
                }
                params[paramKey] = param;
            }
            else {
                params[paramKey] = parameters[paramKey];
            }
        };
        for (var paramKey in parameters) {
            _loop_1(paramKey);
        }
        return params;
    };
    PropertyBag.prototype.getAccessibilityData = function () {
        return this._accessibilityInternalData;
    };
    PropertyBag.prototype.getLearningPathBag = function () {
        return this._bagObject.learningPath;
    };
    PropertyBag.prototype.getCommunicationBag = function () {
        return this._bagObject.communicationChannel;
    };
    PropertyBag.prototype._getLearningPathBag = function (props) {
        var controlId = LearningPathHelper.getLearningPathControlId(props);
        return {
            DOMAttributeName: LearningPathHelper.LEARNING_PATH_ATTRIBUTE,
            baseControlId: controlId,
        };
    };
    PropertyBag.prototype._getUpdatedPropertiesBag = function (ownProps, hostData) {
        var returnArray = [];
        if (hostData && hostData.updatedProperties) {
            returnArray = hostData.updatedProperties;
        }
        for (var paramKey in ownProps.dynamicData.parameters) {
            if (ownProps.dynamicData.parameters[paramKey] &&
                ownProps.dynamicData.parameters[paramKey].getUpdatedPropertiesDic) {
                var updatedPropertiesDic = ownProps.dynamicData.parameters[paramKey].getUpdatedPropertiesDic();
                for (var updatedProperty in updatedPropertiesDic) {
                    if (updatedPropertiesDic[updatedProperty] && returnArray.indexOf(updatedProperty) === -1) {
                        returnArray.push(updatedProperty);
                    }
                }
                if (ownProps.dynamicData.parameters[paramKey].clearUpdatedPropertiesDic) {
                    ownProps.dynamicData.parameters[paramKey].clearUpdatedPropertiesDic();
                }
            }
        }
        return returnArray;
    };
    return PropertyBag;
}());
export { PropertyBag };
