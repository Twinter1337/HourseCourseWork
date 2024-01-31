declare module ControlAndClientApiInterfaces {
	/**
	 * Interface for user settings
	 */
	interface OrgSettings {
		/**
		 *language code for the organization
		 */
		languageId: number;

		/**
		 *Unique name of the organization
		 */
		uniqueName: string;

		/**
		 *Indicates if auto-save is enabled for the organization
		 */
		isAutoSaveEnabled: boolean;

		/**
		 *All attributes of the org entity that are available.
		 */
		attributes: { [key: string]: any };
	}

	/**
	 * Interface for user settings
	 */
	interface UserSettings {
		/**
		 * Gets the offset in minutes from UTC for the given date
		 * @param date date to get the offset from utc for
		 * @return The number of minutes a datetime is offset from utc by
		 */
		getTimeZoneOffsetMinutes(date?: Date): number;

		/**
		 * The id of the current user
		 */
		userId: string;

		/**
		 * The name of the current user
		 */
		userName: string;

		/**
		 * Current user's language id
		 */
		languageId: number;

		/**
		 * Current user roles
		 */
		securityRoles: string[];

		/**
		 * Returns true if High Contrast is enabled
		 */
		isHighContrastEnabled: boolean;

		/**
		 * Returns true if the language is right to left
		 */
		isRTL: boolean;

		/**
		 * Returns the paging limit of the user
		 */
		pagingLimit: number;
	}

	/**
	 * Interface for utils
	 */
	interface Utils {
		/**
		 * Begins a secure session for a 1st party resource.
		 * @param resource The resource for which the session is being started.
		 * @param cookieName The name of the cookie which will contain the token.
		 * @param cookieDomain The domain on which the cookie will be set.
		 * @param allowPrompt If UI experience is involved.
		 * @returns A deferred object which will provide the expiry time of the token if the request succeeded or the error code if it failed.
		 */
		beginSecureSessionForResource(
			resource: string,
			cookieName: string,
			cookieDomain: string,
			allowPrompt?: boolean
		): Promise<Date>;

		/**
		 * Gets the entity metadata for the specified entity.
		 * @param entityType The logical name of the entity.
		 * @param attributes The attributes to get metadata for.
		 */
		getEntityMetadata(entityType: string, attributes?: string[]): Promise<EntityMetadata>;

		/**
		 * Gets the entity metadatas for multiple entities.
		 * @param entityToAttributes A mapping from logical name to attributes.
		 */
		getEntitiesMetadata(entityToAttributes: {
			[entityType: string]: string[];
		}): Promise<ControlAndClientApiInterfaces.EntityMetadata[]>;

		/**
		 * Gets the localized string from the web resource for the given key
		 * @param webResourceName name of the webresource
		 * @param key key for the localized string
		 * @returns localized string
		 */
		getResourceString(webResourceName: string, key: string): string;

		/**
		 * gets the status of FCB
		 * @param feature name user wants to check the FCB status for
		 * @return true if FCB is enabled for the feature
		 */
		isFeatureEnabled(featureName: string): boolean;

		/**
		 * Opens a lookup dialog allowing the user to select one or more entities.
		 * @param   {LookupOptions} lookupOptions  Options for opening the lookup dialog.
		 */
		lookupObjects(
			lookupOptions: ControlAndClientApiInterfaces.LookupOptions
		): Promise<ControlAndClientApiInterfaces.LookupValue[]>;

		/**
		 * Gets the EntityName for the EntityTypeCode
		 * @param   {any} entityTypeCode type code of the entity
		 */
		getEntityName(entityTypeCode: number): string;

		/**
		 * Gets the form id of the default form associated with the given entityType and for the specified formType
		 * @param entityType The logical name of the entity.
		 * @param formType Type of form
		 */
		getFormId(entityType: string, formType: string): Promise<string>;

		/**
		 * @deprecated API has been deprecated.
		 * Verify that app is installed to open url.
		 * @param url url to be verified.
		 */
		canOpenUrl(url: string): Promise<boolean>;
	}

	/**
	 * Interface for the page
	 */
	interface Page {
		/**
		 * The base URL that was used to access the application.
		 * @returns Returns the base URL that was used to access the application.
		 */
		getClientUrl(): string;
	}

	/**
	 * Interface for client
	 */
	interface Client {
		getFormFactor(): number;
		getClient(): string;
		getClientState(): string;
	}

	/**
	 * Interface for the online and offline webApi reference container
	 */
	interface WebApiSwitch {
		/** The online webAPI sdk **/
		offline: WebApi;

		/** The offline webAPI sdk **/
		online: WebApi;
	}

	/**
	 * CrudSdk Interface to be extended by OfflineSdk and Online Sdk
	 */
	interface WebApi {
		/**
		 * To retrieve a record from offline db
		 * @param id guid to retrieve the record
		 * @param entityType schema name of the entity type record to create
		 * @param options Options having select and expand conditions
		 * @returns The deferred object for the result of the operation
		 */
		retrieveRecord(entityType: string, id: string, options?: string): Promise<WebApi.Entity>;

		/**
		 * To create a new record in mobile offline db
		 * @param data dictionary with attribute schema name and value
		 * @param entityType logical name of the entity type record to create
		 * @returns The deferred object for the result of the operation.
		 */
		createRecord(entityType: string, data: WebApi.Entity): Promise<LookupValue>;

		/**
		 * To update a record in mobile offline db
		 * @param id guid to update the record
		 * @param data dictionary containing changed attributes with schema name and value
		 * @param entityType logical name of the entity type record to update
		 * @returns The deferred object for the result of the operation.
		 */
		updateRecord(entityType: string, id: string, data: WebApi.Entity): Promise<LookupValue>;

		/**
		 * To delete the record mobile offline db
		 * @param id guid to delete the record
		 * @param entityType logical name of the entity type record to delete
		 * @returns The deferred object for the result of the operation.
		 */
		deleteRecord(entityType: string, id: string): Promise<LookupValue>;

		/**
		 * To retrieve the records from mobile offline db
		 * @param entityType Schema name of the entity type record to retrieve
		 * @param options Record retrieval options
		 * @param maxPageSize Records to be retrieved per page
		 * @returns The deferred object for the result of the operation.
		 */
		retrieveMultipleRecords(
			entityType: string,
			options?: string,
			maxPageSize?: number
		): Promise<WebApi.RetrieveMultipleResponse>;

		/**
		 * Execute a single request.
		 * @param request to be executed
		 */
		execute(request: WebApi.ODataContract): Promise<WebApi.Response>;

		/**
		 * Execute multiple request.
		 * @param requests array containing request to be executed
		 */
		executeMultiple?(requests: WebApi.ODataContract[]): Promise<WebApi.Response[]>;
	}

	interface Navigation {
		/**
		 * Opens Alert Dialog
		 * @param alertStrings Strings to be used in alert dialog
		 * @param options Dialog options
		 * @returns promise defining success or failure of operation
		 */
		openAlertDialog(alertStrings: AlertDialogStrings, options?: AlertDialogOptions): Promise<AlertDialogResponse>;

		/**
		 * Opens Confirm Dialog
		 * @param confirmStrings String which will be used in the dialog
		 * @param options Options for the dialog
		 * @returns promise defining success or failure of operation. the success case returns a boolean specifying if yes or no button where pressed
		 */
		openConfirmDialog(
			confirmStrings: ConfirmDialogStrings,
			options?: ConfirmDialogOptions
		): Promise<ConfirmDialogResponse>;

		/**
		 * Opens a Dialog
		 * @param name Unique name of the dialog
		 * @param options Dialog options
		 * @param parameters Input arguments which needs to be passed
		 * @returns promise defining success or failure of operation
		 */
		openDialog(name: string, options?: DialogOptions, parameters?: Parameters): Promise<DialogResponse>;

		/**
		 * Opens an Error Dialog.
		 * @param options Error Dialog options.
		 * @returns promise defining success or failure of operation.
		 */
		openErrorDialog(options: ErrorDialogOptions): Promise<ErrorDialogResponse>;

		/**
		 * Open a file.
		 * @param file file to be opened description.
		 * @param options Options for openFile. OpenMode field in the options allows to save file instead opening.
		 *
		 * @remarks	 Values of openMode in OpenFileOptions:
		 *	   1  open
		 *	   2  save
		 *
		 * by default it will be "open" value, if options isn't passed.
		 */
		openFile(file: File, options?: OpenFileOptions): Promise<void>;

		/**
		 * Opens an entity form or quick create form.
		 * Please update IOverridablePropertyBagMethods in CustomControlInterfaces.d.ts if there is any change here.
		 * @param options entity form options.
		 * @param parameters entity form parameters.
		 * @returns promise defining success or failure of operation
		 */
		openForm(options: EntityFormOptions, parameters?: Parameters): Promise<OpenFormSuccessResponse>;

		/**
		 * Opens a task flow.
		 * @param name name of the task flow.
		 * @param options task flow options.
		 * @param parameters task flow parameters.
		 * @returns promise defining success or failure of operation
		 */
		openTaskFlow(name: string, options?: TaskFlowOptions, parameters?: Parameters): Promise<TaskFlowResponse>;

		/**
		 * Open url, including file urls.
		 * @param url url to be opened.
		 * @param options window options for the url.
		 */
		openUrl(url: string, options?: WindowOptions): void;

		/**
		 * Opens an HTML web resource.
		 * @param name The name of the HTML web resource to open.
		 * @param options Window options for the web resource.
		 * @param data Data to be passed into the data parameter.
		 */
		openWebResource(name: string, options?: WindowOptions, data?: string): void;
	}

	interface Reporting {
		/**
		 * Reports a success for the component - the activityid, orgid and userid are automatically appended dimensions
		 *
		 * @param componentName Component that we are currently monitoring
		 * @param params optional parameters
		 */
		reportSuccess(componentName: string, params?: EventParameter[]): void;

		/**
		 * Reports a failure for the component - the activityid, orgid and userid are automatically appended dimensions
		 *
		 * @param componentName       - Component that we are currently monitoring
		 * @param failureError        - The error that was generated
		 * @param suggestedMitigation - Suggested next steps for how to handle this error
		 * @param params              - optional parameters
		 */
		reportFailure(componentName: string, error: Error, suggestedMitigation?: string, params?: EventParameter[]): void;

		/**
		 * Send the data to telemetry endpoint by enqueueing it
		 *
		 * @param event - The event to be reported
		 */
		reportEvent(event: ApplicationEvent): void;
	}

	/**
	 * Interface for Diagnostics
	 */
	interface Diagnostics {
		/**
		 * trace error.
		 *
		 * @param componentName - Component that we are currently tracing
		 * @param message - trace message
		 */
		traceError(componentName: string, message: string): void;

		/**
		 * trace warning.
		 *
		 * @param componentName - Component that we are currently tracing
		 * @param message - trace message
		 */
		traceWarning(componentName: string, message: string): void;

		/**
		 * trace info.
		 *
		 * @param componentName - Component that we are currently tracing
		 * @param message - trace message
		 */
		traceInfo(componentName: string, message: string): void;

		/**
		 * trace debug.
		 *
		 * @param componentName - Component that we are currently tracing
		 * @param message - trace message
		 */
		traceDebug(componentName: string, message: string): void;
	}

	/**
	 * Interface for Device
	 */
	interface Device {
		/**
		 * Capture image.
		 * @param options capture picture options.
		 */
		captureImage(options?: CaptureImageOptions): Promise<File>;

		/**
		 * Capture audio.
		 */
		captureAudio(): Promise<File>;

		/**
		 * Capture video.
		 */
		captureVideo(): Promise<File>;

		/**
		 * Pick one or more files from device
		 * @param options file pick options
		 */
		pickFile(options?: PickFileOptions): Promise<File[]>;

		/**
		 * Invoke camera to scan Barcode and returns the Scanned Barcode value as string
		 * In case of error, returns the ErrorResponse.
		 * @returns A deferred containing the Scanned Barcode value. Or, error response object.
		 */
		getBarcodeValue(): Promise<string>;

		/**
		 * Determine whether getBarcodeValue operation available.
		 */
		isGetBarcodeValueAvailable(): boolean;

		/**
		 * Returns the current geolocation object.
		 * In case of error, returns the error object.
		 * @returns A deferred containing cordova geolocation object. Or, the error object.
		 */
		getCurrentPosition(): Promise<Position>;
	}

	/**
	 * Interface for Xrm.ExternalContext.
	 */
	export interface ExternalContext {
		/**
		 * Retrieves a property from an external context.
		 * @param {string} externalContextId - The context from which to retrieve the property
		 * @param {string} string - The property to retrieve
		 * @param {ExternalContextPropertyOptions} [options] - Optional. Any additional options for retrieving the property.
		 * @return {Promise<ExternalContextResult>} A promise for the external context property
		 */
		getExternalContextProperty(
			externalContextId: string,
			externalContextPropertyId: string,
			options?: ExternalContextPropertyOptions
		): Promise<ExternalContextSuccessResponse>;

		/**
		 * Invokes an action on an external context.
		 * @param {string} externalContextId - The context upon which to invoke the action
		 * @param {string} externalContextActionId - The action to invoke
		 * @param {ExternalContextActionOptions} [options] - Optional. Any additional options for invoking the action
		 * @return {Promise<ExternalContextResult>} A promise for the invocation result
		 */
		invokeExternalContextAction(
			externalContextId: string,
			externalContextActionId: string,
			options?: ExternalContextActionOptions
		): Promise<ExternalContextSuccessResponse>;

		/**
		 * Retrieves descriptors for all available external contexts.
		 * @return {Collection.ItemCollection<ExternalContextDescriptor>} A collection of the available external contexts.
		 */
		getAvailableExternalContexts(): Collection.ItemCollection<ExternalContextDescriptor>;

		/**
		 * Remove an external context property listener.
		 * @param {string} externalContextId - The context from which to retrieve the property
		 * @param {string} externalContextPropertyId - The property to retrieve
		 * @param {string} externalContextPropertyListenerKey - The update listener key
		 */
		removeExternalContextPropertyListener(
			externalContextId: string,
			externalContextPropertyId: string,
			listener: ControlAndClientApiInterfaces.ExternalContextPropertyListener
		): void;
	}
	/**
	 * The ApplicationUI interfaces from XrmClientApi
	 */
	interface ApplicationUI {
		/**
		 * Adds the global notification.
		 * From ApplicationUI.addGlobalNotification in Client API
		 * @param type The type of the notification. GlobalNotificationType in ClientApi.
		 * @param level The level of the notification. GlobalNotificationLevel in ClientApi.
		 * @param message The message of the notification.
		 * @param title The message of the notification.
		 * @param action The action of the notification.
		 * @param onCloseHandler The onCloseHandler for the notification.
		 * @returns promise defining success or failure of operation. the success case returns an Id of opened toast
		 */
		addGlobalNotification(
			type: number,
			level: number,
			message: string,
			title: string,
			action: ActionDescriptor,
			onCloseHandler: EventHandler
		): Promise<string>;

		/**
		 * Clears the global Notification.
		 * From ApplicationUI.clearGlobalNotification in Client API
		 * @param id The id of a GlobalNotification.
		 * @returns promise defining success or failure of operation
		 */
		clearGlobalNotification(id: string): Promise<void>;

		/**
		 * Clears the global Notification.
		 * From ApplicationUI.clearGlobalNotification in Client API
		 * @param id The id of a GlobalNotification.
		 * @returns promise defining success or failure of operation
		 */
		clearGlobalNotifications(): Promise<void>;
	}

	/**
	 * ---- The below are interfaces needed by the main interfaces.
	 * //TODO: As part of refactoring later, also remove these from CustomControlsBase.d.ts
	 *         Note: it looks like some may also be duplicated in CrmDescriptors.d.ts
	 */

	/**
	 * The success response from interacting with an external context.
	 */
	export type ExternalContextSuccessResponse = any;

	/**
	 * The error response from interacting with an external context.
	 */
	export interface ExternalContextErrorResponse extends ErrorResponse {
		/**
		 * The raw error from the external context.
		 */
		raw?: any;
	}

	/**
	 * The result from interacting with an external context.
	 */
	export interface ExternalContextResult {
		/**
		 * Whether or not the result was a success.
		 */
		status: "success" | "failure";

		/**
		 * On success, the value of the result.
		 */
		value?: ExternalContextSuccessResponse;

		/**
		 * On error, the resulting error response.
		 */
		error?: ExternalContextErrorResponse;
	}

	/**
	 * Options for retrieving an external context property.
	 */
	export interface ExternalContextPropertyOptions {
		/**
		 * Any arguments that should be used when retrieving the property.
		 */
		args?: { [name: string]: any };

		/**
		 * A listener for updates to the result.
		 * NOTE: This will not be called for the initial result. That will come through
		 * the returned promise. Only subsequent updates to the result will trigger the listener.
		 *
		 * @param {ExternalContextResult} updatedResult - The updated result object
		 */
		updateListener?: ExternalContextPropertyListener;
	}

	/**
	 * Options for retrieving an external context property.
	 */
	export type ExternalContextPropertyListener = (updatedResult: ExternalContextResult) => void;

	/**
	 * Options for invoking an external context action.
	 */
	export interface ExternalContextActionOptions {
		/**
		 * Any arguments that should be used when invoking the action.
		 */
		args?: { [name: string]: any };
	}

	/**
	 * A descriptor for an external context.
	 */
	export interface ExternalContextDescriptor {
		/**
		 * The id of the context.
		 */
		id: string;

		/**
		 * A collection of properties available on the context.
		 */
		properties: Collection.ItemCollection<string>;

		/**
		 * A collection of actions available on the context.
		 */
		actions: Collection.ItemCollection<string>;
	}

	/**
	 * Interface for open file options.
	 */
	export interface OpenFileOptions {
		/**
		 * The mode that points, file should be opened or saved.
		 * Values:
		 *	   1  open
		 *	   2  save
		 */
		openMode: Constants.OpenFileMode;
	}

	/**
	 * Interface for window options.
	 */
	interface WindowOptions {
		openInNewWindow: boolean;
		height?: number;
		width?: number;
	}

	/**
	 * Interface for task flow options.
	 */
	interface TaskFlowOptions {
		primaryEntityContext: LookupValue;
	}

	/**
	 * Interface for entity form options.
	 */
	interface EntityFormOptions {
		entityName: string;
		entityId?: string;
		useQuickCreateForm?: boolean; // Defaults to true.  Ignored when entityId is specified.
		createFromEntity?: LookupValue;
		formId?: string;
		openInNewWindow?: boolean; // Defaults to false.  Ignored when in an app shim.
		width?: number; // Ignored when openInNewWindow is false.
		height?: number; // Ignored when openInNewWindow is false.
		cmdbar?: boolean;
		navbar?: string; // “on”, “off”, “entity”
		processInstanceId?: string;
		selectedStageId?: string;
		isCrossEntityNavigate?: boolean;
		position?: number; // Window Position
		recordSetQueryKey?: string;
	}

	/**
	 * Class passed to an async callback on AlertDialog close.
	 */
	interface AlertDialogResponse {}

	/**
	 * Class passed to an async callback on ConfirmDialog close.
	 */
	interface ConfirmDialogResponse {
		confirmed: boolean;
	}

	/**
	 * Class passed to an async callback on OpenDialog close.
	 */
	interface DialogResponse {
		parameters: Parameters;
	}

	/**
	 * Class passed to an async callback on ErrorDialog close.
	 */
	interface ErrorDialogResponse {}

	/**
	 * Class passed to an async callback on close.
	 */
	interface TaskFlowResponse {
		parameters: Parameters;
	}

	/**
	 * Class passed to an async callback on success.
	 */
	interface SuccessResponse {}

	/**
	 * The class returned when a save is successful.
	 */
	interface SaveSuccessResponse extends SuccessResponse {
		savedEntityReference: LookupValue;
	}

	/**
	 * The class returned when a save is successful fro open form.
	 */
	interface OpenFormSuccessResponse extends SuccessResponse {
		savedEntityReference: LookupValue[];
	}

	/**
	 * Class representing an error.
	 */
	interface ErrorResponse {
		errorCode: number;
		message: string;
	}

	/**
	 * Class representing a close
	 */
	interface CloseResponse {
		outputArguments: {};
	}

	/**
	 * Class representing a cancel
	 */
	interface CancelResponse {}

	/**
	 * Interface for a Lookup value.
	 */
	interface LookupValue {
		/**
		 * The identifier.
		 */
		id: string;

		/**
		 * The name
		 */
		name?: string;

		/**
		 * Type of the entity.
		 */
		entityType: string;
	}

	/**
	 * Options used when opening a lookup dialog.
	 */
	interface LookupOptions {
		/**
		 *	Whether the lookup allows more than one item to be selected.
		 */
		allowMultiSelect: boolean;

		/**
		 *	The default entity type.
		 */
		defaultEntityType: string;

		/**
		 *	The default view to use.
		 */
		defaultViewId: string;

		/**
		 *	The entity types to display.
		 */
		entityTypes: string[];

		/**
		 *	The views to be available in the view picker.  Only System views are supported (not user views).
		 */
		viewIds: string[];
	}

	/**
	 * Interface for window options.
	 */
	interface DialogOptions {
		position: number;
		height: number;
		width: number;
	}

	/**
	 * The interface for capture image settings.
	 */
	interface CaptureImageOptions {
		height: number;
		width: number;
		allowEdit: boolean;
		quality: number;
		preferFrontCamera: boolean;
	}

	/**
	 * The interface for picking file options.
	 */
	interface PickFileOptions {
		allowMultipleFiles?: boolean;
		maximumAllowedFileSize: number;
		accept?: string | "audio/*" | "video/*" | "image/*";
	}

	/**
	 * Interface for alert dialog options.
	 */
	interface AlertDialogOptions {
		height: number;
		width: number;
	}

	/**
	 * Interface for confirm dialog options.
	 */
	interface ConfirmDialogOptions {
		height: number;
		width: number;
	}

	/**
	 * Interface for error dialog options.
	 */
	interface ErrorDialogOptions {
		message?: string;
		errorCode?: number;
		details?: string;
	}

	/**
	 * Enumeration of window position
	 */
	const enum WindowPosition {
		center = 1,
		side = 2,
	}

	/**
	 * Represents the String parameters for Confirm Dialog.
	 */
	interface ConfirmDialogStrings {
		/**
		 * Confirm Dialog Title.
		 */
		title?: string;

		/**
		 * Confirm Dialog Subtitle
		 */
		subtitle?: string;

		/**
		 * Confirm Dialog Text\Message.
		 */
		text: string;

		/**
		 * Confirm Button Label
		 */
		confirmButtonLabel?: string;

		/**
		 * Cancel Button label.
		 */
		cancelButtonLabel?: string;
	}

	/**
	 * Represents the String parameters for Alert Dialog.
	 */
	interface AlertDialogStrings {
		/**
		 * Alert Dialog Text
		 */
		text: string;

		/**
		 * Confirm button label.
		 */
		confirmButtonLabel?: string;
	}

	/**
	 * Generic parameters class that's a dictionary of strings.
	 */
	interface Parameters {
		[key: string]: string;
	}

	/**
	 * Application event for reporting about something that happened to telemetry
	 */
	interface ApplicationEvent {
		eventName: string;
		eventParameters: EventParameter[];
	}

	/**
	 * Event parameter for reporting additional information to telemetry
	 */
	interface EventParameter {
		name: string;
		value: string | number | boolean | Date | CrmFramework.Guid;
	}

	/**
	 * Entity metadata
	 */
	interface EntityMetadata {
		ActivityTypeMask?: number;
		AutoRouteToOwnerQueue?: boolean;
		CanEnableSyncToExternalSearchIndex?: boolean;
		CanTriggerWorkflow?: boolean;
		Description?: string;
		DisplayCollectionName?: string;
		DisplayName?: string;
		EnforceStateTransitions?: boolean;
		EntityColor?: string;
		EntitySetName?: string;
		IsActivity?: boolean;
		IsActivityParty?: boolean;
		IsBusinessProcessEnabled?: boolean;
		IsChildEntity?: boolean;
		IsConnectionsEnabled?: boolean;
		IsCustomEntity?: boolean;
		IsCustomizable?: boolean;
		IsDocumentManagementEnabled?: boolean;
		IsDocumentRecommendationsEnabled?: boolean;
		IsDuplicateDetectionEnabled?: boolean;
		IsEnabledForCharts?: boolean;
		IsImportable?: boolean;
		IsInteractionCentricEnabled?: boolean;
		IsKnowledgeManagementEnabled?: boolean;
		IsMailMergeEnabled?: boolean;
		IsManaged?: boolean;
		IsOneNoteIntegrationEnabled?: boolean;
		IsOptimisticConcurrencyEnabled?: boolean;
		IsQuickCreateEnabled?: boolean;
		IsReadOnlyInMobileClient?: boolean;
		IsStateModelAware?: boolean;
		IsValidForAdvancedFind?: boolean;
		IsVisibleInMobileClient?: boolean;
		IsEnabledInUnifiedInterface?: boolean;
		LogicalCollectionName?: string;
		LogicalName: string;
		ObjectTypeCode: number;
		OwnershipType?: number; // Is actually EntityOwnershipType
		PrimaryIdAttribute?: string;
		PrimaryImageAttribute?: string;
		PrimaryNameAttribute?: string;
		Privileges?: SecurityPrivilegeMetadata[];
		Attributes: Collection.ItemCollection<AttributeMetadata>;
	}

	/**
	 * Entity metadata security privileges.
	 */
	interface SecurityPrivilegeMetadata {
		CanBeBasic: boolean;
		CanBeDeep: boolean;
		CanBeGlobal: boolean;
		CanBeLocal: boolean;
		CanBeEntityReference: boolean;
		CanBeParentEntityReference: boolean;
		Name: string;
		PrivilegeId: string;
		PrivilegeType: Constants.PrivilegeType;
	}

	interface AttributeMetadata {
		// TODO: Define the interface for attribute metadata
	}

	/**
	 * Offline
	 */
	interface Offline {
		isOfflineEnabled(entityLogicalName: string): boolean;
	}

	/**
	 * Interface for a context-sensitive handler.
	 */
	interface EventHandler {
		/**
		 * @param context The event context. This needs to be EventContext from ClientApi.
		 */
		(context?: any): void;
	}

	/**
	 * The User's action.
	 */
	interface ActionDescriptor {
		eventHandler: EventHandler;
		actionLabel: string;
	}
}

