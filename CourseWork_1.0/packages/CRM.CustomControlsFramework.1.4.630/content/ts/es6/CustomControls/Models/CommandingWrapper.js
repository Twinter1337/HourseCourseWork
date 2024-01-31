import { ManifestType } from "../Utilities/ManifestType";
import CCFPerformanceTracker from "../Utilities/CCFPerformanceTracker";
import { COMPONENT_NAME } from "../Utilities/TelemetryManager";
import XrmProxy from "../Utilities/XrmProxy";
var COMMANDING_WRAPPER_CREATE_COMMAND_MANAGER = "CommandingWrapper.CreateCommandManager";
var CommandingWrapper = (function () {
    function CommandingWrapper(ownProps) {
        this._commandManagerPromises = {};
        this._commandManagerIds = [];
        this._memoizedProps = {};
        this._datasetWrappers = {};
        this._ownProps = ownProps;
        this._commandManagerId = ownProps.id + ":" + ownProps.controlId;
        this._externalCommandManagerId = ownProps.externalCommandManagerId;
        this._externalCommandManagerPromise = ownProps.externalCommandPromise;
        this._createCommandManagerUXComponent = ownProps.actions.createCommandManagerUXComponent();
        CommandingWrapper._commandingWrapperMap[this._commandManagerId] = this;
    }
    CommandingWrapper.prototype.addDataSetWrapper = function (datasetWrapper) {
        var viewId = datasetWrapper.getLatestData().getViewId();
        viewId = viewId ? viewId.toLowerCase() : "";
        var id = viewId + ":" + datasetWrapper.getEntityTypeName();
        this._datasetWrappers[id] = datasetWrapper;
    };
    CommandingWrapper.prototype.retrieveRecordCommandForDatasetWrapper = function (allRecords, etn, records, commandButtonIds, filterByPriority, useNestedFormat, refreshAllRules) {
        var _this = this;
        var commandManagerId = this._commandManagerId + ":" + etn;
        var _me = this;
        var contextToken = this._ownProps.contextToken;
        var controlConstructorName = this._ownProps && this._ownProps.manifest && this._ownProps.manifest.ConstructorName
            ? this._ownProps.manifest.ConstructorName
            : null;
        var pageId = this._ownProps.id;
        if (!etn) {
            XrmProxy.Diagnostics.traceError(COMPONENT_NAME + ".Models.CommandingWrapper", "Entity Type Name is undefined");
            return Promise.reject("Entity Type Name is undefined");
        }
        if (this._externalCommandManagerId) {
            if (this._externalCommandInitialized) {
                return this._ownProps.actions.retrieveRecordCommand(allRecords, this._externalCommandManagerId, contextToken, records, commandButtonIds, filterByPriority, useNestedFormat, controlConstructorName, refreshAllRules, pageId);
            }
            else {
                if (this._externalCommandManagerPromise && this._externalCommandManagerPromise.isResolved()) {
                    this._externalCommandInitialized = true;
                    return _me._ownProps.actions.retrieveRecordCommand(allRecords, _me._externalCommandManagerId, contextToken, records, commandButtonIds, filterByPriority, useNestedFormat, controlConstructorName, refreshAllRules, pageId);
                }
                var returnExternalPromise = this._externalCommandManagerPromise.then(function () {
                    _me._externalCommandInitialized = true;
                    return _me._ownProps.actions.retrieveRecordCommand(allRecords, _me._externalCommandManagerId, contextToken, records, commandButtonIds, filterByPriority, useNestedFormat, controlConstructorName, refreshAllRules, pageId);
                }, function () {
                    var error = new Error("Command bar initialization failed");
                    XrmProxy.Reporting.reportFailure(COMPONENT_NAME + ".Models", error, "Rejected promise", [
                        { name: "etn", value: etn },
                        { name: "commandManagerId", value: _this._commandManagerId },
                        {
                            name: "APIName",
                            value: COMPONENT_NAME + ".Models.CommandingWrapper.retrieveRecordCommandForDatasetWrapper",
                        },
                    ]);
                    throw error;
                });
                return returnExternalPromise;
            }
        }
        else if (this._commandManagerPromises[etn]) {
            return this._commandManagerPromises[etn].then(function () {
                return _me._ownProps.actions.retrieveRecordCommand(allRecords, commandManagerId, contextToken, records, commandButtonIds, filterByPriority, useNestedFormat, controlConstructorName, refreshAllRules, pageId);
            });
        }
        else if (this._commandManagerIds.indexOf(commandManagerId) > -1) {
            return this._ownProps.actions.retrieveRecordCommand(allRecords, commandManagerId, contextToken, records, commandButtonIds, filterByPriority, useNestedFormat, controlConstructorName, refreshAllRules, pageId);
        }
        else {
            var stop_1 = CCFPerformanceTracker.createPerformanceEvent(COMMANDING_WRAPPER_CREATE_COMMAND_MANAGER).startStopwatch({
                controlId: this._ownProps.controlId,
                commandManagerId: commandManagerId,
            });
            var promise = _me._ownProps.actions.initializeCommandManager(pageId, this._ownProps.contextToken, this._ownProps.controlId, commandManagerId);
            this._commandManagerPromises[etn] = promise;
            return promise.then(function () {
                stop_1();
                _me._commandManagerPromises[etn] = null;
                return _me._ownProps.actions.retrieveRecordCommand(allRecords, commandManagerId, contextToken, records, commandButtonIds, filterByPriority, useNestedFormat, controlConstructorName, refreshAllRules, pageId);
            });
        }
    };
    CommandingWrapper.prototype.retrieveRecordCommand = function (viewId, etn, records, commandButtonIds, filterByPriority, useNestedFormat, refreshAllRules) {
        var datasetWrapper = this._datasetWrappers[(viewId ? viewId.toLowerCase() : "") + ":" + etn];
        if (!datasetWrapper) {
            XrmProxy.Diagnostics.traceError(COMPONENT_NAME + ".retrieveRecordCommand", "No associated dataset, promise rejected");
            return Promise.reject(0);
        }
        var allRecords = datasetWrapper.getLatestData().records;
        return this.retrieveRecordCommandForDatasetWrapper(allRecords, etn, records, commandButtonIds, filterByPriority, useNestedFormat, refreshAllRules);
    };
    CommandingWrapper.prototype.getRibbonId = function (etn, pageType, related) {
        var HOMEPAGEGRID_RIBBON_CONTEXT = "HomePageGrid:";
        var SUBGRIDSTANDARD_RIBBON_CONTEXT = "SubGridStandard:";
        var SUBGRIDASOCIATED_RIBBON_CONTEXT = "SubGridAssociated:";
        var context;
        if (pageType.toLowerCase() !== "form" && pageType.toLowerCase() !== "editform") {
            context = HOMEPAGEGRID_RIBBON_CONTEXT;
        }
        else if (related) {
            context = SUBGRIDASOCIATED_RIBBON_CONTEXT;
        }
        else {
            context = SUBGRIDSTANDARD_RIBBON_CONTEXT;
        }
        return context + etn;
    };
    CommandingWrapper.prototype.getDefaultConfigParameters = function (ownProps) {
        if (ownProps.configuration && ownProps.configuration.Parameters) {
            var parameters = ownProps.configuration.Parameters;
            for (var name_1 in parameters) {
                var parameter = parameters[name_1];
                if (parameter.Type === ManifestType.Grid || parameter.Type === ManifestType.TimelineWall) {
                    var dataSetParam = parameter;
                    return dataSetParam;
                }
            }
        }
    };
    CommandingWrapper.prototype.populateCommandManagerProps = function (props, ownProps, entityTypeName) {
        var param = this.getDefaultConfigParameters(ownProps);
        var etn = entityTypeName || (param ? param.TargetEntityType || param.EntityName : null);
        var related = param ? !!param.RelationshipName : null;
        props.id = ownProps.id;
        if (props.ribbonId === undefined) {
            if (ownProps.formInfo && ownProps.formInfo.RibbonId) {
                props.ribbonId = ownProps.formInfo.RibbonId;
            }
            else {
                var type = ownProps.pageType.toLowerCase();
                props.ribbonId = this.getRibbonId(etn, type, related);
            }
        }
        props.commandManagerId = this._commandManagerId + ":" + etn;
        props.key = props.key || this._ownProps.controlId + "-" + etn + "-commandbar";
        props.mainMenuLength = props.mainMenuLength || 3;
        props.contextToken = props.contextToken || ownProps.contextToken;
        props.customControlType =
            this._ownProps && this._ownProps.manifest && this._ownProps.manifest.ConstructorName
                ? this._ownProps.manifest.ConstructorName
                : null;
    };
    CommandingWrapper.prototype.createCommandBar = function (props) {
        this._commandManagerIds.push(props.commandManagerId);
        return this._createCommandManagerUXComponent(props);
    };
    CommandingWrapper.prototype.createHiddenCommandManager = function (commandManagerId, ribbonId) {
        var etn = commandManagerId.split(":")[2];
        var props;
        if (this._memoizedProps[commandManagerId]) {
            props = this._memoizedProps[commandManagerId];
        }
        else {
            props = {};
            this._memoizedProps[commandManagerId] = props;
            props.isHidden = true;
            props.ribbonId = ribbonId;
            props.metaDataLoadedPromise = this._commandManagerPromises[etn];
            this.populateCommandManagerProps(props, this._ownProps, etn);
        }
        return this.createCommandBar(props);
    };
    CommandingWrapper.getWrapperByCommandManagerId = function (commandManagerId) {
        return CommandingWrapper._commandingWrapperMap[commandManagerId];
    };
    CommandingWrapper.prototype.getCommandManagerId = function () {
        return this._commandManagerId;
    };
    CommandingWrapper.prototype.linkParameterMethod = function (parameter) {
        parameter.retrieveRecordCommand = this.retrieveRecordCommandForDatasetWrapper.bind(this, parameter.records, parameter.getTargetEntityType());
    };
    CommandingWrapper.prototype.unmount = function () {
        delete CommandingWrapper._commandingWrapperMap[this._commandManagerId];
    };
    CommandingWrapper._commandingWrapperMap = {};
    return CommandingWrapper;
}());
export { CommandingWrapper };
