var XrmProxy = (function () {
    function XrmProxy() {
        this._userSettings = {
            userId: null,
            getTimeZoneOffsetMinutes: null,
            isHighContrastEnabled: null,
            isRTL: null,
            languageId: null,
            userName: null,
            securityRoles: null,
            pagingLimit: null,
        };
        this._orgSettings = {
            languageId: null,
            uniqueName: null,
            isAutoSaveEnabled: null,
            attributes: null,
        };
        this._utils = {
            beginSecureSessionForResource: null,
            getEntityMetadata: null,
            getEntitiesMetadata: null,
            getResourceString: null,
            isFeatureEnabled: null,
            lookupObjects: null,
            getEntityName: null,
            getFormId: null,
            canOpenUrl: null,
        };
        this._page = {
            getClientUrl: null,
        };
        this._reporting = {
            reportSuccess: null,
            reportFailure: null,
            reportEvent: null,
        };
        this._diagnostics = {
            traceError: null,
            traceWarning: null,
            traceInfo: null,
            traceDebug: null,
        };
        this._client = {
            getClient: null,
            getClientState: null,
            getFormFactor: null,
        };
        this._applicationUI = {
            addGlobalNotification: null,
            clearGlobalNotification: null,
            clearGlobalNotifications: null,
        };
        this._webApiContext = {
            online: {
                retrieveRecord: null,
                retrieveMultipleRecords: null,
                updateRecord: null,
                createRecord: null,
                deleteRecord: null,
                execute: null,
                executeMultiple: null,
            },
            offline: {
                retrieveRecord: null,
                retrieveMultipleRecords: null,
                updateRecord: null,
                createRecord: null,
                deleteRecord: null,
                execute: null,
                executeMultiple: null,
            },
        };
        this._initialized = false;
    }
    Object.defineProperty(XrmProxy.prototype, "Initialized", {
        get: function () {
            return this._initialized;
        },
        set: function (value) {
            this._initialized = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "OrgSettings", {
        get: function () {
            return this._orgSettings;
        },
        set: function (value) {
            this._orgSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "UserSettings", {
        get: function () {
            return this._userSettings;
        },
        set: function (value) {
            this._userSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Offline", {
        get: function () {
            return this._offline;
        },
        set: function (value) {
            this._offline = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Utils", {
        get: function () {
            return this._utils;
        },
        set: function (value) {
            this._utils = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Reporting", {
        get: function () {
            return this._reporting;
        },
        set: function (value) {
            this._reporting = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Diagnostics", {
        get: function () {
            return this._diagnostics;
        },
        set: function (value) {
            this._diagnostics = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: true,
        configurable: true
    });
    XrmProxy.prototype.setUserSettings = function (userSettings) {
        this._userSettings = userSettings;
    };
    XrmProxy.prototype.setOrgSettings = function (orgSettings) {
        this._orgSettings = orgSettings;
    };
    XrmProxy.prototype.setOffline = function (offline) {
        this._offline = offline;
    };
    XrmProxy.prototype.setUtils = function (utilities) {
        this._utils = utilities;
    };
    XrmProxy.prototype.setPage = function (page) {
        this._page = page;
    };
    XrmProxy.prototype.setReporting = function (reporting) {
        this._reporting = reporting;
    };
    XrmProxy.prototype.setDiagnostics = function (diagnostics) {
        this._diagnostics = diagnostics;
    };
    XrmProxy.prototype.setClient = function (client) {
        this._client = client;
    };
    XrmProxy.prototype.setNavigationContext = function (xrmNavigation) {
        this._navigationContext = xrmNavigation;
    };
    XrmProxy.prototype.setDeviceContext = function (xrmDevice) {
        this._deviceContext = xrmDevice;
    };
    XrmProxy.prototype.setExternalContext = function (xrmExternalContext) {
        this._externalContext = xrmExternalContext;
    };
    XrmProxy.prototype.setApplicationUI = function (applicationUI) {
        this._applicationUI = applicationUI;
    };
    XrmProxy.prototype.setWebApi = function (webApi) {
        this._webApiContext = webApi;
    };
    XrmProxy.prototype.openForm = function (options, parameters) {
        return this._navigationContext.openForm(options, parameters);
    };
    XrmProxy.prototype.openUrl = function (url, options) {
        return this._navigationContext.openUrl(url, options);
    };
    XrmProxy.prototype.openFile = function (file, options) {
        return this._navigationContext.openFile(file, options);
    };
    XrmProxy.prototype.openAlertDialog = function (alertStrings, options) {
        return this._navigationContext.openAlertDialog(alertStrings, options);
    };
    XrmProxy.prototype.openConfirmDialog = function (confirmStrings, options) {
        return this._navigationContext.openConfirmDialog(confirmStrings, options);
    };
    XrmProxy.prototype.openDialog = function (name, options, parameters) {
        return this._navigationContext.openDialog(name, options, parameters);
    };
    XrmProxy.prototype.openErrorDialog = function (options) {
        return this._navigationContext.openErrorDialog(options);
    };
    XrmProxy.prototype.openTaskFlow = function (name, options, parameters) {
        return this._navigationContext.openTaskFlow(name, options, parameters);
    };
    XrmProxy.prototype.openWebResource = function (name, options, data) {
        return this._navigationContext.openWebResource(name, options, data);
    };
    XrmProxy.prototype.captureImage = function (options) {
        return this._deviceContext.captureImage(options);
    };
    XrmProxy.prototype.captureAudio = function () {
        return this._deviceContext.captureAudio();
    };
    XrmProxy.prototype.captureVideo = function () {
        return this._deviceContext.captureVideo();
    };
    XrmProxy.prototype.pickFile = function (options) {
        return this._deviceContext.pickFile(options);
    };
    XrmProxy.prototype.getBarcodeValue = function () {
        return this._deviceContext.getBarcodeValue();
    };
    XrmProxy.prototype.getCurrentPosition = function () {
        return this._deviceContext.getCurrentPosition();
    };
    XrmProxy.prototype.getAvailableExternalContexts = function () {
        return this._externalContext.getAvailableExternalContexts();
    };
    XrmProxy.prototype.getExternalContextProperty = function (externalContextId, externalContextPropertyId, options) {
        return this._externalContext.getExternalContextProperty(externalContextId, externalContextPropertyId, options);
    };
    XrmProxy.prototype.invokeExternalContextAction = function (externalContextId, externalContextActionId, options) {
        return this._externalContext.invokeExternalContextAction(externalContextId, externalContextActionId, options);
    };
    XrmProxy.prototype.removeExternalContextPropertyListener = function (externalContextId, externalContextPropertyId, listener) {
        return this._externalContext.removeExternalContextPropertyListener(externalContextId, externalContextPropertyId, listener);
    };
    XrmProxy.prototype.addGlobalNotification = function (type, level, message, title, action, onCloseHandler) {
        return this._applicationUI.addGlobalNotification(type, level, message, title, action, onCloseHandler);
    };
    XrmProxy.prototype.clearGlobalNotification = function (id) {
        return this._applicationUI.clearGlobalNotification(id);
    };
    XrmProxy.prototype.clearGlobalNotifications = function () {
        return this._applicationUI.clearGlobalNotifications();
    };
    XrmProxy.prototype._getWebApiContext = function () {
        return this._client.getClientState() === "Offline" ? this._webApiContext.offline : this._webApiContext.online;
    };
    XrmProxy.prototype.retrieveRecord = function (entityType, id, options) {
        return this._getWebApiContext().retrieveRecord(entityType, id, options);
    };
    XrmProxy.prototype.createRecord = function (entityType, data) {
        return this._getWebApiContext().createRecord(entityType, data);
    };
    XrmProxy.prototype.updateRecord = function (entityType, id, data) {
        return this._getWebApiContext().updateRecord(entityType, id, data);
    };
    XrmProxy.prototype.deleteRecord = function (entityType, id) {
        return this._getWebApiContext().deleteRecord(entityType, id);
    };
    XrmProxy.prototype.retrieveMultipleRecords = function (entityType, options, maxPageSize) {
        return this._getWebApiContext().retrieveMultipleRecords(entityType, options, maxPageSize);
    };
    XrmProxy.prototype.execute = function (request) {
        return this._getWebApiContext().execute(request);
    };
    XrmProxy.prototype.executeMultiple = function (requests) {
        var context = this._getWebApiContext();
        return context.executeMultiple ? context.executeMultiple(requests) : Promise.resolve(null);
    };
    return XrmProxy;
}());
var instance = new XrmProxy();
export { XrmProxy, instance as default };