/**
 * Collection module from Xrm describing its collection interfaces
 */
declare module Collection {
	/**
	 * Interface for a matching delegate.
	 *
	 * @tparam	T	Generic type parameter.
	 */
	export interface MatchingDelegate<T> {
		/**
		 * Called for each item in an array
		 *
		 * @param	{T} item   The item.
		 * @param	{number} index	 Zero-based index of the item array.
		 *
		 * @return	true if the item matches, false if it does not.
		 */
		(item: T, index: number): boolean;
	}

	/**
	 * Interface for iterative delegate.
	 *
	 * @tparam	T	Generic type parameter.
	 */
	export interface IterativeDelegate<T> {
		/**
		 * Called for each item in an array
		 *
		 * @param	{T} item   The item.
		 * @param	{number} index	 Zero-based index of the item array.
		 */
		(item: T, index: number): void;
	}

	/**
	 * Interface for an item collection.
	 *
	 * @tparam	T	Generic type parameter.
	 */
	export interface ItemCollection<T> {
		/**
		 * Applies an operation to all items in this collection.
		 *
		 * @param	{IterativeDelegate{T}}	delegate An iterative delegate function
		 */
		forEach(delegate: IterativeDelegate<T>): void;

		/**
		 * Gets.
		 *
		 * @param	{MatchingDelegate{T}}	delegate A matching delegate function
		 *
		 * @return	A T[] whose members have been validated by delegate.
		 */
		get(delegate: MatchingDelegate<T>): T[];

		/**
		 * Gets the item given by the index.
		 *
		 * @param	{number} itemNumber	 The item number to get.
		 *
		 * @return	The T in the itemNumber-th place.
		 */
		get(itemNumber: number): T;

		/**
		 * Gets the item given by the key.
		 *
		 * @param	{string} itemName The item name to get.
		 *
		 * @return	The T matching the key itemName.
		 *
		 * @see {@link Xrm.Page.Control.getName()} for Control-naming schemes.
		 */
		get(itemName: string): T;

		/**
		 * Gets the entire array of T.
		 *
		 * @return	A T[].
		 */
		get(): T[];

		/**
		 * Gets the length of the collection.
		 *
		 * @return	The length.
		 */
		getLength(): number;
	}
}

/**
 * Objects related to interacting with the Web API.
 */
declare module WebApi {
	/**
	 * Interface that describes the OData response for retrieve multiple.
	 */
	export interface RetrieveMultipleResponse {
		entities: Entity[];
		nextLink: string;
	}

	interface EntityReference {
		/**
		 * The id of the referenced entity record
		 */
		id: string;

		/**
		 * The logical name of the referenced entity record
		 */
		logicalName: string;
	}

	/**
	 * Interface that describes an entity sent to or received from the SDK through the Web API.
	 */
	interface Entity {
		[key: string]: any;
	}

	const enum ODataStructuralProperty {
		Unknown = 0,
		PrimitiveType = 1,
		ComplexType = 2,
		EnumerationType = 3,
		Collection = 4,
		EntityType = 5,
	}

	/**
	 * OData enum parameter metadata
	 */
	interface ODataEnumValue {
		/**
		 * The string key for the enum value
		 */
		name: string;

		/**
		 * The enum value
		 */
		value: number;
	}

	/**
	 * The interface that describes metadata for the OData request parameter type.
	 */
	interface ODataParameterType {
		/**
		 * The category of the type (primitive/comples/enum/collection/entity)
		 * valid values are 0,1,2,3,4,5 and are from ODataStructuralProperty
		 *       enum in XrmClientApi prevents casting
		 */
		structuralProperty: number;

		/**
		 * The fully qualified name of the parameter type.
		 */
		typeName: string;

		/**
		 * The metadata for enum types
		 */
		enumProperties?: ODataEnumValue[];
	}

	/**
	 * The interface that describes the metadata for the OData request.
	 */
	interface ODataContractMetadata {
		/**
		 * The name of the bound parameter. This should have a value of "undefined" if the OData function/action is undefined.
		 */
		boundParameter: string;

		/**
		 * The metadata for parameter types.
		 */
		parameterTypes: { [parameterName: string]: ODataParameterType };

		/**
		 *Name of the operation
		 */
		operationName: string;

		/**
		 * The type of the operation.
		 * valid values are 0,1,2 from ODataOperationType
		 *       on XrmClientApi, it does not cast correctly
		 */
		operationType?: number;
	}

	/**
	 * The interface that describes the OData contract (request and response).
	 */
	interface ODataContract {
		/**
		 * ODataContract is a dictionary of parameters that will be passed to an OData endpoint.
		 */
		[parameter: string]: any;

		/**
		 * Each OData contract must have a way to get information about its attributes.
		 */
		getMetadata(): ODataContractMetadata;
	}

	/**
	 * The interface that describes the Response.
	 * This is a subset of the browser Response.
	 */
	interface Response {
		status: number;
		ok: boolean;
		statusText: string;
		url: string;
		json(): Promise<any>;
		text(): Promise<string>;
	}
}

/**
 * Constants used by Client API
 */
declare module Constants {
	/**
	 * Entity privilege types.
	 */
	const enum PrivilegeType {
		None = 0,
		Create = 1,
		Read = 2,
		Write = 3,
		Delete = 4,
		Assign = 5,
		Share = 6,
		Append = 7,
		AppendTo = 8,
	}

	/**
	 * Different privilege Depth.
	 */
	const enum PrivilegeDepth {
		None = -1,
		Basic = 0,
		Local = 1,
		Deep = 2,
		Global = 3,
	}

	const enum ODataOperationType {
		Action = 0,
		Function = 1,
		CRUD = 2,
	}

	const enum FormFactor {
		Unknown = 0,
		Desktop = 1,
		Tablet = 2,
		Phone = 3,
	}

	/**
	 * Entity ownership types.
	 */
	const enum EntityOwnershipType {
		/**
		 * The entity does not have an owner. For internal use only.
		 */
		None = 0,

		/**
		 * The entity is owned by a system user.
		 */
		UserOwned = 1,

		/**
		 * The entity is owned by a team. For internal use only.
		 */
		TeamOwned = 2,

		/**
		 * The entity is owned by a business unit. For internal use only.
		 */
		BusinessOwned = 4,

		/**
		 * The entity is owned by an organization.
		 */
		OrganizationOwned = 8,

		/**
		 * The entity is parented by a business unit. For internal use only.
		 */
		BusinessParented = 16,
	}

	/**
	 * The options for openFile mode.
	 */
	const enum OpenFileMode {
		open = 1,
		save = 2,
	}

	/**
	 * The options for global notification types.
	 */
	const enum GlobalNotificationType {
		/**
		 * Toast notification type.
		 */
		toast = 1,
	}

	/**
	 * The options for global notification levels.
	 */
	const enum GlobalNotificationLevel {
		/**
		 * Success notification level.
		 */
		success = 1,

		/**
		 * Error notification level.
		 */
		error = 2,

		/**
		 * Warning notification level.
		 */
		warning = 3,

		/**
		 * Information notification level.
		 */
		information = 4,
	}
}

/**
 * A definition module for collection interface declarations.
 */
declare module Collection {
	/**
	 * Interface for a matching delegate.
	 *
	 * @tparam	T	Generic type parameter.
	 */
	interface MatchingDelegate<T> {
		/**
		 * Called for each item in an array
		 *
		 * @param	{T} item   The item.
		 * @param	{number} index	 Zero-based index of the item array.
		 *
		 * @return	true if the item matches, false if it does not.
		 */
		(item: T, index: number): boolean;
	}

	/**
	 * Interface for iterative delegate.
	 *
	 * @tparam	T	Generic type parameter.
	 */
	interface IterativeDelegate<T> {
		/**
		 * Called for each item in an array
		 *
		 * @param	{T} item   The item.
		 * @param	{number} index	 Zero-based index of the item array.
		 */
		(item: T, index: number): void;
	}

	/**
	 * Interface for an item collection.
	 *
	 * @tparam	T	Generic type parameter.
	 */
	interface ItemCollection<T> {
		/**
		 * Applies an operation to all items in this collection.
		 *
		 * @param	{IterativeDelegate{T}}	delegate An iterative delegate function
		 */
		forEach(delegate: IterativeDelegate<T>): void;

		/**
		 * Gets.
		 *
		 * @param	{MatchingDelegate{T}}	delegate A matching delegate function
		 *
		 * @return	A T[] whose members have been validated by delegate.
		 */
		get(delegate: MatchingDelegate<T>): T[];

		/**
		 * Gets the item given by the index.
		 *
		 * @param	{number} itemNumber	 The item number to get.
		 *
		 * @return	The T in the itemNumber-th place.
		 */
		get(itemNumber: number): T;

		/**
		 * Gets the item given by the key.
		 *
		 * @param	{string} itemName The item name to get.
		 *
		 * @return	The T matching the key itemName.
		 *
		 * @see {@link Xrm.Page.Control.getName()} for Control-naming schemes.
		 */
		get(itemName: string): T;

		/**
		 * Gets the entire array of T.
		 *
		 * @return	A T[].
		 */
		get(): T[];

		/**
		 * Gets the length of the collection.
		 *
		 * @return	The length.
		 */
		getLength(): number;
	}
}
