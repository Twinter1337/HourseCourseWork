declare module CustomControlInterfaces {
	/**
	 * Type alias refers to the possible type of a Virtual Component child.
	 */
	type VirtualComponentChild = string | number | IVirtualComponent;

	/**
	 * Deprecated interface for virtual controls
	 */
	interface DeprecatedVirtualControl {
		getOutputs(): System.Dictionary;
		onPreNavigation(): void;
		destroy(): void;
		init(state?: System.Dictionary): void;
		notifyOutputChanged: () => void;
		context: System.Dictionary;
		render(): IVirtualComponent;
	}

	/**
	 * Placeholder interface for custom control's input bag
	 */
	interface IInputBag {}

	/**
	 * Placeholder interface for custom control's output bag
	 */
	interface IOutputBag {}

	interface ICustomControlDescriptorParameterTargetEntity {
		DefaultViewId: string;
		EntityLogicalName: string;
	}

	interface ICustomControlDescriptorParameter {
		Name: string;
		Value: string;
		TargetEntities?: ICustomControlDescriptorParameterTargetEntity[];
	}

	interface IViewParams {
		ViewId: string;
		TargetEntityType: string;
		ViewDisplayName: string;
		FetchXml: string;
		LayoutXml: string;
	}

	/**
	 * Grid Custom Control descriptor parameters
	 */
	interface IGridCustomControlDescriptorParameters {
		DefaultViewId: string;
		defaultviewid?: string;
		ViewId?: string;
		EnableViewPicker: string;
		RelationshipName: string;
		TargetEntityType: string;
	}

	/**
	 * Chart Custom Control form descriptor parameters
	 */
	interface IChartCustomControlDescriptorParameters extends IGridCustomControlDescriptorParameters {
		EnableChartPicker: string;
		IsUserView: string;
		ViewIds: string;
		ChartGridMode: string;
		VisualizationId: string;
		IsUserChart: string;
	}

	/**
	 * Lookup Custom Control descriptor parameters
	 */
	interface ILookupCustomControlDescriptorParameters extends IGridCustomControlDescriptorParameters {
		AllowFilterOff: string;
		AvailableViewIds: string;
		DependentAttributeName: string;
		DependentAttributeType: string;
		DisableQuickFind: string;
		DisableMru?: boolean;
		DisableViewPicker: string;
		ExtraCondition: string;
		FilterRelationshipName: string;
	}

	/**
	 * Timer custom control descriptor Parameters
	 */
	interface ITimerCustomControlDescriptorParameter extends ICustomControlDescriptorParameter {
		CancelConditionName: string;
		CancelConditionValue: string;
		FailureTimeField: string;
		FailureConditionName: string;
		FailureConditionValue: string;
		PauseConditionName: string;
		PauseConditionValue: string;
		SuccessConditionName: string;
		SuccessConditionValue: string;
		WarningConditionName: string;
		WarningConditionValue: string;
	}

	/**
	 * Descriptor of a custom control as defined via it's form XML definition
	 */
	interface ICustomControlDescriptor {
		Id: string;
		Label: string;
		Name: string;
		DomId?: string;
		ShowLabel: boolean;
		Visible: boolean;
		Disabled: boolean;
		HasContext?: boolean;
		DataFieldName?: string;
		UniqueId?: string;
		Parameters?: System.Dictionary;
		FullPageParamers?: string;
		ControlLayout?: number;
		ClassId?: { guid: string };
		Relationship?: string;

		/**
		 * The url of mashup controls
		 */
		Url?: string;

		/**
		 * The CustomControlId of the closest parent field section item for the control.
		 * This is the control's CustomControlId if it is a field section item.
		 */
		parentFieldSectionItem?: string;
	}

	/**
	 * Grid Custom Control descriptor
	 */
	interface IGridCustomControlDescriptor extends ICustomControlDescriptor {
		Parameters?: IGridCustomControlDescriptorParameters & ICustomControlDescriptorParameter[];
	}

	/**
	 * Lookup Custom Control descriptor
	 */
	interface ILookupCustomControlDescriptor extends IGridCustomControlDescriptor {
		Parameters?: ILookupCustomControlDescriptorParameters & ICustomControlDescriptorParameter[];
	}

	/**
	 * Timer custom control desscriptor
	 */
	interface ITimerCustomControlDescriptor extends ICustomControlDescriptor {
		Parameters?: ITimerCustomControlDescriptorParameter & ICustomControlDescriptorParameter[];
	}

	/**
	 * A virtual component created by custom control implementation
	 */
	interface IVirtualComponent {
		/**
		 * Used to update a VirtualComponent generated from a system-generated complex
		 */
		getVirtualRepresentation(additionalProps: System.Dictionary): IVirtualComponent;

		/**
		 * Returns the type of this component.
		 */
		getType(): string;

		/**
		 * Returns the component Id
		 */
		getComponentId(): string;

		/**
		 * Returns a dictionary of this component's properties.
		 */
		getProperties(): IVirtualComponentProps;

		/**
		 * Returns an array of child virtual components associated with this component.
		 */
		getChildren(): VirtualComponentChild | VirtualComponentChild[];
	}

	/**
	 * Expected interface of the props object passed into a nested child control via createComponent
	 */
	interface IVirtualComponentProps {
		id?: string;

		controlstates?: IVirtualComponentControlStates;

		childeventlisteners?: IVirtualComponentEventHandlerPair[];

		/**
		 * A collection of methods to override property bag methods in a child control
		 */
		contextOverrides?: IOverridablePropertyBagMethods;

		parameters?: IParameterDefinitionMap;

		configuration?: ICustomControlConfiguration;

		descriptor?: ICustomControlDescriptor;

		nestedFormProps?: IFormProps;

		themingData?: any;

		recordId?: string /** This is currently only used in a non-ship control, but adding it here for sanity sake. Our system currently ignores it. */;

		contextString?: string /** String value explaining what type is the current component, should be set by parent component. **/;

		decorators?: IDecorators /** The decorators where Parent Control passed to the child control. **/;
	}

	/**
	 * The decorators where Parent Control passed to the child control.
	 */
	interface IDecorators {
		//Multiple decorators where parent can pass to child control
		[key: string]: System.Dictionary;
	}

	/**
	 * Interface for nested form properties
	 */
	interface IFormProps {
		FormId?: string;
		EntityName?: string;
		RecordId?: string;
		RibbonId?: string;
	}

	/**
	 * Interface for property bag methods which the framework allows a parent control to override for its child control
	 */
	interface IOverridablePropertyBagMethods {
		/**
		 * Opens an entity form or quick create form.
		 * See the similarly named function in the Navigation interface in ControlAndClientApiInterfaces for the most up to date info.
		 * @param options entity form options.
		 * @param parameters entity form parameters.
		 * @returns promise defining success or failure of operation
		 */
		openForm(
			options: ControlAndClientApiInterfaces.EntityFormOptions,
			parameters?: ControlAndClientApiInterfaces.Parameters
		): Promise<ControlAndClientApiInterfaces.OpenFormSuccessResponse>;
	}

	/**
	 * properties passed by parent component.
	 * Used for properties which are not present in either config or descriptor
	 */
	interface IParentComponentProps {
		/**
		 * Custom control id of closest parent with save functionality
		 */
		closestParentWithContext?: string;
		eventListeners?: IEventHandlerPair[];
		hasFocus?: boolean;
		height?: number;
		width?: number;
		toggleDimensionListener?: (val: boolean) => void;
		onControlLoadedError?: (error: Error) => void;
		containerStyleOverrides?: IContainerStyleOverride;

		/**
		 * A collection of methods to override property bag methods in a child control
		 */
		propertyBagOverrides?: IOverridablePropertyBagMethods;

		/**
		 * The CustomControlId of the closest parent field section item for the control.
		 * This is the control's CustomControlId if it is a field section item.
		 */
		parentFieldSectionItem?: string;

		/**
		 * The parent flyout Id
		 */
		parentFlyoutId?: string;

		/**
		 * The flag for parent in SeeMore mode
		 */
		parentInSeeMoreMode?: boolean;

		/**
		 * Callback to alert parent that you're in see more
		 */
		alertParentInSeeMore?: (val: boolean) => void;

		/**
		 * The decorators where Parent Control passed to the child control.
		 */
		decorators?: IDecorators;
	}

	interface IContainerStyleOverride {
		allContainers?: ICCFStyle;
		rootContainer?: ICCFStyle;
		outerContainer?: ICCFStyle;
		primaryInnerContainer?: ICCFStyle;
	}

	/**
	 * Interface for style objects as understood by the CCF framework
	 */
	interface ICCFStyle {
		borderWidth?: number | string;
		borderBottomWidth?: number | string;
		borderLeftWidth?: number | string;
		borderRightWidth?: number | string;
		borderTopWidth?: number | string;
		height?: number | string;
		width?: number | string;
		minHeight?: number | string;
		minWidth?: number | string;
		margin?: number | string;
		marginBottom?: number | string;
		marginLeft?: number | string;
		marginRight?: number | string;
		marginTop?: number | string;
		padding?: number | string;
		paddingBottom?: number | string;
		paddingLeft?: number | string;
		paddingRight?: number | string;
		paddingTop?: number | string;
		position?:
			| "-moz-initial"
			| "inherit"
			| "initial"
			| "revert"
			| "unset"
			| "-webkit-sticky"
			| "absolute"
			| "fixed"
			| "relative"
			| "static"
			| "sticky";
		bottom?: number | string;
		left?: number | string;
		right?: number | string;
		top?: number | string;
		alignSelf?:
			| "-moz-initial"
			| "inherit"
			| "initial"
			| "revert"
			| "unset"
			| "center"
			| "end"
			| "flex-end"
			| "flex-start"
			| "self-end"
			| "self-start"
			| "start"
			| "auto"
			| "baseline"
			| "normal"
			| "stretch"
			| string;
		flex?: number | string;
		flexDirection?:
			| "-moz-initial"
			| "inherit"
			| "initial"
			| "revert"
			| "unset"
			| "column"
			| "column-reverse"
			| "row"
			| "row-reverse";
		color?: string;
		backgroundColor?: string;
		borderColor?: string;
		borderBottomColor?: string;
		borderLeftColor?: string;
		borderRightColor?: string;
		borderTopColor?: string;
		borderRadius?: number | string;
		borderBottomLeftRadius?: number | string;
		borderBottomRightRadius?: number | string;
		borderTopLeftRadius?: number | string;
		borderTopRightRadius?: number | string;
		borderStyle?: "solid" | "dotted" | "dashed";
		opacity?: number;
		overflow?: "visible" | "hidden";
	}

	/**
	 * EventPair consists of eventName and eventHandler
	 */
	interface IVirtualComponentEventHandlerPair {
		eventname: string;
		eventhandler: (data: any) => void;
	}

	/**
	 * EventPair consists of eventName and eventHandler
	 */
	interface IEventHandlerPair {
		eventname: string;
		eventhandler: { ({}): void }[];
	}

	/**
	 * States passed into a nested control (focus, things represented on a descriptor)
	 */
	interface IVirtualComponentControlStates {
		hasFocus: boolean;
		isControlDisabled: boolean;
		showLabel: boolean;
		label: string;
		height: number;
		width: number;
		containerStyleOverrides: IContainerStyleOverride;
	}

	/**
	 * The common definition of a custom control parameter
	 */
	interface ICustomControlParameterDefinition {
		Type: string;
	}

	/**
	 * The definition for a group definition
	 */
	interface ICustomControlGroupDefinition extends ICustomControlParameterDefinition {
		Value: string;
	}

	/**
	 * The definiton of a field control parameter as sent down via the form descriptor
	 */
	interface IPropertyCustomControlParameterDefinition extends ICustomControlParameterDefinition {
		Usage: number;
		Static: boolean;
		Value: any;
		Primary?: boolean;

		/**
		 * Whether this control is linked to another via input-output linking
		 */
		ControlLinked?: boolean;

		/**
		 * If ControlLinked is true, this flag says whether the link address given as the value is
		 * absolute (should be taken as is), or is a sibling relative (should be prepended with the parent's ID)
		 */
		AbsoluteLinkAddress?: boolean;
	}

	/**
	 * The definiton of a field control parameter as sent down via the form descriptor
	 */
	interface IFalseBoundCustomControlParameterDefinition extends IPropertyCustomControlParameterDefinition {
		Attributes: ICustomControlAttributes;
		Callback: (value: any) => void;
	}

	/**
	 * The definiton of a dataset control column parameter as sent down via the form descriptor
	 */
	interface IPropertySetCustomControlParameterDefinition extends ICustomControlParameterDefinition {
		Alias: string;
		DisplayName?: string;
		DataType: string;
		Name: string;
	}

	/**
	 * The definition of a Lookup View selector item
	 */
	interface ILookupViewSelector {
		/**
		 * The View name
		 */
		viewName: string;

		/**
		 * The View ID
		 */
		viewId: string;

		/**
		 * Whether View id a default view for an entity
		 */
		isDefault: boolean;

		/**
		 * Whether View is available in offline mode
		 */
		isAvailableInOffline: boolean;

		/**
		 * Whether View is a user view
		 */
		isUserView: boolean;

		/**
		 * Whether View is pinned
		 */
		isPinned: boolean;

		/**
		 * Related entity name for the View
		 */
		relatedEntityName: string;
	}

	/**
	 * The definiton of a dataset control parameter as sent down via the form descriptor
	 */
	interface IDataSetCustomControlParameterDefinition extends ICustomControlParameterDefinition {
		Name?: string /** Name for the control for display **/;
		Columns?: Array<IPropertySetCustomControlParameterDefinition>;
		ViewId: string;
		EntityName?: string;
		TargetEntityType?: string;
		IsHierarchyEnabled?: boolean;
		EnableViewPicker?: boolean;
		RelationshipName?: string;
		VisualizationId?: string;
		ChartGridMode?: string;
		DataSetUIOptions?: IDataSetUIOptions;
		FirstDataRequestType?: FirstDataRequestType;
		ExtraFilters?: string[];
		SortingInput?: {
			Static: boolean;
			ControlLinked?: boolean;
			Value: any;
		};
		FilteringInput?: {
			Static: boolean;
			ControlLinked?: boolean;
			Value: any;
		};
		PagingInput?: {
			Static: boolean;
			ControlLinked?: boolean;
			Value: any;
		};
		RefreshInput?: {
			Static: boolean;
			Value: any;
		};
		LinkingInput?: {
			Static: boolean;
			ControlLinked?: boolean;
			Value: any;
		};
	}

	/**
	 * The defintion of dataset custom control which includes lookup configurations for editable grid.
	 */
	interface ILegacyDataSetCustomControlParameterDefinition extends IDataSetCustomControlParameterDefinition {
		/**
		 * The definition for lookup configurations.
		 */
		Lookups?: ICustomControlLookupsDefinition;
	}

	/**
	 * The defintion of dataset custom control which includes lookup configurations and context filter for lookup configurations.
	 */
	interface IDataSetCustomControlLookupDefinition extends ILegacyDataSetCustomControlParameterDefinition {
		/**
		 * The flag indicating whether user can toggle filter for lookups.
		 */
		AllowFilterOff: boolean;

		/**
		 * The default viewId which is used to populate lookup items.
		 */
		DefaultViewId: string;

		/**
		 * The attribute on which the context filter depends on.
		 */
		DependentAttributeName?: string;

		/**
		 * The attribute type on which the context filter depends on
		 */
		DependentAttributeType?: string;

		/**
		 * The Relationship where both the main entity and the lookup items entity relate to.
		 */
		RelationshipName?: string;
	}

	/**
	 * The definition of Dataset Lookups configuration.
	 */
	interface ICustomControlLookupsDefinition {
		/**
		 * Dictionary of Lookup Definitions
		 */
		[key: string]: IDataSetCustomControlLookupDefinition;
	}

	/**
	 * Definition of Chart Control Parameter definition
	 */
	interface IChartCustomControlParameterDefinition extends IDataSetCustomControlParameterDefinition {
		HighchartFilterExpression?: string;
		IsUserChart?: string;
		ChartDrillDownParameters?: ChartDrillDownParameter[];
		IsUserView?: string;
		ViewIds?: string;
		EnableChartPicker?: boolean;
	}

	/**
	 * Definition for UI options for DataSet Controls
	 */
	interface IDataSetUIOptions {
		/**
		 * Determines if chart can be displayed
		 */
		displayChart?: boolean;

		/**
		 * Determines if command bar can be displayed
		 */
		displayCommandBar?: boolean;

		/**
		 * Determines if view selector can be displayed
		 */
		displayViewSelector?: boolean;

		/**
		 * Determines if jump bar can be displayed
		 */
		displayIndex?: boolean;

		/**
		 * Determines if quick find can be displayed
		 */
		displayQuickFind?: boolean;

		/**
		 * Determines if paging can be displayed
		 */
		displayPaging?: boolean;
	}

	/**
	 * The definition of a dataset parameter received as part of control configuration
	 */
	interface IDataSetCustomControlParameterConfiguration extends IDataSetCustomControlParameterDefinition {
		DataProvider?: IDataSetDataProvider;

		onRecordsSelected?(selectedRecordIds: string[]): void;

		onDataSetUpdate?(dataSetUpdatedObjecToParent: IOnDataSetUpdateObjectToParents): void;

		BoundViewParams?: IViewParams;
	}

	/**
	 * Definition of Business Process flow Parameter definition
	 */
	interface IBusinessProcessFlowParameterDefinition extends ICustomControlParameterDefinition {
		ProcessWrapper?: any;
	}

	/**
	 * Definition of WebResource Html Parameter definition
	 */
	interface IWebResourceParameterDefinition extends ICustomControlParameterDefinition {
		ControlId: string;
		Title: string;
		Url?: string;
		Visible?: boolean;
		ShowLabel?: boolean;
		Label?: string;
		PageType?: string;
		ControlParameters?: any;
	}

	/**
	 * State for a webresource
	 */
	interface IWebResourceState {
		name?: string;
		displayName?: string;
		id?: string;
		type?: string;
		isEnabledForMobileClient?: boolean;
	}

	/**
	 * Definition of a control that authenticates to other resources
	 */
	interface IMultiResourceControlParameterDefinition extends ICustomControlParameterDefinition {
		beginSecureSessionForResource(
			resource: string,
			cookieName: string,
			cookieDoamin: string,
			allowPrompt?: boolean
		): Promise<any>;
	}

	/**
	 * Definition of PowerBI Parameter definition
	 */
	interface IPowerBIParameterDefinition extends IMultiResourceControlParameterDefinition {
		/**
		 * Whether control should be enabled in mobile
		 */
		EnableInMobile: boolean | string;

		/**
		 * The PowerBI group (workspace) id
		 */
		PowerBIGroupId: string;

		/**
		 * The PowerBI dashboard id
		 */
		PowerBIDashboardId: string;

		/**
		 * The PowerBI report id
		 */
		PowerBIReportId: string;

		/**
		 * The PowerBI filter string
		 */
		PowerBIFilter: string;

		/**
		 * The PowerBI tile id
		 */
		TileId: string;

		/**
		 * The PowerBI embed url
		 */
		TileUrl: string;

		/**
		 * The PowerBI component type
		 */
		PowerBIType: number | string;

		/**
		 * Whether Power BI feature is enabled
		 */
		IsPowerBIEnabled: boolean;

		/**
		 * The first party integration site url
		 */
		FirstPartyIntegrationSiteUrl: string;

		/**
		 * The Power BI signed in state
		 */
		PowerBISignedInState: string;

		/**
		 * The tenant to authenticate against
		 */
		Tenant?: string;

		/**
		 * Method to set Power BI signed in state
		 */
		setPowerBISignedInState(signedInState: string): void;

		/**
		 * Opens the power bi control in full screen
		 */
		openPowerBIFullScreenPage(
			powerBIEmbedUrl?: string,
			powerBIGroupId?: string,
			powerBIDashboardId?: string,
			powerBITileId?: string,
			powerBIReportId?: string,
			powerBIReportUrl?: string,
			powerBIComponentTypeCode?: string
		): void;
	}

	/**
	 * Definition of Microsoft Flow Parameter definition
	 */
	interface IMicrosoftFlowParameterDefinition extends ICustomControlParameterDefinition {
		IsMicrosoftFlowEnabled: boolean;
		MicrosoftFlowFirstPartyIntegrationSiteUrl: string;
		MicrosoftFlowDestinationUrl: string;
		MicrosoftFlowEnvironmentId: string;
	}

	/**
	 * The definition of Lookup.Simple type parameter as sent down via the form descriptor
	 */
	interface ILookupCustomControlParameterDefinition
		extends IDataSetCustomControlParameterDefinition,
			IPropertyCustomControlParameterDefinition {
		AllowFilterOff?: boolean;
		AvailableViewIds?: string;
		ContextFilter?: string;
		DependentAttributeName?: string;
		DependentAttributeType?: string;
		DisableQuickFind: boolean;
		DisableViewPicker: boolean;
		ExtraCondition?: string;
		FilterRelationshipName?: string;
		TargetEntityTypes?: string[];

		/**
		 * MRU records are not present in the Lookup result set if set to true
		 */
		DisableMru: boolean;
	}

	/**
	 * The definition of Multi Entity Type parameter as sent down via the form descriptor
	 */
	interface IMultiEntityTypeLookupParameterDefinition extends IPropertyCustomControlParameterDefinition {
		ExtraFilters: string[];
		AdditionalTargetExtraFilters: { [key: string]: string[] };

		/**
		 * MRU records are not present in the Lookup result set if set to true
		 */
		DisableMru: boolean;
	}

	/**
	 * The definition of Timer control parameter as sent down via the form descriptor
	 */
	interface ITimerParameterDefinition extends IPropertyCustomControlParameterDefinition {
		TimerParameters: ITimerParameter;
	}

	/**
	 * Map to Custom Control description. A set of custom control descriptions by unique name
	 */
	interface ICustomControlConfigurationByUniqueId {
		[uniqueId: string]: ICustomControlConfigurations;
	}

	/**
	 * A set of configurations as defined in form descriptor
	 * TODO: This may change if we do formFactor filtering before bringing down descriptor, may need to update
	 */
	interface ICustomControlConfigurations {
		UniqueId: string;
		CustomControls: {
			[formFactor: string]: ICustomControlConfiguration;
		};
	}

	/**
	 * An object mapping a parameter definition to its key as defined in its manifest
	 */
	interface IParameterDefinitionMap {
		[key: string]:
			| IPropertyCustomControlParameterDefinition
			| IDataSetCustomControlParameterDefinition
			| IBusinessProcessFlowParameterDefinition
			| IWebResourceParameterDefinition
			| IFalseBoundCustomControlParameterDefinition
			| IPowerBIParameterDefinition
			| IChartCustomControlParameterDefinition
			| IMicrosoftFlowParameterDefinition
			| IDataSetCustomControlLookupDefinition
			| IMultiEntityTypeLookupParameterDefinition;
	}

	/**
	 * The configuration for a custom control as defined in the form descriptor
	 */
	interface ICustomControlConfiguration {
		FormFactor: number;
		CustomControlId: string;
		Name: string;
		DisplayNameKey?: string;
		Version: string;
		Parameters: IParameterDefinitionMap;
		Children?: {
			[key: string]: ICustomControlConfiguration;
		};
		ShouldOverrideControlVisible: boolean;
		isDefaultConfig?: boolean /** flag indicating the configuration is a default config generated by CCF. **/;
	}

	/**
	 * Object returned by getOutput of a control
	 */
	interface IControlOutput {
		value: any;
		type: PropertyUsage;
		paramType?: string;
		fieldName?: string;
	}

	/**
	 * Interface for the expected object returned by getOutput of a control
	 */
	interface IOutputMap {
		[key: string]: IControlOutput;
	}

	/**
	 * Valid values for the "usage" attribute of a custom control parameter
	 */
	const enum PropertyUsage {
		Bound = 0,
		Input = 1,
		Output = 2,
		FalseBound = 3,
	}

	/**
	 * The Custom Control manifest interface
	 */
	interface ICustomControlManifest {
		ConstructorName: string;
		CustomControlId?: string;
		IsVirtual: boolean;
		Properties: ICustomControlManifestProperties;
		ControlMode?: string;
		VersionNumber?: number;
		OverallVersionNumber?: number;
		DesignMap?: ICCDesignMap;
	}

	interface ICCDesignMap {
		Name: string;
		DesignMap: { [key: string]: string };
	}

	/**
	 * The Custom Control manifest properties interface
	 */
	interface ICustomControlManifestProperties {
		Resources: IResourceRecord[];
		GroupDefinitions: System.Dictionary;
		DataSetDefinitions: ICustomControlManifestDataSetCollection;
		Properties: ICustomControlManifestPropertyCollection | ICustomControlManifestProperty[];
	}

	/**
	 * The collection of manifest property definitions
	 */
	interface ICustomControlManifestPropertyCollection {
		[parameterName: string]: ICustomControlManifestProperty;
	}

	/**
	 * The collection of manifest dataset definitions
	 */
	interface ICustomControlManifestDataSetCollection {
		[datasetName: string]: ICustomControlManifestDataSet;
	}

	/**
	 * A simple field data property definition
	 */
	interface ICustomControlManifestProperty {
		Required: boolean;
		DefaultValue: any;
		Usage: PropertyUsage;
		Name?: string;
	}

	/**
	 * A dataset definition
	 */
	interface ICustomControlManifestDataSet {
		DisplayName: string;
		Type: string;
		Columns: ICustomControlManifestPropertyCollection;
		Primary: boolean;
		InitialDataSetFetch?: boolean;
		CDSDataSetOptions?: IDataSetUIOptions;
	}

	/**
	 * Primitive data structure for Custom Control Resources
	 */
	interface IResourceRecord {
		Name: string;
		LoadOrder: number;
		Type: CustomControlResourceType;
		LibraryName?: string;
	}

	/**
	 * The structure of a parameter as it would be passed to a control
	 */
	interface ICustomControlParameter {
		getLatestData?: () => ICustomControlParameter;
		linkToParameter?: (parameter: ICustomControlParameter, actions: any) => void;
		getUpdatedPropertiesDic?: () => { [key: string]: boolean };
		clearUpdatedPropertiesDic?: () => void;
	}

	interface ICustomControlBaseAttributes {
		/*
		 * Display name for the attribute
		 */
		DisplayName?: string;

		/*
		 * Logical name for the attribute
		 */
		LogicalName?: string;

		/**
		 * Type of the attribute (different from it's manifest type)
		 */
		Type?: string;

		/**
		 * Whether this attribute is secured for field-level security
		 */
		IsSecured?: boolean;

		/**
		 * An enum for data entry requirement level enforced for the attribute
		 * 0 - Not required
		 * 1 - System required
		 * 2 - Application required
		 * 3 - Recommended, but not required
		 */
		RequiredLevel?: number;

		/**
		 * The corresponding "lastUpdated" field's logical name for rollup or calculated attributes
		 */
		lastUpdatedField?: string; // lowercase to be deprecated
		LastUpdatedField?: string;

		/**
		 * The corresponding "lastUpdated" field's value for rollup or calculated attributes
		 */
		lastUpdatedValue?: Date; // lowercase to be deprecated
		LastUpdatedValue?: Date;

		/**
		 * The corresponding "rollup state" field's logical name for rollup control
		 */
		rollupStateField?: string; // lowercase to be deprecated
		RollupStateField?: string;

		/**
		 * The corresponding "rollup state" field's value for rollup control
		 * 0 - Not yet calculated
		 * 1 - Calculated
		 * 2 - Overflow error
		 * 3 - Other error
		 * 4 - Definition changed
		 * 5 - Retry Limit exceeded
		 * 6 - Currency field missing
		 */
		rollupStateValue?: number; // lowercase to be deprecated
		RollupStateValue?: number;

		/**
		 * If this field is a calculated field, whether its current value is valid
		 */
		calculatedFieldValid?: boolean; // lowercase to be deprecated
		CalculatedFieldValid?: boolean;

		/**
		 * If this field is a rollup field, whether its current value is valid
		 */
		rollupValid?: boolean; // lowercase to be deprecated
		RollupValid?: boolean;

		/**
		 * Whether this field is persistent (0), Calculated (1), or Rollup (2)
		 */
		SourceType?: number;

		/**
		 * A callback function that will trigger a recalculate if the field is rollup or calculated
		 */
		recalculate?: () => void; // lowercase to be deprecated
		Recalculate?: () => void;

		/**
		 * Description of the attribute
		 */
		Description?: string;

		/**
		 * Describes the input method editor mode
		 * 0 - Auto - Specifies that the IME mode is auotmatically chosen
		 * 1 - Inactive - Specifies that the IME mode is inactive
		 * 2 - Active - Speifies that the IME mode is active
		 * 3 - Disabled - Specifies that the IME mode is disabled
		 */
		ImeMode?: number;
	}

	interface ICustomControlBaseNumberAttributes extends ICustomControlBaseAttributes {
		/**
		 * Minimum value for the attribute
		 */
		MinValue?: number;

		/**
		 * Maxmimum value for the attribute
		 */
		MaxValue?: number;

		/**
		 * The default value that this control should use if no value has been set by the user
		 */
		DefaultValue?: number | boolean | string;
	}

	interface ICustomControlBaseStringAttributes extends ICustomControlBaseAttributes {
		/**
		 * Maximum length for the string
		 */
		MaxLength?: number;

		/**
		 * Decimal precision for the attribute
		 */
		Precision?: number;

		/**
		 * Describes the format of an attribute i.e. text string vs url
		 */
		Format?: string;

		/**
		 * The default value that this control should use if no value has been set by the user
		 */
		DefaultValue?: number | boolean | string;
	}

	interface ICustomControlDateTimeAttributes extends ICustomControlBaseAttributes {
		/**
		 * Describes the format of an attribute i.e. text string vs url
		 */
		Format?: string;

		/**
		 * Specifies the behavior of a datetime attribute
		 * 1 - User local time zone is used for times
		 * 2 - Time zone independent
		 * 3 - User local time zone
		 */
		Behavior?: number;
	}

	interface ICustomControlOptionSetAttributes extends ICustomControlBaseAttributes {
		/**
		 * The default value that this control should use if no value has been set by the user
		 */
		DefaultValue?: number | boolean | string;

		/**
		 * List of options for a boolean or an option set control
		 */
		Options?: ICCFOptionSetValue[];
	}

	interface ICustomControlLookupAttributes extends ICustomControlBaseAttributes {
		/**
		 * Target entity types for the lookup
		 */
		Targets?: string[];

		/**
		 * Logical name of the entity
		 */
		EntityLogicalName?: string;
	}

	interface ICustomControlLanguageAttributes extends ICustomControlBaseNumberAttributes {
		/**
		 * A mapping of language codes to its corresponding text string
		 */
		LanguageByCode?: { [code: number]: string };
	}

	interface ICustomControlTimeZoneAttributes extends ICustomControlBaseNumberAttributes {
		/**
		 * A mapping of timezone codes to its corresponding text value
		 */
		TimeZoneByCode?: { [code: number]: string };
	}

	/**
	 * The interface of attributes as it would be passed to a control.
	 * Portions of this object can be null depending on factors such as control configuration, definition, and framework environment,
	 * so it is suggested that these values be properly null checked. This is especially prevalent in cases where a control can be configured against
	 * numerous different data types
	 */
	interface ICustomControlAttributes
		extends ICustomControlOptionSetAttributes,
			ICustomControlBaseStringAttributes,
			ICustomControlLookupAttributes,
			ICustomControlTimeZoneAttributes,
			ICustomControlLanguageAttributes,
			ICustomControlDateTimeAttributes {
		// Nothing goes here
	}

	/**
	 * Structure of Action Collection
	 */
	interface ActionCollection {
		/* Collection of actions for control */
		actions?: (() => void)[];

		/* Notification messages for control */
		message?: string;
	}

	/**
	 * Structure of business rule notification
	 */
	interface BusinessRuleNotification {
		/* Notification messages for control */
		messages: string[];

		/* Notification actions for control */
		actions?: ActionCollection[];

		/* Notification level ERROR/RECOMMENDATION */
		notificationLevel?: string;

		/* Unique Id for the recommendation */
		uniqueId?: string;
	}

	/**
	 * Interface for notifications associated with control
	 */
	interface ControlNotifications {
		/* Top Error notification */
		error: BusinessRuleNotification;

		/* Top Recommendation notification */
		recommendation: BusinessRuleNotification;

		/* Top Information notification */
		information: BusinessRuleNotification;
	}

	/**
	 * The structure of a property parameter as it would be passed to a control
	 */
	interface IPropertyParameter extends ICustomControlParameter {
		/**
		 * The property type, as it would be defined in a control's manifest. In the case where a manifest allows configuration against
		 * multilple types, this value would be whichever was actually configured by the customizer/system/parent control
		 */
		type: string;

		/**
		 * The raw, unformatted value of this field (i.e. number, date object, Entity reference, etc).
		 */
		raw: any;

		/**
		 * The attribute metadata associated with the field this property is configured against
		 * This is only set when the parameter is of usage=bound
		 */
		attributes?: ICustomControlAttributes;

		/**
		 * The formatted string value of this field
		 * This is only set if the parameter is of usage=bound
		 */
		formatted?: string;

		/**
		 * A boolean indicator to tell the control whether this parameter has either encountered an error
		 * in the population of its data, or that the data currently associated with this field is
		 * of an invalid format
		 */
		error: boolean;

		/**
		 * The error message associated with the last encountered error, if applicable
		 */
		errorMessage: string;

		/**
		 * The error or notifications for a given field on a form that are set by the control
		 */
		notifications?: ControlNotifications;

		/**
		 * Information concerning the field level security of the field to which this control was bound
		 * This value is only present if the usage=bound
		 */
		security: ICustomControlSecurityParameters;
	}

	/**
	 * The structure of a property parameter as it would be passed to a Timer control
	 */
	interface ITimerPropertyParameter extends IPropertyParameter {
		timerParameterAttributeValues: ITimerParameterAttributeValues;
		timerParameters: ITimerParameter;
		timerState: number;
		serverTimeDifferenceInSeconds: number;
		timerControlId: string;
		telemetryParameters: ITimerTelemetryParameter;
	}

	/**
	 * Metadata about a column in a data set
	 */
	interface DataSetColumn extends IDataSetColumn {
		/**
		 * Name of the column, unique in this data set
		 */
		name: string;

		/**
		 * Localized display name for the column, can be used in UIs
		 */
		displayName: string;

		/**
		 * The data type of this column's values.
		 */
		dataType: string;

		/**
		 * The alias of this column.
		 */
		alias: string;

		/**
		 * The column order for the layout.
		 */
		order: number;

		/**
		 * The configured size factor for this column relative to other columns in the data set.
		 * By default columns have a size factor of 1.0, but the system customizer or user can
		 * make some columns larger (e.g., 1.5) or smaller (e.g., 0.75).
		 */
		visualSizeFactor: number;

		/**
		 * The column visibility state.
		 */
		isHidden?: boolean;

		/**
		 * The column web resource name.
		 */
		imageProviderWebresource?: string;

		/**
		 * The column image provider function name
		 */
		imageProviderFunctionName?: string;

		/**
		 * The column is primary attrribute
		 */
		isPrimary?: boolean;

		/**
		 * The column's cell type
		 */
		cellType?: string;

		/**
		 * If the column needs to diasable sorting
		 */
		disableSorting?: boolean;
		// ToDO add other existed APIs
	}

	/**
	 * @deprecated interface for Metadata about a column in a data set
	 */
	interface IDataSetColumn {
		/**
		 * Name of the column, unique in this data set
		 */
		name: string;

		/**
		 * Localized display name for the column
		 */
		displayName: string;

		/**
		 * The data type of this column's values.
		 */
		dataType: string;

		/**
		 * The alias of this column.
		 */
		alias: string;

		/**
		 * The column order for the layout.
		 */
		order: number;

		/**
		 * The configured size factor for this column relative to other columns in the data set.
		 * By default columns have a size factor of 1.0, but the system customizer or user can
		 * make some columns larger (e.g., 1.5) or smaller (e.g., 0.75).
		 */
		visualSizeFactor: number;

		/**
		 * The column visibility state.
		 */
		isHidden?: boolean;

		/**
		 * The column web resource name.
		 */
		imageProviderWebresource?: string;

		/**
		 * The column image provider function name
		 */
		imageProviderFunctionName?: string;

		/**
		 * The column is primary attrribute
		 */
		isPrimary?: boolean;

		/**
		 * If the column needs to diasable sorting
		 */
		disableSorting?: boolean;
	}

	interface ILegacyColumnOptionDescriptor {
		Color?: string;
		Label: string;
		Value: number;
	}

	interface ILegacyColumnAttributes {
		LogicalName: string;
		Type: string;
		type: string;
		DisplayName?: string;
		IsSecured?: boolean;
		RequiredLevel?: number;
		MaxLength?: number;
		maxLength?: number;
		MinValue?: number;
		minValue?: number;
		MaxValue?: number;
		maxValue?: number;
		Precision?: number;
		precision?: number;
		Format: string;
		format: string;
		Behavior?: string;
		behavior?: string;
		DefaultValue?: string | boolean | number;
		defaultValue?: string | boolean | number;
		Targets?: string[];
		targets?: string[];
		ImeMode?: number;
		imeMode?: number;
		SourceType?: number;
		sourceType?: number;
		Options: ILegacyColumnOptionDescriptor[];
		options: ILegacyColumnOptionDescriptor[];
		ParentPicklistLogicalName?: string;
		parentPicklistLogicalName?: string;
		ChildPicklistLogicalNames?: string[];
		childPicklistLogicalNames?: string[];
	}

	/**
	 * Metadata about a column in a data set
	 */
	interface LegacyDataSetColumn {
		/**
		 * Name of the column, unique in this data set
		 */
		name: string;

		/**
		 * Localized display name for the column, can be used in UIs
		 */
		displayName: string;

		/**
		 * The data type of this column's values.
		 */
		dataType: string;

		/**
		 * The alias of this column.
		 */
		alias: string;

		/**
		 * The column order for the layout.
		 */
		order: number;

		/**
		 * The configured size factor for this column relative to other columns in the data set.
		 * By default columns have a size factor of 1.0, but the system customizer or user can
		 * make some columns larger (e.g., 1.5) or smaller (e.g., 0.75).
		 */
		visualSizeFactor: number;

		/**
		 * Additional parameters
		 */
		attributes: ILegacyColumnAttributes;

		/**
		 * The column visibility state.
		 */
		isHidden?: boolean;

		/**
		 * The column web resource name.
		 */
		imageProviderWebresource?: string;

		/**
		 * The column image provider function name
		 */
		imageProviderFunctionName?: string;

		/**
		 * The column is primary attrribute
		 */
		isPrimary?: boolean;

		/**
		 * The column's cell type
		 */
		cellType?: string;

		/**
		 * If the column needs to diasable sorting
		 */
		disableSorting?: boolean;
	}

	/**
	 * The security interface for a field bound parameter
	 */
	interface ICustomControlSecurityParameters {
		/**
		 * Whether this value is meant to be editable in the current context
		 */
		editable?: boolean;

		/**
		 * Whether this field has security rules applied to it
		 */
		secured?: boolean;

		/**
		 * Whether this value is meant to be readable in the current context
		 */
		readable?: boolean;
	}

	/**
	 * An option set value for use with OptionSet or TwoOption controls
	 */
	interface ICCFOptionSetValue {
		/**
		 * The text label to display for this option to the user
		 */
		Label: string;

		/**
		 * The internal number value of this option. This will correspond to the "raw" value given in the parameter,
		 * and is what should be returned in getOutputs
		 */
		Value: number;

		/**
		 * A color value associated with this option. This value is not always present.
		 */
		Color?: string;
	}

	/**
	 * Interface for select set value
	 */
	interface ICCFSelectSetValue {
		Label: string;
		Value: number | string;
		Color?: string;
	}

	/**
	 * Base type for data set result values that supports value retrival by column name.
	 * Derived classes can provide named shortcuts to particular column values.
	 */
	interface DataSetRecord extends IDataSetRecord {
		/**
		 * Get the record ID of this record.
		 */
		getRecordId(): string;

		/**
		 * Get the currently persisted value in a column of this record.
		 * @returns The rawValue of that columns. The original return type in Mscrm.d.ts is DataTypes.BaseType,
		 * after check in Calendar control, it looks like the return is a raw value, so I set its type to be any
		 */
		getValue(columnName: string): any;

		/**
		 * Get the formatted value
		 */
		getFormattedValue(columnName: string): any;

		/**
		 * Sets value
		 */
		setValue(columnName: string, newValue: string): void;

		/**
		 * Saves value
		 */
		save(): Promise<boolean>;

		/**
		 * Get validation error message string.
		 * @param columnName DataSet column name
		 */
		getValidationError(columnName: string): string;
		// ToDo Add other existed APIs
	}

	/**
	 * @internal Api is internal.
	 */
	interface IDataSetRecord {
		/**
		 * Get the record ID of this record.
		 */
		getRecordId(): string;

		/**
		 * Get the current value of this record column.
		 * @columnName Column name of the record
		 * @returns The rawValue of that column.
		 */
		getValue(columnName: string): string | Date | number | boolean | ControlAndClientApiInterfaces.LookupValue[];
	}

	interface LegacyDataSetRecord {
		/**
		 * Get the record ID of this record.
		 */
		getRecordId(): string;

		/**
		 * Get the currently persisted value in a column of this record.
		 * @returns The rawValue of that columns. The original return type in Mscrm.d.ts is DataTypes.BaseType,
		 * after check in Calendar control, it looks like the return is a raw value, so I set its type to be any
		 */
		getValue(columnName: string): any;

		/**
		 * Get the formatted value
		 */
		getFormattedValue(columnName: string): any;

		/**
		 * Sets value
		 */
		setValue(columnName: string, newValue: string): Promise<boolean>;

		/**
		 * Saves value
		 */
		save(): Promise<boolean>;

		/**
		 * Get error message
		 */
		getErrorMessage(): string;

		/**
		 * Set error message
		 * @param value Error message to set
		 */
		setErrorMessage(value: string): void;

		/**
		 * Get notification
		 * @param columnName Record column name
		 */
		getNotification(columnName: string): string;

		/**
		 * Set notification
		 * @param columnName Record column name
		 * @param value Notification value to set
		 */
		setNotification(columnName: string, value: string): void;

		/**
		 * Get the primary entity logical name associated with this record.
		 */
		getPrimaryEntityLogicalName(): string;
	}

	/**
	 * Current sort status of a data set column
	 */
	interface DataSetColumnSortStatus extends IDataSetColumnSortStatus {
		/**
		 * The name of the column
		 */
		name: string;

		/**
		 * The current sort direction for the column.
		 */
		sortDirection: ColumnSortDirection;
	}

	/**
	 * @internal. Api is internal.
	 */
	interface IDataSetColumnSortStatus {
		/**
		 * The name of the column
		 */
		name: string;

		/**
		 * The current sort direction for the column.
		 */
		sortDirection: ColumnSortDirection;
	}

	/**
	 * Column Sort Direction
	 */
	const enum ColumnSortDirection {
		None = -1,
		Ascending = 0,
		Descending = 1,
	}

	/**
	 * Column Sort Direction
	 */
	const enum FirstDataRequestType {
		FirstDataRequestWhenCreated = 0,
		FirstDataRequestByControl = 1,
		FirstDataRequestByPage = 2,
	}

	/**
	 * An expression used to represent a filter.
	 */
	interface FilterExpression extends IFilterExpression {
		/**
		 * The set of conditions associated with this filter.
		 */
		conditions: ConditionExpression[];

		/**
		 * The operator used to combine conditions in this filter.
		 */
		filterOperator: FilterOperator;

		/**
		 * Any child filters that should be evaluated after evaluating this filter.
		 */
		filters?: FilterExpression[];
	}

	/**
	 * @internal Api is internal.
	 */
	interface IFilterExpression {
		/**
		 * The set of conditions associated with this filter.
		 */
		conditions: ConditionExpression[];

		/**
		 * The operator used to combine conditions in this filter.
		 */
		filterOperator: FilterOperator;

		/**
		 * Any child filters that should be evaluated after evaluating this filter.
		 */
		filters?: IFilterExpression[];
	}

	/**
	 * An expression used to represent a filter condition.
	 */
	interface ConditionExpression {
		/**
		 * The name of the data-set column to apply the filter on.
		 */
		attributeName: string;

		/**
		 * The operator used to evaluate the condition.
		 */
		conditionOperator: ConditionOperator;

		/**
		 * The raw value used to evaluate the condition.
		 */
		value: string | Array<string>;

		/**
		 * Entity alias name so filtering can be used on linked entities.
		 */
		entityAliasName?: string;
	}

	/**
	 * Filter state for a data set.
	 */
	interface DataSetFiltering extends IDataSetFiltering {
		/**
		 * Mapping between dataset columns and entity columns.
		 */
		aliasMap: System.Dictionary;

		/**
		 * Returns the top-most filter associated with the data-set
		 */
		getFilter(): FilterExpression;

		/**
		 * Sets the top-most filter associated with the data-set
		 */
		setFilter(expression: FilterExpression): void;

		/**
		 * Clears the filter associated with the data-set.
		 */
		clearFilter(): void;

		/**
		 * Returns true if relationship filtering can be disabled
		 */
		canDisableRelationshipFilter(): boolean;
	}

	/**
	 * The Lookup data set filter object which is used to toggle the context filter
	 */
	interface LookupDataSetFiltering extends DataSetFiltering {
		/**
		 * enables the relationship filter.
		 */
		enableRelationshipFilter(record: LegacyDataSetRecord): void;

		/**
		 * Disables the relationship filter.
		 */
		disableRelationshipFilter(): void;
	}

	/**
	 * @internal Api is internal.
	 */
	interface IDataSetFiltering {
		/**
		 * Returns the top-most filter associated with the data-set
		 */
		getFilter(): IFilterExpression;

		/**
		 * Sets the top-most filter associated with the data-set
		 * @expression filter expression to be set
		 */
		setFilter(expression: IFilterExpression): void;

		/**
		 * Clears the filter associated with the data-set.
		 */
		clearFilter(): void;
	}

	/**
	 * Data set entity linking.
	 */
	interface DataSetLinking extends IDataSetLinking {
		/**
		 *@returns Returns all the linked entities information
		 */
		getLinkedEntities(): LinkEntityExpression[];

		/**
		 * Sets a new linked entity with the existing linked entities
		 */
		addLinkedEntity(expression: LinkEntityExpression): void;
	}

	/**
	 * @deprecated interface for Data set entity linking.
	 */
	interface IDataSetLinking {
		/**
		 *@returns Returns all the linked entities information
		 */
		getLinkedEntities(): ILinkEntityExpression[];

		/**
		 * Sets a new linked entity with the existing linked entities
		 */
		addLinkedEntity(expression: ILinkEntityExpression): void;
	}

	/**
	 * Data set link entity expression.
	 */
	interface LinkEntityExpression extends ILinkEntityExpression {
		/**
			The 'name' of the entity to link to
		*/
		name: string;

		/**
			The 'from' attribute in the link-entity relationship
		*/
		from: string;

		/**
			The 'to' attribute in the link-entity relationship
		*/
		to: string;

		/**
			The 'type' of the link, referred to by the link-entity attribute
		*/
		linkType: string;

		/**
			The 'alias' for the link-entity relationship
		*/
		alias: string;
	}

	/**
	 * @internal Api is internal.
	 */
	interface ILinkEntityExpression {
		/**
			The 'name' of the entity to link to
		*/
		name: string;

		/**
			The 'from' attribute in the link-entity relationship
		*/
		from: string;

		/**
			The 'to' attribute in the link-entity relationship
		*/
		to: string;

		/**
			The 'type' of the link, referred to by the link-entity attribute
		*/
		linkType: string;

		/**
			The 'alias' for the link-entity relationship
		*/
		alias: string;
	}

	/**
	 * DataSet paging object
	 */
	interface DataSetPagingData {
		/**
		 * Number of first page
		 */
		firstPageNumber: number;

		/**
		 * Number of last page
		 */
		lastPageNumber: number;

		/**
		 * The pageSize of the paging
		 */
		pageSize: number;

		/**
		 * The value to identify if load exact page
		 */
		pagingRefreshInput?: string;
	}

	interface IDataSetPagingDataProvider extends DataSetPagingShared {
		/**
		 * Request the next page of results to be loaded.
		 */
		loadNextPage(): Promise<DataSetRecord[]>;

		/**
		 * Request the previous page of results to be loaded.
		 */
		loadPreviousPage(): Promise<DataSetRecord[]>;

		/**
		 * Reload the results from the server, and reset to page 1.
		 */
		reset(): Promise<DataSetRecord[]>;

		/**
		 * Sets the number of results to return per page on the next data refresh.
		 */
		setPagingSize(pageSize: number): void;

		/**
		 * Request the exact page of results to be loaded.
		 */
		loadExactPage(pageNumber: number): void;
	}

	interface DataSetPaging extends DataSetPagingShared {
		/**
		 * Request the next page of results to be loaded.
		 */
		loadNextPage(): void;

		/**
		 * Request the previous page of results to be loaded.
		 */
		loadPreviousPage(): void;

		/**
		 * Reload the results from the server, and reset to page 1.
		 */
		reset(): void;

		/**
		 * Sets the number of results to return per page on the next data refresh.
		 */
		setPageSize(pageSize: number): void;

		/**
		 * Request the exact page of results to be loaded.
		 */
		loadExactPage(): void;
	}

	/**
	 * Paging state for a data set
	 */
	interface DataSetPagingShared extends DataSetPagingData {
		/**
		 * Total number of results on the server for the currently applied query.
		 */
		totalResultCount: number;

		/**
		 * Whether the result set can be paged forwards.
		 */
		hasNextPage: boolean;

		/**
		 * Whether the result set can be paged backwards.
		 */
		hasPreviousPage: boolean;
	}

	/**
	 * Paging state for a data set
	 */
	interface DataSetPaging extends DataSetPagingData, IDataSetPaging {
		/**
		 * Total number of results on the server for the currently applied query.
		 */
		totalResultCount: number;

		/**
		 * Whether the result set can be paged forwards.
		 */
		hasNextPage: boolean;

		/**
		 * Whether the result set can be paged backwards.
		 */
		hasPreviousPage: boolean;

		/**
		 * Request the next page of results to be loaded.
		 */
		loadNextPage(): void;

		/**
		 * Request the previous page of results to be loaded.
		 */
		loadPreviousPage(): void;

		/**
		 * Reload the results from the server, and reset to page 1.
		 */
		reset(): void;

		/**
		 * Sets the number of results to return per page on the next data refresh.
		 */
		setPageSize(pageSize: number): void;

		/**
		 * Request the exact page of results to be loaded.
		 */
		loadExactPage(pageNumber: number): void;
	}

	/**
	 * @internal Api is internal.
	 */
	interface IDataSetPaging extends DataSetPagingData {
		/**
		 * Total number of results on the server for the current query.
		 */
		totalResultCount: number;

		/**
		 * Whether the result set can be paged forwards.
		 */
		hasNextPage: boolean;

		/**
		 * Whether the result set can be paged backwards.
		 */
		hasPreviousPage: boolean;

		/**
		 * Request the next page of results to be loaded.
		 */
		loadNextPage(): void;

		/**
		 * Request the previous page of results to be loaded.
		 */
		loadPreviousPage(): void;

		/**
		 * Reload the results from the server, and reset to page 1.
		 */
		reset(): void;

		/**
		 * Sets the number of results to return per page on the next data refresh.
		 * @pageSize pageSize to be set.
		 */
		setPageSize(pageSize: number): void;

		/**
		 * Request the exact page of results to be loaded.
		 */
		loadExactPage(pageNmuber: number): void;
	}

	/**
	 * Supported Condition Operator for filtering expression condition
	 */
	const enum ConditionOperator {
		None = -1,
		Equal = 0,
		NotEqual = 1,
		GreaterThan = 2,
		LessThan = 3,
		GreaterEqual = 4,
		LessEqual = 5,
		Like = 6,
		NotLike = 7,
		In = 8,
		NotIn = 9,
		Between = 10,
		NotBetween = 11,
		Null = 12,
		NotNull = 13,
		Yesterday = 14,
		Today = 15,
		Tomorrow = 16,
		Last7Days = 17,
		Next7Days = 18,
		LastWeek = 19,
		ThisWeek = 20,
		NextWeek = 21,
		LastMonth = 22,
		ThisMonth = 23,
		NextMonth = 24,
		On = 25,
		OnOrBefore = 26,
		OnOrAfter = 27,
		LastYear = 28,
		ThisYear = 29,
		NextYear = 30,
		LastXHours = 31,
		NextXHours = 32,
		LastXDays = 33,
		NextXDays = 34,
		LastXWeeks = 35,
		NextXWeeks = 36,
		LastXMonths = 37,
		NextXMonths = 38,
		LastXYears = 39,
		NextXYears = 40,
		Contains = 49,
		OlderThanXMonths = 53,
		ThisFiscalYear = 58,
		ThisFiscalPeriod = 59,
		NextFiscalYear = 60,
		NextFiscalPeriod = 61,
		LastFiscalYear = 62,
		LastFiscalPeriod = 63,
		LastXFiscalYears = 64,
		LastXFiscalPeriods = 65,
		NextXFiscalYears = 66,
		NextXFiscalPeriods = 67,
		InFiscalYear = 68,
		InFiscalPeriod = 69,
		InFiscalPeriodAndYear = 70,
		InOrBeforeFiscalPeriodAndYear = 71,
		InOrAfterFiscalPeriodAndYear = 72,
		Above = 75,
		Under = 76,
		NotUnder = 77,
		AboveOrEqual = 78,
		UnderOrEqual = 79,
		OlderThanXYears = 82,
		OlderThanXWeeks = 83,
		OlderThanXDays = 84,
		OlderThanXHours = 85,
		OlderThanXMinutes = 86,
		ContainValues = 87,
	}

	/**
	 * Supported Filter Operator for filtering expression linkage
	 */
	const enum FilterOperator {
		And = 0,
		Or = 1,
	}

	/**
	 * The structure of a dataset parameter data as it would be passed to a control
	 */
	interface IDataSetParameterData extends IDataSetData {
		/**
		 * True if encountered error while data retrieval
		 */
		error: boolean;

		/**
		 * The error message associated with the last encountered error, if applicable
		 */
		errorMessage: string;

		/**
		 * DataSet parameter initialization state
		 */
		loading: boolean;

		/**
		 * The set of columns available in this dataset.
		 */
		columns: DataSetColumn[];

		/**
		 * IDs of the records in the dataset, in order
		 */
		sortedRecordIds: string[];

		/**
		 * Map of IDs to the full record object
		 */
		records: {
			[id: string]: DataSetRecord;
		};

		/**
		 * The column sorting for the current query.
		 */
		sorting: DataSetColumnSortStatus[];

		/**
		 * The column sorting for the current query.
		 */
		filtering: DataSetFiltering;

		/**
		 * Pagination status and actions.
		 */
		paging: DataSetPaging;

		/**
		 * Entity linking.
		 */
		linking: DataSetLinking;
	}

	/**
	 * @internal Api is internal.
	 */
	interface IDataSetData {
		/**
		 * True if encountered error while data retrieval
		 */
		error: boolean;

		/**
		 * The error message associated with the last encountered error, if applicable
		 */
		errorMessage: string;

		/**
		 * DataSet parameter initialization state
		 */
		loading: boolean;

		/**
		 * The set of columns available in this dataset.
		 */
		columns: IDataSetColumn[];

		/**
		 * IDs of the records in the dataset, in order
		 */
		sortedRecordIds: string[];

		/**
		 * Map of IDs to the full record object
		 */
		records: {
			[id: string]: IDataSetRecord;
		};

		/**
		 * The column sorting for the current query.
		 */
		sorting: IDataSetColumnSortStatus[];

		/**
		 * The column sorting for the current query.
		 */
		filtering: IDataSetFiltering;

		/**
		 * Pagination status and actions.
		 */
		paging: IDataSetPaging;

		/**
		 * Entity linking.
		 */
		linking: IDataSetLinking;
	}

	/**
	 * DataSet Mru Reference is for MRU object
	 */
	interface DataSetMruReference {
		/**
		 * Date when item was accessed last.
		 */
		lastAccessed: Date;

		/**
		 * String representing type of entity for recent item.
		 */
		entityTypeName: string;

		/**
		 * Flag to determine whether item is pinned or not.
		 */
		pinStatus: boolean;

		/**
		 * Unique identifier of associated entity record.
		 */
		objectId: string;

		/**
		 * Title of the item
		 */
		title: string;
	}

	/**
	 * The Lookup Configuration interface
	 */
	interface LookupConfiguration {
		/**
		 * MRU records are not present in the Lookup result set if set to true
		 */
		isMruDisabled: boolean;

		/**
		 * The new button is not visible in the control if set to true
		 */
		isInlineNewButtonDisabled: boolean;
	}

	/**
	 * The structure of most recent used API input parameter
	 */
	interface IMruOptions {
		/**
		 * An array of entityTypeNames
		 */
		entityTypeNames?: string[];
	}

	/**
	 * The structure of a dataset parameter as it would be passed to a control
	 */
	interface IDataSetParameter
		extends ICustomControlParameter,
			IDataSetParameterData,
			IDataSetParameterNeededByLegacy,
			IDataSet {
		/**
		 * Refreshes the data set base on filters and sorting and Target Entity
		 */
		refresh(): void;

		/**
		 * Gets Id of view used by DataSet parameter
		 */
		getViewId(): string;

		/**
		 * Get DataSet target entity type name
		 */
		getTargetEntityType(): string;

		/**
		 * Retrieves the title associated with the dataset
		 */
		getTitle(): string;

		/**
		 * Adds column to the columnset
		 */
		addColumn?: (name: string, entityAlias?: string) => void;

		/**
		 * The dataset paramKey
		 */
		paramKey?: string;
	}

	/**
	 * @internal Api is internal.
	 */
	interface IDataSet {
		/**
		 * Refreshes the data set based on filters, sorting and Target Entity
		 */
		refresh(): void;

		/**
		 * Gets Id of view used by DataSet parameter
		 */
		getViewId(): string;

		/**
		 * Get DataSet target entity type name
		 */
		getTargetEntityType(): string;

		/**
		 * Retrieves the title associated with the dataset
		 */
		getTitle(): string;

		/**
		 * Adds column to the columnset
		 * @name column name to be added to the columnset
		 * @entityAlias entity alias for which the column name needs to be added
		 */
		addColumn?: (name: string, entityAlias?: string) => void;
	}

	/**
	 * The structure of a dataset parameter data as it would be passed to a control
	 */
	interface IDataSetLegacyParameterData {
		/**
		 * True if encountered error while data retrieval
		 */
		hasError: boolean;

		/**
		 * The error message associated with the last encountered error, if applicable
		 */
		errorMessage: string;

		/**
		 * DataSet parameter initialization state
		 */
		working: boolean;

		/**
		 * The set of columns available in this dataset.
		 */
		columns: LegacyDataSetColumn[];

		/**
		 * IDs of the records in the dataset, in order
		 */
		sortedRecordIds: string[];

		/**
		 * Map of IDs to the full record object
		 */
		records: {
			[id: string]: LegacyDataSetRecord;
		};

		/**
		 * The column sorting for the current query.
		 */
		sorting: DataSetColumnSortStatus[];

		/**
		 * The column sorting for the current query.
		 */
		filtering: DataSetFiltering;

		/**
		 * Pagination status and actions.
		 */
		paging: DataSetPaging;

		/**
		 * Commanding object
		 */
		commanding: any;

		/**
		 * Adds column to the columnset
		 */
		addColumn?: (name: string, entityAlias?: string) => void;

		/**
		 *The column properties to determine whether an option set belongs to a complete chain or incomplete chain.
		 */
		dependentOptionSetColumnStatus?: IDataSetControlDependentOptionSetColumnsState;
	}

	/**
	 * Datamodel to store the dependentOptionSetChainStatus for Columns
	 */
	interface IDataSetControlDependentOptionSetColumnsState {
		[columnName: string]: DependentOptionSetChainStatus;
	}

	/**
	 * Types of DependentOptionSetChainStatus
	 */
	const enum DependentOptionSetChainStatus {
		IncompleteChain = 0,
		CompleteChain = 1,
	}

	/**
	 *	The structure returned by getCellImageInfo and propagated down to the control to display conditional images.
	 */
	interface IImageInfo {
		/**
		 * The Url of the conditional image.
		 */
		Url: string;

		/**
		 * The tooltip associated with that image.
		 */
		Tooltip: string;
	}

	/**
	 * DataSetParameter Needed by Legacy as the two system doesn't compatible to each other now
	 */
	interface IDataSetParameterNeededByLegacy extends IDataSetNeededByLegacy {
		/**
		 * Retrieve Record's Associated Commands
		 * @param recordIds selected records
		 * @param specificCommands specific commands' names
		 * @param filterByPriority flag indicating whether or not apply filtering by priority
		 * @param useNestedFormat use nested format commands
		 * @param refreshhAllRules refresh all rules flag
		 */
		retrieveRecordCommand(
			recordIds: string[],
			specificCommands?: string[],
			filterByPriority?: boolean,
			useNestedFormat?: boolean,
			refreshAllRules?: boolean
		): DynamicsSrc.IDeferred<ICommandObjectWrapper[], any>;

		/**
		 * Open DataSet Item for a given EntityReference
		 */
		openDatasetItem(entityReference: any): void;

		/**
		 * Set the ids of the selected records
		 */
		setSelectedRecordIds(ids: string[]): void;

		/**
		 * Retrieves all selected record ids
		 */
		getSelectedRecordIds(): string[];

		/**
		 * Clear selected record ids list
		 */
		clearSelectedRecordIds(): void;

		/**
		 * Retrieve image info (such as url and associated tooltip) from column web resource
		 * @param columnName
		 * @param recordId
		 */
		getCellImageInfo?: (columnName: string, recordId: string, userLcid?: number) => Promise<IImageInfo>;
	}

	/**
	 * @internal API is internal.
	 */
	interface IDataSetNeededByLegacy {
		/**
		 * Retrieve Record's Associated Commands
		 * @param recordIds selected records
		 * @param specificCommands specific commands' names
		 * @param filterByPriority flag indicating whether or not apply filtering by priority
		 * @param useNestedFormat use nested format commands
		 * @param refreshhAllRules refresh all rules flag
		 */
		retrieveRecordCommand(
			recordIds: string[],
			specificCommands?: string[],
			filterByPriority?: boolean,
			useNestedFormat?: boolean,
			refreshAllRules?: boolean
		): DynamicsSrc.IDeferred<ICommandObjectWrapper[], ErrorResponse>;

		/**
		 * Open DataSet Item for a given EntityReference
		 * @entityReference entity reference
		 */
		openDatasetItem(entityReference: CustomControlEntityReference): void;

		/**
		 * Set the ids of the selected records
		 * @ids List of recordId's
		 */
		setSelectedRecordIds(ids: string[]): void;

		/**
		 * Retrieves all selected record ids
		 */
		getSelectedRecordIds(): string[];

		/**
		 * Clear selected record ids list
		 */
		clearSelectedRecordIds(): void;
	}

	/**
	 * An error status that encapsulates the error message
	 */
	interface ErrorResponse {
		/**
		 * The error message.
		 */
		message: string;
		/**
		 * The error code
		 */
		errorCode: number;
	}

	/**
	 * An object that encapsulates an Entity Reference as a plain object suitable for storing in the state tree
	 */
	interface CustomControlEntityReference {
		/**
		 * The record id.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
		 */
		id: string;

		/**
		 * The entity type name.  Read-only.This is public to allow for access to the value as well as to simplify serialization.
		 */
		entityType: string;

		/**
		 * The entity type name.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
		 */
		name: string;
	}

	/**
	 * The structure of a legacy dataset parameter as it would be passed to a control
	 */
	interface ILegacyDataSetParameter
		extends ICustomControlParameter,
			IDataSetLegacyParameterData,
			IDataSetParameterNeededByLegacy {
		/**
		 * Refreshes the data set base on filters and sorting and Target Entity
		 */
		refresh(): void;

		/**
		 * Gets Id of view used by DataSet parameter
		 */
		getViewId(): string;

		/**
		 * Get DataSet target entity type name
		 */
		getTargetEntityType(): string;

		/**
		 * Gets the additional attributes for all the columns in this dataset object
		 * @returns A deferred object that will return true if the operation was successful. Otherwise, false
		 */
		generateAdditionalAttributes(): DynamicsSrc.IDeferred<boolean, any>;

		/**
		 * Gets the lookup dataset for column with specified name
		 */
		getLookupDataSet(columnName: string): Promise<CustomControlInterfaces.ILegacyDataSetParameter>;

		/**
		 * Add a listener to dataset record change events triggered after a successful or failed record update.
		 * @param callback Event handler to call
		 */
		add_OnDataSetRecordChange(callback: LegactDataSetOnRecordChangeHandler): void;

		/**
		 * Remove a listener to dataset record change events triggered after a successful or failed record update.
		 */
		remove_OnDataSetRecordChange(callback: LegactDataSetOnRecordChangeHandler): void;

		/**
		 * Add a listener to dataset change events triggered after a refresh, filter or pagination action.
		 */
		addOnDataSetUpdated(callback: () => void): void;

		/**
		 * Remove a listener to dataset change events triggered after a refresh, filter or pagination action.
		 */
		removeOnDataSetUpdated(callback: () => void): void;

		/**
		 * Set the id of the selected record and show a command bar with commands specific to the record you have selected based on the flag
		 */
		setSelectedRecordId: (id: string, openCommandBar?: boolean) => void;

		/**
		 * Set the ids of the selected records
		 * This method is only supported in Web Client
		 */
		setSelectedRecords(id: string[]): void;

		/**
		 * Clears the selected record and closes the app bar
		 */
		clearSelectedRecord(): void;

		/**
		 * Retrieves the selected dataset record
		 */
		getSelectedRecord(): LegacyDataSetRecord;
	}

	/**
	 * CommandObject when
	 */
	interface ICommandObjectWrapper {
		/**
		 * CommandButton Id
		 */
		commandButtonId: string;

		/**
		 * Command Label
		 */
		label: string;

		/**
		 * if a command can execute or not
		 */
		canExecute: boolean;

		/**
		 * execute the command
		 */
		execute: () => any;
	}

	/**
	 * A representation of the results of a custom control dataset update.
	 */
	interface LegacyDataSetUpdateResult {
		/**
		 * Update result type
		 */
		resultType: LegacyDataSetUpdateResultType;

		/**
		 * The record ID that this object is referencing.
		 */
		recordId: string;

		isSuccessful: boolean;

		isRecordSavedSuccessfully: boolean;

		affectedColumns: string[];

		/**
		 * Error messages associated with the last update action, in a map of the form dataset
		 * field name -> error. Dataset level update errors are sent to the recordId field of the map.
		 */
		fieldErrorMessages: {
			[fieldName: string]: string;
		};

		/**
		 * The update record result
		 */
		record?: LegacyDataSetRecord;
	}

	const enum LegacyDataSetUpdateResultType {
		Unknown = 0,
		SetValue = 1,
		SetRequiredLevel = 2,
		SetDisabled = 3,
		IsValidChange = 4,
		RecordUpdate = 10,
	}

	type LegactDataSetOnRecordChangeHandler = (updateResult: LegacyDataSetUpdateResult) => void;

	/**
	 * Parameters passed to chart custom control
	 */
	interface IChartDataSetParameter extends IDataSetParameter {
		/**
		 * Get the visualization type for the chart
		 */
		getVisualizationType(): VisualizationType;

		/**
		 * Set the visualization type for the chart
		 */
		setVisualizationType(visualizationType: VisualizationType): void;

		/**
		 * Get the visualization id for the chart
		 */
		getVisualizationId(): string;

		/**
		 * Set the visualization id for the chart
		 */
		setVisualizationId(visualizationId: string): void;

		/**
		 * Get the view type for the chart
		 */
		getViewType(): ViewType;

		/**
		 * Set the view type for the chart
		 */
		setViewType(viewType: ViewType): void;

		/**
		 * Get the view id for the chart
		 */
		getViewId(): string;

		/**
		 * Set the view id for the chart
		 */
		setViewId(viewId: string): void;

		/**
		 * Get the chart configuration object that represents a specific chart
		 */
		getChartConfigObject(): ChartQueryModel;

		/**
		 * Get the webresource information for a webresource based chart
		 */
		getWebResourceState(): IWebResourceState;

		/**
		 * Get the filter expresion string used to identify the selected chart series
		 */
		getChartFilterExpression(): string;

		/**
		 * Set the filter expression for the chart
		 */
		setChartFilterExpression(chartFilterExpression: string): void;

		/**
		 * Get the chart selector option
		 */
		getChartSelectorOption(): IViewSelectorOption[];

		/**
		 * Get the view selector option
		 */
		getViewSelectorOption(): IViewSelectorOption[];

		/**
		 * Get if to update chart filter expression.
		 */
		getUpdateChartFilterExpression(): boolean;

		/**
		 * Set if the chart filter expression should be updated.
		 */
		setUpdateChartFilterExpression(updateChartFilterExpression: boolean): void;

		/**
		 * Get the attributes metadata associated with the chart
		 */
		getAttributesMetadata(): IAttributeDescriptorByName;

		/**
		 * Get the attributes metadata associated with the view.
		 */
		getViewAssociatedAttributesMetadata(): IViewAttributesMetadataByName;

		/**
		 * Sets refresh mode for the chart refresh.
		 * @param refreshMode
		 */
		setRefreshMode(refreshMode: ChartDataSetRefreshMode): void;

		/**
		 * Get drill down parameter for drill down operation.
		 */
		getChartDrillDownParameters(): ChartDrillDownParameter[];

		/**
		 * Set parameter required for executing drill down operation
		 * @param chartDrillDownParameters
		 */
		setChartDrillDownParameters(chartDrillDownParameters: ChartDrillDownParameter[]): void;

		/**
		 * Get the default visualization id for current entity
		 */
		getDefaultVisualizationId(): string;

		/**
		 * Get metadata required to export chart as xmls
		 */
		getChartExportMetadata(): ChartExportMetadata;
	}

	/**
	 * Represents various possible refresh modes for chart control
	 */
	const enum ChartDataSetRefreshMode {
		/**
		 * This is the refresh mode for chart when it refrshes chart but not a drill down
		 */
		ChartDefault = 1,

		/**
		 * Refresh mode for drill down scenario
		 */
		Drilldown = 2,

		/**
		 * Refresh mode to update filter expression only
		 */
		UpdateFilterExpression = 3,
	}

	/**
	 * Represents drill down parameter required to execute operation at UCI end
	 */
	interface ChartDrillDownParameter {
		/**
		 * Represents bread crumb text.
		 */
		selectedPointName: string;

		/**
		 * gets or sets the filter Expression
		 */
		filterExpression: string;

		/**
		 * get or set the groupBy
		 */
		groupByAttribute: ChartDrilldownGroupByAttribute;

		/**
		 * get or set the Chart type
		 */
		chartType: string;
	}

	/**
	 * Attributes by name associated with a view, used for chart drilldown
	 */
	interface IViewAttributesMetadataByName {
		// name in the IGridCellDescriptor
		// name equals alias.LogicalName if it is a linked entity attribute, otherwise LogicalName
		// Example: opportunitycustomeridcontactcontactid.emailaddress1
		[name: string]: ViewAttributesMetadata;
	}

	/**
	 *  Attributes associated with a view, used for chart drilldown
	 */
	interface ViewAttributesMetadata {
		// Name to be displayed in the drill down options list.
		// Example: Attribute diplay name || Arrtibute display name (Realted entity display name)
		drilldownDisplayName: string;
		// Related Entity Name, "" if this attribute belongs to primary entity.
		relatedEntityName: string;
	}

	/**
	 * Represents group by attribute properties on which the chart is being drilled down.
	 */
	interface ChartDrilldownGroupByAttribute {
		/**
		 * Name of the group by attribute
		 */
		name: string;

		/**
		 * Name of the related entity if this group by attribute belongs to a related entity
		 */
		relatedEntityName: string;

		/**
		 * Represents display name of the group by attribute.
		 */
		displayName: string;
	}

	/**
	 * The view selector option item used by chart selector and view selector in Chart Control
	 */
	interface IViewSelectorOption {
		categoryId: string;
		id: string;
		value: string;
		text: string;
	}

	/**
	 * Specialized dataset object that represents lookups for custom controls
	 */
	interface ILookupParameter extends IDataSetParameter, IPropertyParameter {
		/**
		 * True if encountered error while data retrieval
		 */
		error: boolean;

		/**
		 * The error message associated with the last encountered error, if applicable
		 */
		errorMessage: string;

		/**
		 * Target Entity Type name
		 */
		targetEntityType: string;

		/**
		 * Entity Metadatas for each targeted entity.
		 */
		entityMetadata?: { [etn: string]: any };

		/**
		 * Get recent items
		 */
		getRecentItems(): DataSetMruReference[];

		/**
		 * Get a Lookup configuration
		 */
		getLookupConfiguration(): CustomControlInterfaces.LookupConfiguration;

		/**
		 * Get all Lookup views
		 */
		getAllViews(entityTypeName: string): Promise<ILookupViewSelector[]>;

		/**
		 * Get all Lookup views
		 */
		getDataSetParameter(
			entityTypeName: string,
			viewId: string
		): CustomControlInterfaces.IMultiEntityTypeLookupParameter;

		/**
		 * Get default Lookup view
		 */
		getDefaultViewId(entityTypeName: string): string;

		/**
		 * Send Lookup Request (lookup service feature)
		 */
		sendLookupRequest?(
			viewId: string,
			queryString: string,
			nextPage?: boolean,
			customFilter?: string,
			relationshipName?: string
		): Promise<any>;

		/**
		 * Client side function to start custom filter
		 * */
		runPreSearch?(): void;
	}

	/**
	 * Parameters passed to Power BI control
	 */
	interface IPowerBIParameter {
		/**
		 * Whether the control should be visible in mobile
		 */
		EnableInMobile: boolean | string;

		/**
		 * The Power BI group workspace id
		 */
		PowerBIGroupId: string;

		/**
		 * The Power BI dashboard id
		 */
		PowerBIDashboardId: string;

		/**
		 * The Power BI report id
		 */
		PowerBIReportId: string;

		/**
		 * The Power BI report filter
		 */
		PowerBIFilter: string;

		/**
		 * The Power BI tile id
		 */
		TileId: string;

		/**
		 * The Power BI embed url
		 */
		TileUrl: string;

		/**
		 * The type of Power BI component (tile/dashboard/report)
		 */
		PowerBIType: number | string;

		/**
		 * Whether the Power BI feature is enabled by FCB and admin
		 */
		IsPowerBIEnabled: boolean;

		/**
		 * The First Party Integrations Site url
		 */
		FirstPartyIntegrationSiteUrl: string;

		/**
		 * The current Power BI signed in state
		 */
		PowerBISignedInState: string;

		/**
		 * The tenant to authenticate against
		 */
		Tenant?: string;

		/**
		 * Action that sets the Power BI signed in state
		 */
		setPowerBISignedInState(signedInState: string): void;

		/**
		 * Action that begins shim auth
		 */
		beginSecureSessionForResource(
			resource: string,
			cookieName: string,
			cookieDoamin: string,
			allowPrompt?: boolean
		): Promise<any>;
	}

	/**
	 * interface for section descriptor
	 */
	interface ISectionDescriptor {
		/**
		 * id of section
		 */
		Id: CCFGuid;

		/**
		 * label of section
		 */
		Label?: string;

		/**
		 * name of section
		 */
		Name: string;

		/**
		 * boolean flag to represent if label of section need to be displayed
		 */
		ShowLabel: boolean;

		/**
		 * boolean flag to represent if section is visible or not
		 */
		Visible: boolean;

		/**
		 * rows in section
		 */
		Rows?: IRowDescriptor[];

		/**
		 * semantic zoom id of section
		 */
		SemanticZoomDomId: string;

		/**
		 * number of columns for section
		 */
		Columns: number;

		/**
		 * boolean flag to represent if section is available on phone device
		 */
		AvailableForPhone?: boolean;

		/**
		 * height of section
		 */
		Height: string;

		/**
		 * labelId of section
		 */
		LabelId?: string;
	}

	/**
	 * Row descriptor
	 */
	export interface IRowDescriptor {
		/**
		 * boolean flag to represent if row is visible or not
		 */
		Visible: boolean;

		/**
		 * height of row
		 */
		Height: string;

		/**
		 * cells collection within row
		 */
		Cells: ICellDescriptor[];
	}

	/**
	 * Cell descriptor
	 */
	export interface ICellDescriptor {
		/**
		 * id of cell
		 */
		Id: string;

		/**
		 * control name hosted in cell
		 */
		ControlName?: string;
	}

	/**
	 * interface for a Tab
	 */
	interface ITab {
		/**
		 * id of tab
		 */
		id: string;

		/**
		 * title of tab
		 */
		title: string;

		/**
		 * type of tab
		 * tab types - staticTab, QuickViewFormTab, KnowledgeArticleTab
		 */
		type: string;
	}

	/**
	 * Interface for entity form options.
	 */
	export interface EntityFormOptions {
		/**
		 * entity name
		 */
		entityName: string;

		/**
		 * entity id
		 */
		entityId?: string;

		/**
		 * boolean flag to represent if need to use quick create form
		 */
		useQuickCreateForm?: boolean;

		/**
		 * form id
		 */
		formId?: string;
	}

	/**
	 * interface for entity's metadata.
	 */
	interface IEntityMetadata {
		DisplayName: string;
	}

	/**
	 * interface for a Quick View Form Tab
	 */
	interface IQuickViewFormTab extends ITab {
		/**
		 * entity form options for quick view form inside tab
		 */
		entityFormOptions: EntityFormOptions;

		/**
		 * controldescriptor for quick view form
		 */
		control: IControlDescriptor;

		/**
		 * Entity Metadata information
		 */
		entityMetadata: IEntityMetadata;
	}

	/**
	 * interface for a Knowledge Article Tab
	 */
	interface IKnowledgeArticleTab extends ITab {
		/**
		 * searchWidgetParameter for KM tab
		 */
		searchWidgetParameter: ISearchWidgetParameter;
	}

	/**
	 * interface for control descriptor
	 */
	interface IControlDescriptor {
		/**
		 * control id
		 */
		Id?: string;

		/**
		 * label of control
		 */
		Label: string;

		/**
		 * name of control
		 */
		Name: string;

		/**
		 * boolean flag to represent if label of control need to be displayed
		 */
		ShowLabel: boolean;

		/**
		 * boolean flag to represent if control is visible or not
		 */
		Visible: boolean;

		/**
		 * control class id
		 */
		ClassId?: CCFGuid;

		/**
		 * boolean flag to represent if control is disabled or not
		 */
		Disabled: boolean;

		/**
		 * data field name for control
		 */
		DataFieldName?: string;

		/**
		 * unique id for control
		 */
		UniqueId?: string;

		/**
		 * parameter for control
		 */
		Parameters?: System.Dictionary;

		/**
		 * layout mode for control layout
		 * Full = 0,
		 * Compact = 1,
		 * HeaderTile = 2,
		 * ProcessConfiguration = 3,
		 * FlyOutDialog = 4
		 */
		ControlLayout?: number;

		/**
		 * label id of control
		 */
		LabelId?: string;

		/**
		 * dom id of control
		 */
		DomId?: string;
	}

	/**
	 * Parameters passed to Reference Panel control
	 */
	interface IReferencePanelParameter extends ICustomControlParameter {
		/**
		 * form descriptor object
		 */
		formDescriptor: ICCFFormDescriptor;

		/**
		 * reference panel section name
		 */
		referencePanelSectionName: string;

		/**
		 * reference panel control height
		 */
		height: number;

		/**
		 * controls descriptors for static tabs
		 */
		controls: IControlDescriptor[];

		/**
		 * session tabs collection
		 */
		sessionTabs?: ITab[];

		/**
		 * id of active tab
		 */
		activeTabId: string;

		/**
		 * message id for warning message or error message to user
		 */
		messageId?: string;

		/**
		 * Get component name of control described by ReferencePanelParameter
		 * @param controlId Control Id
		 */
		getComponentNameByControlId(controlId: string): string;

		/**
		 * Create component props of control described on form represented by this ReferencePanelParameter
		 * @param controlId Id of control
		 */
		getComponentPropsByControlId(controlId: string): CustomControlInterfaces.IVirtualComponentProps;

		/**
		 * Action to add session tab to reference panel control
		 * @param sessionTab session tab to add to reference panel control
		 */
		addSessionTab(sessionTab: CustomControlInterfaces.ITab): void;

		/**
		 * Action to remove session tab from reference panel control state
		 * @param closedSessionTabIndex closed session tab index
		 */
		closeSessionTab(closedSessionTabIndex: number): void;

		/**
		 * Action to update session tab in the reference panel control
		 * @param sessionTab session tab to update in the reference panel control
		 */
		updateSessionTab(sessionTab: CustomControlInterfaces.ITab): void;

		/**
		 * Action to remove all session tabs from reference panel control state
		 */
		closeAllSessionTabs(): void;

		/**
		 * Action to dismiss any user message from reference panel control
		 */
		dismissMessage(): void;

		/**
		 * Action to mark passed session or static tab of reference panel control as active
		 * @param currentTab session or static tab to mark it as active tab
		 * @param isUnderOverflow flag to determine whether passed tab is under overflow or not
		 */
		markActiveTab(currentTab: CustomControlInterfaces.ITab, isUnderOverflow: boolean): void;

		/**
		 * Action to initialize reference panel control
		 * @param controls controls to initialize static tabs
		 */
		initializeReferencePanelControl(controls: IControlDescriptor[]): void;

		/**
		 * Action to clean reference panel control state
		 */
		cleanReferencePanelState(): void;
	}

	/**
	 * Parameters passed to Microsoft Flow
	 */
	interface IMicrosoftFlowParameter {
		/**
		 * Whether the Microsofto Flow feature is enabled
		 */
		IsMicrosoftFlowEnabled: boolean;

		/**
		 * The Microsoft Flow First Party Integrations Site url
		 */
		MicrosoftFlowFirstPartyIntegrationSiteUrl: string;

		/**
		 * Microsoft flow destination url
		 */
		MicrosoftFlowDestinationUrl: string;

		/**
		 * Microsoft flow selected environment Id
		 */
		MicrosoftFlowEnvironmentId: string;
	}

	/**
	 * State enum for state of timeline wall
	 */
	const enum TimelineWallActionStatus {
		None,
		Initializing,
		Completed,
	}

	/**
	 * Parameter passed to Timelinewall control
	 */
	interface ITimelineWallParameter {
		/**
		 * context type of page.
		 */
		contextType: string;

		/**
		 * control id.
		 */
		controlId: string;

		/**
		 * Entities Metadata
		 */
		entitiesMetadata: { [entity: string]: any };

		/**
		 * TimelineWallConfigurationData
		 */
		timelineWallConfiguration: any;

		/**
		 * Timelinewall data State
		 */
		timelineWallData?: any;

		/**
		 * Method to get the timelinewall data.
		 */
		getTimelineWallData: (externalParams: any) => any;

		/**
		 * TimelineWall getCommands data.
		 */
		getCommands(commandManagerId: string, recordIdentifiers: any[], specificRecords?: any[]): any[];

		/**
		 * Gets collection of entity attributes
		 */
		getEntityAttributes(): any;
	}

	interface ISearchParameter {
		/**
		 * Results of the search query
		 */
		results: ISearchResults;

		/**
		 * Facets data.
		 */
		facets: any;
	}

	interface ISearchResults {
		/**
		 * DataSet parameter initialization state
		 */
		loading: boolean;

		/**
		 * Determines whether Relevance Search is searching
		 */
		isRelevanceSearching: boolean;

		/**
		 * Record ID array
		 */
		recordIds: string[];

		/**
		 * Map of IDs to the full search record object
		 */
		records: {
			[id: string]: ISearchRecord;
		};

		/**
		 * Paging object for searchResults
		 */
		paging: SearchPaging;

		/**
		 * Action to perform relevance search request to the server
		 */
		relevanceSearch(): void;

		/**
		 * Flag to indicate search service error occurred
		 **/
		isRelevanceServiceError: boolean;
	}

	interface ISearchWidgetPrivilege {
		/**
		 * User can create Associations/Disassociations between Knowledge Article and Entity
		 */
		canAssociateAndDisassociate?: boolean;

		/**
		 * User can create Email using content/link from Knowledge Article
		 */
		canEmail?: boolean;

		/**
		 * User can copy link to Knowledge Article to the clipboard
		 */
		canCopyLink?: boolean;
	}

	interface IKbSearchResultAction {
		/**
		 * ArticleAction Form Descriptor Id
		 */
		Id: number;

		/**
		 * Id to track if the action is executed or not
		 */
		ActionExecutionId: string;

		/**
		 * ArticleAction Name
		 */
		Name: string;

		/**
		 * Name of resource to retrieve for Title
		 */
		TitleResourceName: string;

		/**
		 * Name of resource to retrieve for Tooltip
		 */
		TooltipResourceName: string;

		/**
		 * Function to retrieve localized TitleResourceName
		 */
		Title(): string;

		/**
		 * function to retrieve localized TooltipResourceName
		 */
		Tooltip(): string;
	}

	interface IKbSearchRecord {
		/**
		 * Knowledge Article Id
		 */
		knowledgeArticleId?: string;

		/**
		 * Article Public Number
		 */
		articlePublicNumber?: string;

		/**
		 * Article title
		 */
		title?: string;

		/**
		 * Article Content
		 */
		content?: string;

		/**
		 * Knowledge Article View Count
		 */
		knowledgeArticleViews?: number;

		/**
		 * Date created
		 */
		createdon?: Date;

		/**
		 * Last date modified
		 */
		modifiedOn?: Date;

		/**
		 * expiration date
		 */
		expirationdate?: Date;

		/**
		 * Article State Code
		 */
		stateCode?: number;

		/**
		 * Article Status Code
		 */
		statusCode?: number;

		/**
		 * Language Locale Id
		 */
		languageLocaleId?: string;

		/**
		 * Rating
		 */
		rating?: number;

		/**
		 * Article Actions
		 */
		articleActions?: number[];
	}

	interface IKbSearchEventParameter {
		/**
		 * Article Information
		 */
		articlePost: IArticlePost;
	}

	interface IRelevanceSearchRecord {
		/**
		 * The entity name of the relevance search record
		 */
		entityName?: string;
		/**
		 * A hashmap for all the highlight matches for the record
		 */
		highlights?: { [key: string]: Array<string> };
		/**
		 * The object ID of the record
		 */
		objectId?: string;
		/**
		 * The Object Type Code assocaited with the record
		 */
		objectTypeCode?: number;
		/**
		 * The relevance score associated with the record
		 */
		score?: number;
		/**
		 * Data associated with the relevance search record
		 */
		relevanceData: { [key: string]: any };
		/**
		 * Article Actions
		 */
		articleActions?: number[];
	}

	interface IRelevanceSearchFacet {
		/**
		 * The type of the facet
		 */
		facetType: string;
		/**
		 * The value of the facet
		 */
		facetValue: any;
		/**
		 * The count of the facet
		 */
		count: number;
	}

	interface IRelevanceSearchResultSet {
		/**
		 * The list of errors returned by the relevance search API
		 */
		errors: Array<string>;
		/**
		 * The list of warnings returned by the relevance search API
		 */
		warnings: Array<string>;
		/**
		 * The map of all requested facets
		 */
		facets: { [key: string]: Array<IRelevanceSearchFacet> };
		/**
		 * The list of all the results returned by the relevance search API
		 */
		value: Array<IRelevanceSearchRecord>;
	}

	interface IRelevanceSearchStatusAttribute {
		/**
		 * Identifies if a synced attribute is filterable
		 */
		IsFilterable: boolean;

		/**
		 * Identifies if a synced attribute is retrievable
		 */
		IsRetrievable: boolean;

		/**
		 * Identifies if a synced attribute is enabled for use
		 */
		IsInUse: boolean;
	}

	interface IRelevanceSearchStatusEntityMapping {
		/**
		 * The Object Type Code to identify the synced entity
		 */
		ObjectTypeCode: number;

		/**
		 * The GUID to identify the synced entity
		 */
		EntityId: string;

		/**
		 * A map of the synced fields and associated metadata
		 */
		SearchableIndexedFieldInfoMap: { [key: string]: IRelevanceSearchStatusAttribute };
	}

	interface IArticlePost {
		/**
		 * Article Id
		 */
		articleId?: string;

		/**
		 * Knowledge Article Id
		 */
		articleUId?: string;

		/**
		 * Article title
		 */
		question?: string;

		/**
		 * Article Content
		 */
		answer?: string;

		/**
		 * Knowledge Article View Count
		 */
		timesViewed?: number;

		/**
		 * Date created
		 */
		createdOn?: Date;

		/**
		 * Last date modified
		 */
		lastModifiedOn?: Date;

		/**
		 * Article State Code
		 */
		stateCode?: number;

		/**
		 * Published state of Article
		 */
		published?: boolean;

		/**
		 * Public URL of Article
		 */
		publicUrl?: string;
	}

	/**
	 * Search Widget Action payload
	 */
	interface ISearchWidgetActionPayload {
		/**
		 * Entity Reference
		 */
		entityReference?: any;

		/**
		 * Article Id
		 */
		articleId?: string;

		/**
		 * Primary Customer field selected in control descriptor
		 */
		selectPrimaryCustomer?: string;
		/**
		 * relationship name
		 */
		relationshipName?: string;

		/**
		 * Constructed email payload
		 */
		email?: System.Dictionary;

		/**
		 * constructed link for clipboard
		 */
		copyLink?: string;
	}

	/**
	 * Search Widget Action parameters
	 */
	interface ISearchWidgetAction {
		/**
		 * Action Performed
		 */
		action: IKbSearchResultAction;

		/**
		 * Action Payload required for operation
		 */
		payload: ISearchWidgetActionPayload;
	}

	/**
	 * Parameter info that is pass when calling ExecuteNotifyHandlersThatEventOccurred
	 */
	interface INotifyHandlersThatEventOccurredParameter {
		/**
		 * Name of event that occurred
		 */
		eventName: string;

		/**
		 * Name of control where event occurred
		 */
		fieldName: string;

		/**
		 * Id of page where event occurred
		 */
		pageId: string;

		/**
		 * Context Token of the form/control.
		 */
		contextToken: any;

		/**
		 * Selected Record for the event
		 */
		record?: IKbSearchRecord;

		/**
		 * Selected Relevance Search Record for the event
		 */
		relevanceSearchRecord?: IRelevanceSearchRecord;
	}

	/**
	 * Parameter info that is passed when calling executeKbSearch
	 */
	interface IKbSearchParameter {
		/**
		 * Search text to use in query
		 */
		searchText: string;

		/**
		 * State Code
		 */
		stateCode: string;

		/**
		 * Language Locale Id
		 */
		languageLocaleId: string;

		/**
		 * Sort option
		 */
		sortBy: string;

		/**
		 * Sort order option
		 */
		isDescending: boolean;

		/**
		 * Page number of results to load
		 */
		currentPageNumber: number;

		/**
		 * How many results to retrieve
		 */
		numberOfResults: number;

		/**
		 * Parameter for notifying OnPostSearch event
		 */
		notifyHandlersThatEventOccurredParameter: INotifyHandlersThatEventOccurredParameter;
	}

	interface IKbFullTextSearchParameter extends IKbSearchParameter {
		/**
		 * Use inflection
		 */
		useInflection: boolean;
		/**
		 * Remove duplicates
		 */
		removeDuplicates: boolean;
		/**
		 * Rating field name
		 */
		showRatingUsing: string;
	}

	interface IKbRelevanceSearchParameter extends IKbSearchParameter {
		/**
		 * relevance search mode: Advanced or simple
		 */
		searchMode: RelevanceSearchMode;
		/**
		 * kbArticleID: array of ids of kb articles on which we need to perform the search
		 */
		kbArticleIDList?: Array<string>;
		/**
		 * A list of additional filters on the knowledge article entity
		 */
		additionalKnowledgeArticleFilters: { [key: string]: string };
	}

	interface IFieldMapping {
		/**
		 * The knowledge article attribute participating in the mapping
		 */
		kmAttr: string;

		/**
		 * The source entity attribute participating in the mapping
		 */
		srcAttr: string;

		/**
		 * Flag to identify whether the filter is editable within the control runtime
		 */
		shouldShowFilter: boolean;
	}

	/**
	 * Descriptors for the search widget control
	 */
	interface ISearchWidgetDescriptor {
		/**
		 * Number of Results to render with one search
		 */
		numberOfResults?: number;

		/**
		 * Article Status filter
		 */
		articleStatusFilter?: string;

		/**
		 * Show article status filter
		 */
		showArticleStatusFilter?: boolean;

		/**
		 * Show language filter
		 */
		showLanguageFilter?: boolean;

		/**
		 * language filter
		 */
		languageFilter?: string;

		/**
		 * Is Auto Suggestions enabled
		 */
		isAutoSuggestionsEnabled: boolean;

		/**
		 * Auto Suggestions Source
		 */
		autoSuggestionSource: string;

		/**
		 * Field name to search KB on Auto Suggestions enabled
		 */
		autoSuggestionsFieldToSearch: string;

		/**
		 * Flag indicating if rating is enabled
		 */
		enableRating: string;

		/**
		 * Field which is used for rating
		 */
		showRatingUsing: string;

		/**
		 * Default language
		 */
		selectDefaultLanguage: string;

		/**
		 * Primary customer field used when constructing emails "TO" field
		 */
		selectPrimaryCustomer: string;

		/**
		 * List of mapped field metadata
		 */
		mappedFields?: IFieldMapping[];

		/**
		 * Flag to check whether MDF is enabled
		 */
		enableMDF?: boolean;

		/**
		 * Flag to check whether users have the ability to turn off MDF on runtime
		 */
		allowDisablingMDFOnUI?: boolean;
	}

	/**
	 * Interface for url query param for search widget
	 */
	interface ISearchWidgetUrlQueryParams {
		/**
		 * Query String to be passed to control
		 */
		queryString?: string;

		/**
		 * An integer value to indicate the sorting options for the knowledge base articles in the search result
		 */
		sort?: number;

		/**
		 * A boolean value indicating whether KM Search control supports result selection or not
		 */
		enableSelection?: boolean;

		/**
		 * A boolean value indicating whether to show actions on search results or not
		 */
		enableContextualActions?: boolean;
	}

	/**
	 * Interface for filter query param for search widget
	 */
	export interface IFilterQueryParams {
		/**
		 * command for which filter to be performed
		 */
		command: number;

		/**
		 * Value of the filter needs to be set
		 */
		value: number;
	}

	/**
	 * Data store that is passed to KbSearchControl providing all necessary data, metadata, and actions
	 */
	interface ISearchWidgetParameter extends ICustomControlParameter {
		/**
		 * Page ID
		 */
		pageId: string;

		/**
		 * Control ID
		 */
		controlId: string;

		contextToken: any;

		/**
		 * Show control label
		 */
		showLabel?: boolean;

		/**
		 * Defines org is onpremise or online
		 */
		isOnPremises: boolean;

		/**
		 * Control Label
		 */
		label?: string;

		/**
		 * Error occurred
		 */
		error: boolean;

		/**
		 * Error message
		 */
		errorMessage: string;

		/**
		 * Detailed message for the error
		 */
		errorDetails: string;

		/**
		 * Results loading
		 */
		loading: boolean;

		/**
		 * search widget initialized or not
		 */
		isInitializing: boolean;

		/**
		 * List of Knowledge Articles GUIDs
		 */
		recordIds: string[];

		/**
		 * List of Knowledge Articles ordered appropriately
		 */
		sortedRecordIds: string[];

		/**
		 * List of Knowledge Article records
		 */
		records: IKbSearchRecord[];

		/**
		 * External search enabled or not
		 */
		isExternalSearchIndexEnabled: boolean;

		/**
		 * Relevance Search Entity Sync Status
		 */
		relevanceSearchStatus?: Array<CustomControlInterfaces.IRelevanceSearchStatusEntityMapping>;

		/**
		 * List of Relevance Search records
		 */
		relevanceSearchRecords: IRelevanceSearchResultSet;

		/**
		 * List of parent kb records fot matched annotations
		 */
		matchedkbSearchRecords: IRelevanceSearchResultSet;

		/**
		 * Key phrases from TextAnalytics service
		 */
		keyPhrasesString: string;

		/**
		 * Total Record Count from Odata FTS
		 */
		totalCountString: string;

		/**
		 * Entity Display Name
		 */
		entityDisplayName?: string;

		/**
		 * Is KbSearch Control disabled
		 */
		isControlDisabled?: boolean;

		/**
		 * Url Query Params to be passed to control
		 */
		urlQueryParams?: ISearchWidgetUrlQueryParams;

		/**
		 * Filter params to be used in client api
		 */
		filterQueryParams?: IFilterQueryParams;

		/**
		 * Is entity Knowledge Management enabled
		 */
		isKnowledgeManagementEnabled: boolean;

		/**
		 * Is Text Analytics disabled
		 */
		isTextAnalyticsDisabled: boolean;

		/**
		 * Entity Reference for entity where control is placed
		 */
		entityReference: any;

		/**
		 * List Of Active Languages
		 */
		activeLanguages: ISearchWidgetLanguage[];

		/**
		 * List of associated articles
		 */
		associatedArticles: IAssociatedArticle[];

		/**
		 * List of configured KbSearchResultActions
		 */
		kbSearchResultActions: IKbSearchResultAction[];

		/**
		 * Response of action Search Result Action performed
		 */
		searchWidgetActionResult: ISearchWidgetAction;

		/**
		 * Hides the Search On Record Load
		 */
		hideSearchOnRecordLoad: boolean;

		/**
		 * Descriptors representing the control
		 */
		descriptors: ISearchWidgetDescriptor;

		/**
		 * A boolean value to indicate whether to block displaying the content inline when a search result is clicked
		 */
		blockClick?: boolean;

		/**
		 * Action to execute search for Knowledge Articles
		 */
		executeKbSearch(contextToken: any, pageId: string, kbSearchParameter: IKbSearchParameter): void;

		/**
		 * Action to execute relevance search
		 */
		executeRelevanceSearch(contextToken: any, pageId: string, kbSearchParameter: IKbSearchParameter): void;

		/**
		 *Action to get knowledge articles from id
		 */
		executeGetKbArticlesFromIDsSearch(contextToken: any, kbSearchParameter: IKbSearchParameter): void;

		/**
		 * Action to execute retrieval of key phrases for specified Knowledge Article
		 */
		executeRetrieveKeyPhrasesForKnowledgeSearch(contextToken: any, id: string, entityType: string): void;

		/**
		 * Action to execute retrieval of auto Suggestions field from parent record
		 */
		executeRetrieveFieldFromParentRecord(contextToken: any, pageId: string, autoSuggestiondFieldToSearch: string): void;

		/**
		 * Action to execute on initialization of the Search Widget control
		 */
		executeSearchWidgetInitialization(contextToken: any, pageId: string, controlId: string): void;

		/**
		 * Action to execute different actions
		 */
		executeSearchWidgetAction(contextToken: any, pageId: string, searchWidgetAction: ISearchWidgetAction): void;

		/**
		 * Action to execute IncrementViewCount for specified Knowledge Article
		 */
		executeIncrementKnowledgeArticleViewCount(
			contextToken: any,
			entityReference: any,
			viewDate: any,
			location: number,
			count: number
		): void;

		/**
		 * Action to notify registered control event handlers that a specified event occurred
		 */
		executeNotifyHandlersThatEventOccurred(
			notifyHandlersThatEventOccurredParameter: INotifyHandlersThatEventOccurredParameter
		): void;

		/**
		 * Action to update the current searchtext into the state
		 */
		executeUpdateCurrentSearchText(contextToken: any, currentSearchText: string): void;
	}

	interface IAssociatedArticle {
		/**
		 * article id
		 */
		knowledgeArticleId: string;

		/**
		 * Article public name
		 */
		articlePublicNumber: string;
	}

	interface ISearchWidgetLanguage {
		/**
		 * language name
		 */
		name: string;

		/**
		 * language id
		 */
		localeId: string;

		/**
		 * language locale Id
		 */
		languageLocaleId: string;
	}

	interface ISearchRecord {
		/**
		 * The column values to be displayed in the relevance search results
		 */
		columnValues: string[];

		/**
		 * Entity Logical name for the record
		 */
		entityLogicalName: string;

		/**
		 * Entity Display name for the record
		 */
		entityDisplayName: string;

		/**
		 * Attachments for the record
		 */
		attachments: any;

		/**
		 * Entity Image URL for the record
		 */
		entityImageUrl: string;

		/**
		 * Gets the entity reference for the current record to open the record.
		 */
		getNamedReference(): CustomControlEntityReference;
	}

	interface SearchPaging {
		/**
		 * Load next Page
		 */
		loadNextPage(): void;
	}

	/**
	 * Parameters to be passed to External search
	 */
	interface IRelevanceSearchParameters {
		/**
		 * Search text to search for.
		 */
		searchText: string;

		/**
		 * Entities to search for this searchText
		 */
		searchEntities: string[];

		/**
		 * Activities and Notes to be included in search results.
		 */
		searchActivityNotes: boolean;

		/**
		 * Page size for the results.
		 */
		pageSize: number;

		/**
		 * Page number for the current search request.
		 */
		pageNumber: number;

		/**
		 * Boolean to indicate if this search request needs to include activities.
		 */
		hasActivities: boolean;

		/**
		 * Boolean to indicate if this search request needs to include notes.
		 */
		hasNotes: boolean;

		/**
		 * Filters to be applied to the search request.
		 */
		filters: { [fieldName: string]: string[] };
	}

	/**
	 * Interface for multi entity type lookup parameter
	 */
	interface IMultiEntityTypeLookupParameter extends IPropertyParameter {
		/**
		 * Entity Metadatas for each targeted entity.
		 */
		entityMetadata?: { [etn: string]: any };

		/**
		 * Gets data set parameter for given entity name
		 * @param entityTypeName entity name
		 * @returns IDataSetParameter
		 */
		getDataSetParameter(entityTypeName: string, viewId?: string): IDataSetParameter;

		/**
		 * Gets data set parameters dictionary for all available EntityTypes
		 */
		getTargetEntityNames(): string[];

		/**
		 * Refreshes the data set base on filters and sorting and Target Entity
		 */
		refresh(): void;

		/**
		 * Get recent items
		 */
		getRecentItems(MruOptions?: IMruOptions): DataSetMruReference[];

		/**
		 * Get a Lookup configuration
		 */
		getLookupConfiguration(): CustomControlInterfaces.LookupConfiguration;

		/**
		 * Get all Lookup views
		 */
		getAllViews(entityTypeName: string): Promise<ILookupViewSelector[]>;

		/**
		 * Get default Lookup viewId
		 */
		getDefaultViewId(entityTypeName: string): string;

		/**
		 * send LookupRequest (lookup service feature)
		 * */
		sendLookupRequest?: (
			etnViewIdMap: { [etn: string]: string },
			queryString: string,
			nextPage?: boolean,
			customFilter?: string,
			relationshipName?: string
		) => Promise<any>;

		/**
		 * applying curernt custom filter set by clientApi
		 * */
		runPreSearch?: () => void;
	}

	/**
	 * Timer custom control parameter
	 */
	interface ITimerParameter {
		CancelConditionName: string;
		CancelConditionValue: string;
		FailureTimeField: string;
		FailureConditionName: string;
		FailureConditionValue: string;
		PauseConditionName: string;
		PauseConditionValue: string;
		SuccessConditionName: string;
		SuccessConditionValue: string;
		WarningConditionName: string;
		WarningConditionValue: string;
	}

	/**
	 * Timer parameter atrribute values
	 */
	interface ITimerParameterAttributeValues {
		CancelConditionAttributeValue: string;
		FailureConditionAttributeValue: string;
		FailureTimeFieldAttributeValue: string;
		PauseConditionAttributeValue: string;
		SuccessConditionAttributeValue: string;
		WarningConditionAttributeValue: string;
	}

	/**
	 * Timer custom control telemetry parameter
	 */
	interface ITimerTelemetryParameter {
		EntityName: string;
		EntityTypeCode: string;
		FormId: string;
		FormType: string;
		IsActivity: string;
		IsCustomEntity: string;
		IsSLAEnabled: string;
		IsTrialOrganization: string;
		OrgId: string;
		UserId: string;
	}

	interface ILookupPartyListParameter extends IMultiEntityTypeLookupParameter {}

	interface ILookupOwnerParameter extends IMultiEntityTypeLookupParameter {}

	interface ILookupCustomerParameter extends IMultiEntityTypeLookupParameter {}

	interface ILookupRegardingParameter extends IMultiEntityTypeLookupParameter {}

	interface CCFGuid {
		guid: string;
	}

	interface IHeaderFooterFields {
		AvailableForPhone?: boolean;
		Controls?: any[];
	}

	interface ICCFFormDescriptor {
		initialized: any;
		Id?: CCFGuid;
		Sections?: any;
		Tabs?: any;
		Controls?: any;
		// TODO$645903: this is to support both versions of typing (i.e. before and after server side changes), we
		// should only keep the IHeaderFooterFields one once server side change is in. The plan is to
		// check in this first to unblock server side check in while not blocking existing behaviors
		Header?: IHeaderFooterFields | any[];
		Footer?: IHeaderFooterFields | any[];
		HiddenFields?: any[];
		ControlConfigurations?: ICustomControlConfigurationByUniqueId;
		Name?: string;
	}

	const enum FormParameterStatus {
		NotLoaded = 0,
		PartialLoad = 1,
		FullyLoaded = 2,
		InError = 3,
	}

	const enum RelevanceSearchMode {
		Advance = 1,
		Simple = 2,
	}

	/**
	 * Form custom control parameter
	 */
	interface IFormParameter extends ICustomControlParameter {
		/**
		 * Status of this control
		 */
		status: FormParameterStatus;

		/**
		 * Form descriptor object
		 */
		formDescriptor?: ICCFFormDescriptor;

		/**
		 * Name of entity edited by form
		 */
		entityName?: string;

		/**
		 * RecordId of entity edited by form
		 */
		recordId?: string;

		/**
		 * Label for associated entity
		 */
		associatedEntityLabel?: string;

		/**
		 * Name of associated entity record
		 */
		associatedEntityRecordName?: string;

		/**
		 * Whether the associated entity record has changed
		 */
		associatedEntityRecordHasChanged?: boolean;

		/**
		 * URL for the entity image
		 */
		entityImageUrl?: string;

		/**
		 * Get component name of control described by FormParameter
		 * @param controlId Control Id
		 */
		getComponentNameByControlId(controlId: string): string;

		/**
		 * Create component props of control described on form represented by this FormParameter
		 * @param controlId Id of control
		 */
		getComponentPropsByControlId(controlId: string): any;

		/**
		 * Retrieve the record data for an record and formId
		 * @param entityReference record
		 * @param formId form id
		 */
		retrieveRecordDataForForm(entityReference: any, formId: string): any;
	}

	/**
	 * Interface to represent a query in the CCF Framework
	 * NOTE: This is present to prevent CCF taking a dependency on the entirety of IQuery's interfaces
	 * so it is a dummy interface. Should CCF take a greater dependency on this object, then we can expand
	 * those requirements here
	 */
	interface ICCFQuery {}

	/*
	 * Interface to specify the options to pass in the openDatasetItem function
	 */
	interface IOpenDataSetItemOptions {
		/*
		 * CommandButtonId:
		 * Id of command bar button that needs to be invoked when a user activates the grid record.
		 */
		CommandButtonId: string;
	}

	interface ICustomControlActions {
		retrieveAction?: (query: ICCFQuery) => any;
		retrieveForm?: (entityReference: any, formId: string) => Promise<any>;
		retrieveRecordForForm?: (
			entityReference: any,
			formId: string,
			processControl?: any,
			additionalColumns?: string[]
		) => Promise<any>;
		retrieveEntityData?: (etn: string) => Promise<any>;
		retrieveChartDrilldownAttributes?: (etn: string) => Promise<IAttributeDescriptorByName>;
		retrieveViewAction?: (entityTypeName: string, viewQueryType: any, viewType: any, viewId?: any) => any; //TODO: use actual types
		retrieveViewSelectorAction?: (entityTypeName: string, viewQueryType: any) => Promise<any>;
		retrieveRecordDataForForm?: (entityReference: any, formId: string) => any;
		saveEmbeddedEntity?: (
			pageId: string,
			entityTypeName: string,
			recordId: string,
			closestParentWithContext: string,
			columnSet: string[]
		) => Promise<boolean>;
		updateFieldValue?: (
			pageId: string,
			controlNameValuePairs: any,
			suppressOnChange?: boolean,
			entityTypeName?: string,
			recordId?: string,
			closestParentWithContext?: string
		) => void;
		refreshDataSetParameter?: (dataSetObjectWrapper: any, contextToken?: any) => any;
		retrieveDataSetLookupCellParameter?: (
			dataSetParameter: ILegacyDataSetParameter,
			dataSetLookupCellWrapper: any,
			contextToken?: any
		) => any;
		retrieveLookupMetadataAction?: (lookupObjectWrapper: any) => any;
		executeAddOnLoad?: (dataSetObjectWrapper: any, contextToken: any) => any;
		setPowerBISignedInState?: (pageId: string, powerBISignedInState: string) => void;
		beginSecureSessionForResource?: (
			resource: string,
			cookieName: string,
			cookieDoamin: string,
			allowPrompt?: boolean
		) => Promise<any>;
		executeNotifyHandlersThatEventOccurred?: (
			notifyHandlersThatEventOccurredParameter: INotifyHandlersThatEventOccurredParameter
		) => any;
		addSessionTab?: (sessionTab: CustomControlInterfaces.ITab) => any;
		closeSessionTab?: (closedSessionTabIndex: number) => any;
		updateSessionTab?: (sessionTab: CustomControlInterfaces.ITab) => any;
		closeAllSessionTabs?: () => any;
		dismissMessage?: () => any;
		markActiveTab?: (currentTab: CustomControlInterfaces.ITab, isUnderOverflow: boolean) => any;
		initializeReferencePanelControl?: (controls: IControlDescriptor[]) => any;
		cleanReferencePanelState?: () => any;
		openDatasetItem?: (entityReference: any, OpenDataSetItemOptions?: IOpenDataSetItemOptions) => void;
		forceUpdate?: () => void;
		updateControlMemoizedDataSet?: (
			legacyDataSetWrapper: any,
			actions: ICustomControlActions,
			recordId: string
		) => void;
		loadWebResource?: (resourceName: string) => Promise<any>;
		updateChartFilterExpression?: (pageId: string, contextToken: any, highChartFilterExpression: string) => any;
		sendLookupRequest?: (
			lookupRequest: any,
			contextToken: any,
			pageId?: string,
			etn?: string,
			controlId?: string,
			attributeName?: string,
			dependentAttributeName?: string
		) => Promise<any>;
		runPreSearch?: (contextToken: any, controlId: string, pageId?: string) => void;
		runOnReadyStateComplete?: (contextToken: any, pageId: string, controlId: string) => void;
	}

	interface IDataSetDataProvider {
		/**
		 * Returns true if data is being loaded, false otherwise
		 */
		isLoading(): boolean;

		/**
		 * Returns true if error occurred during last data retrieval
		 */
		isError(): boolean;

		/**
		 * Returns message of error occurred during last data retrieval if any
		 */
		getErrorMessage(): string;

		/**
		 * Set latest DataSet sorting
		 * @param sorting Latest sorting information
		 */
		setSorting(sorting: CustomControlInterfaces.DataSetColumnSortStatus[]): void;

		/**
		 * Set latest DataSet filtering
		 * @param filtering Latest filtering information
		 */
		setFiltering(filtering: CustomControlInterfaces.FilterExpression): void;

		/**
		 * Refresh records list. Gets called during {@see IDataSetParameter#refresh}.
		 * @return List of retrieved records ({@see IDataSetDataProvider#getRecords})
		 */
		refresh(): Promise<DataSetRecord[]>;

		/**
		 * Returns records list updated by refresh or null if data not ready or not available.
		 */
		getRecords(): DataSetRecord[];

		/**
		 * Returns paging information.
		 */
		getPaging(): CustomControlInterfaces.IDataSetPagingDataProvider;

		/**
		 * Returns columns information.
		 */
		getColumns(): CustomControlInterfaces.DataSetColumn[];

		/**
		 * Save record to database.
		 * @param TRecord Record to save.
		 */
		save(record: DataSetRecord): void;
	}

	/**
	 * Wrapper object for the data layer of a form
	 */
	interface ICustomControlFormWrapper extends IInitializableWrapper {
		getLatestData(): IFormParameter;
		linkToParameter(parameter: IFormParameter, actions: ICustomControlActions): void;
	}

	const enum DataSetNextAction {
		None = 0,
		Refresh = 1,
		LoadNextPage = 2,
		LoadPreviousPage = 3,
		LoadSpecificPage = 4,
		Reset = 5,
		LoadExactPage = 6,
	}

	/**
	 * Base interface for Wrapper object for the data layer of a CCF defined data set
	 */
	interface IDataSetWrapper<TDataSetParameter extends ICustomControlParameter> extends IInitializableWrapper {
		getLatestData(): TDataSetParameter;
		linkToParameter(parameter: TDataSetParameter, actions: ICustomControlActions): void;
		applyDataSetInputs(parameter: TDataSetParameter): DataSetNextAction;
		getEntityTypeName(): string;
		getUpdateFlag(): boolean;
	}

	interface IInitializableWrapper {
		ensureDataInitialization(actions: ICustomControlActions): void;
		getParameterManifestType(): string;
	}

	/**
	 * Wrapper object for the data layer of a CCF defined chart
	 */
	interface ICustomControlChartWrapper extends ICustomControlDataSetWrapper {}

	/**
	 * Wrapper object for the data layer of a CCF defined data set
	 */
	interface ICustomControlDataSetWrapper extends IDataSetWrapper<IDataSetParameter> {}

	/**
	 * Wrapper object for the legacy data layer of a CCF defined data set
	 */
	interface ILegacyCustomControlDataSetWrapper extends IDataSetWrapper<ILegacyDataSetParameter> {}

	/**
	 * Wrapper object for the data layer of a CCF defined data set
	 */
	interface ICustomControlSearchWidgetWrapper {
		getLatestData(): ISearchWidgetParameter;
		linkToParameter(parameter: ISearchWidgetParameter, actions: ICustomControlActions): void;
	}

	/**
	 * interface for wrappers of objects that extend field data parameters
	 */
	interface ICustomControlExtendedBasicFieldWrapper<TParameterType> {
		extendByFieldData(paramteter: TParameterType, fieldData?: IPropertyParameter): TParameterType;
		getLatestFieldData(): IPropertyParameter;
	}

	/**
	 * Wrapper object for the data layer of a CCF defined lookup property
	 */
	interface ICustomControlLookupWrapper
		extends ICustomControlDataSetWrapper,
			ICustomControlExtendedBasicFieldWrapper<ILookupParameter> {
		linkToParameter(parameter: ILookupParameter, actions: ICustomControlActions): void;
		ensureLookupMetaDataInitialization?(actions: ICustomControlActions): void;
	}

	/**
	 * Wrapper object for the data layer of a CCF defined lookup property
	 */
	interface ICustomControlMultiEntityTypeLookupWrapper
		extends ICustomControlExtendedBasicFieldWrapper<IMultiEntityTypeLookupParameter> {
		getLatestData(): IMultiEntityTypeLookupParameter;
		getTargetEntityNames(): string[];
		linkToParameter(parameter: IMultiEntityTypeLookupParameter, actions: ICustomControlActions): void;
	}

	/**
	 * Wrapper object for the data layer of a CCF defined timer
	 */
	interface ICustomControlTimerWrapper {
		getLatestData(): ITimerPropertyParameter;
		linkToParameter(parameter: ITimerPropertyParameter, actions: ICustomControlActions): void;
	}

	/**
	 * Wrapper object for the data layer of a CCF defined timelineWall
	 */
	interface ICustomControlTimelineWallWrapper {
		getLatestData(): ITimelineWallParameter;
		linkToParameter(parameter: ITimelineWallParameter, actions: ICustomControlActions): void;
		getParameterManifestType(): string;
	}

	/**
	 * Wrapper object for the data layer of a search
	 */
	interface ICustomControlSearchWrapper {
		getLatestData(): ISearchParameter;
		linkToParameter(parameter: ISearchParameter, actions: ICustomControlActions): void;
	}

	/**
	 * Wrapper object for the data layer of a Power BI control
	 */
	interface ICustomControlPowerBIWrapper {
		getLatestData(): IPowerBIParameter;
		linkToParameter(parameter: IPowerBIParameter, actions: ICustomControlActions): void;
	}

	interface ICustomControlReferencePanelWrapper {
		linkToParameter(parameter: IReferencePanelParameter, actions: ICustomControlActions): void;
	}

	/**
	 * Enumeration of visualization type.
	 */
	const enum VisualizationType {
		/**
		 * Saved Visualization -- System Chart
		 */
		savedvisualization = 0,
		/**
		 * User Visualization -- User Chart
		 */
		uservisualization = 1,
	}

	/**
	 * Enumeration of view type.
	 */
	const enum ViewType {
		/**
		 * Saved View -- System View
		 */
		savedview = 1039,
		/**
		 * User View
		 */
		userview = 4230,
	}

	/**
	 * Chart Query Model for handling CRM Charts Data Processing
	 */
	interface ChartQueryModel {
		Title: ChartTitle;
		Legend: Legend;
		XAxes: XAxis[];
		YAxes: YAxis[];
		SeriesList: Series[];
		SubTitle: string;
		Colors: System.ArrayList;
		DisplayMode: ChartDisplayMode;
		ErrorInformation: ChartErrorInformation;
		EnableDrilldown: boolean;
	}

	/**
	 * Chart Export model. Used by Chart Control to export as XML
	 */
	interface ChartExportMetadata {
		visualizationid: string;
		name: string;
		description: string;
		primaryentitytypecode: string;
		datadescription: string;
		presentationdescription: string;
		isdefault: boolean;
		solutionId: string;
	}

	/**
	 * The Chart Title DataContract class.
	 */
	interface ChartTitle {
		Text: string;
		HorizontalAlignment: string;
		VerticalAlignment: string;
	}

	/**
	 * The Chart Legend DataContract class.
	 */
	interface Legend {
		Enabled: boolean;
		Floating: boolean;
		VerticalAlignment: string;
		HorizontalAlignment: string;
	}

	/**
	 * The Chart X-Axis DataContract class.
	 */
	interface XAxis {
		Values: string[];
		Title: string;
	}

	/**
	 * The Chart Y-Axis DataContract class.
	 */
	interface YAxis {
		Title: string;
	}

	/**
	 * The Chart Series DataContract class.
	 */
	interface Series {
		DataPoints: DataPoint[];
		ChartType: string;
		YAxisNumber: number;
		XAxisNumber: number;
		Title: string;
		Color: string;
		BorderColor: string;
		BorderWidth: number;
		CustomProperties: string;
	}

	/**
	 * The DataContract class for a point on a chart series.
	 */
	interface DataPoint {
		Value: number;
		FormattedValue: any;
		Aggregators: DataPointAggregatorBase[];
	}

	/**
	 * The Aggregator class used for generating filter expression basing on aggregated FieldName and Value.
	 */
	interface DataPointAggregatorBase {
		FieldName: string;
	}

	/**
	 * Enumeration of display modes used in the Chart control.
	 */
	const enum ChartDisplayMode {
		/**
		 * Standard layout type
		 */
		Normal = 0,

		/**
		 * Error layout type
		 */
		Error = 1,
	}

	/**
	 * Contains error information to be shown on charts
	 */
	interface ChartErrorInformation {
		/**
		 * Gets or sets the type of the error.
		 */
		get_ErrorType(): string;
		set_ErrorType(value: string): void;

		/**
		 * Gets or sets the error description.
		 */
		get_ErrorDescription(): string;
		set_ErrorDescription(value: string): void;
	}

	/**
	 * Objects to parent whenever DataSet data get updated
	 */
	interface IOnDataSetUpdateObjectToParents {
		/**
		 * Existed Filtering String
		 */
		existedFilteringString?: string;

		/**
		 * Using fetchXml
		 */
		fetchXmlInUse?: string;

		/**
		 * The paging data being used in the DataSet
		 */
		existedPagingString?: string;

		/**
		 * A boolean indicator to tell the control whether this parameter has either encountered an error
		 */
		error?: boolean;

		/**
		 * The error message associated with the last encountered error, if applicable
		 */
		errorMessage?: string;

		/**
		 * Query key
		 */
		newQueryKey?: string;

		/**
		 * The existing valid sorting array
		 */
		existedValidSortingArrayString?: string;
	}

	/**
	 * Custom Control Resource Types
	 */
	const enum CustomControlResourceType {
		JSResource = 0,
		CssResource = 1,
		ImageResource = 2,
		HtmlResource = 3,
		CodeResource = 4,
		ResxResource = 5,
		Unknown = 6,
	}

	/**
	 * Enum for parent level
	 * @readonly
	 */
	const enum Level {
		Top = 0,
		Nested = 1,
		LifeCycle = 2,
	}

	/**
	 * Describes the level of the log message
	 */
	const enum TracerLogLevel {
		Off = 0,
		Error = 1,
		Warning = 2,
		Info = 3,
		Verbose = 4,
	}

	/**
	 * Enum for known XRM system event listener types
	 */
	const enum KnownSystemEventListeners {
		KeyDown = 0,
	}

	/**
	 * Interface for attributes, attributeLogicalName:IAttributeDescriptor pair.
	 */
	interface IAttributeDescriptorByName {
		[attributeLogicalName: string]: IAttributeDescriptor;
	}

	/**
	 * Descriptor associated with an attribute.
	 */
	interface IAttributeDescriptor {
		/**
		 * Indicated the initialized status of this attribute
		 */
		Initialized: number;

		/**
		 * The Logical Name of this attribute
		 */
		LogicalName: string;

		/**
		 * The unique guid id of this attribute
		 */
		Id?: CCFGuid;

		/**
		 * The attribute type
		 */
		Type: string;

		/**
		 * The Entity Logical Name for the entity accociated with this attribute
		 */
		EntityLogicalName?: string;

		/**
		 * Indicates DisplayName of this attribute
		 */
		DisplayName?: string;

		/**
		 * True if the attribute's global filter is enabled
		 */
		IsGlobalFilterEnabled?: boolean;

		/**
		 * True if the attribute is secured
		 */
		IsSecured?: boolean;

		/**
		 * True if the attribute is valid for create
		 */
		IsValidForCreate?: boolean;

		/**
		 * True if the attribute is valid for read
		 */
		IsValidForRead?: boolean;

		/**
		 * True if the attribute is valid for update
		 */
		IsValidForUpdate?: boolean;

		/**
		 * The maximum allowed length of the string attribute
		 */
		MaxLength?: number;

		/**
		 * The MinValue of the attribute
		 */
		MinValue?: number;

		/**
		 * The MaxValue of the attribute
		 */
		MaxValue?: number;

		/**
		 * The Precision of the attribute
		 */
		Precision?: number;

		/**
		 * The format of the string attribute
		 */
		Format?: string;

		/**
		 * The defalut value of the attribute
		 */
		DefaultValue?: string | boolean | number;

		/**
		 * Flag to indicate if this attrubite is base currency
		 */
		IsBaseCurrency?: boolean;

		/**
		 * The target entities of the Lookup attribute type
		 */
		Targets?: string[];

		/**
		 * If the value exists, the attribute is a child attribute of the attribute specified in "attributeOf"
		 */
		AttributeOf?: string;

		/**
		 * Flag to indicate AttributeMetadata has changed or not
		 */
		HasChanged?: boolean;

		/**
		 * The option set id of this attribute
		 */
		OptionSetId?: string;

		/**
		 * The option set name of this attribute
		 */
		OptionSetName?: string;

		/**
		 * The option set type of this attribute
		 */
		OptionSetType?: number;

		/**
		 * The optionset object of this attribute
		 */
		OptionSet?: IOptionDescriptor[];

		/**
		 * Is the lookup partylist for look up attribute
		 */
		IsPartyListControl?: boolean;

		/**
		 * The lookup style value for look up attribute
		 */
		LookupStyle?: string;

		/**
		 * Permissible Lookup Type Ids
		 */
		LookupTypes?: number[];

		/**
		 * Indicates RollupAssociatedDateFieldName
		 */
		RollupAssociatedDateFieldName?: string;

		/**
		 * Indicates RollupAssociatedStateFieldName
		 */
		RollupAssociatedStateFieldName?: string;

		/**
		 * Indicates RollupInvalid
		 */
		RollupInvalid?: boolean;

		/**
		 * Indicates SourceTypeMask
		 */
		SourceTypeMask?: number;

		/**
		 * Indicates if this attribute is form parameter
		 */
		IsFormParameter?: boolean;

		/**
		 * True if sortable is enabled for this attribtue
		 */
		IsSortableEnabled?: boolean;
	}

	/**
	 * UI descriptor for an Option set or Two options.
	 */
	interface IOptionDescriptor {
		/**
		 * Indicates the color of the Picklist/OptionSet attribute
		 */
		Color?: string;

		/**
		 * Indicates the label of the Picklist/OptionSet attribute
		 */
		Label: string;

		/**
		 * Indicates the value of the Picklist/OptionSet attribute
		 */
		Value: number;

		/**
		 * Indicates the DefaultStatus of the Picklist/OptionSet attribute
		 */
		DefaultStatus?: number;

		/**
		 * Indicates the State of the Picklist/OptionSet attribute
		 */
		State?: number;

		/**
		 * Indicates the TransitionData of the Picklist/OptionSet attribute
		 */
		TransitionData?: number[];
	}

	/**
	 * Custom Filter Props.
	 */
	export interface ICustomFilter {
		/**
		 * Logical name of the entity
		 */
		EntityLogicalName?: string;

		/**
		 * FilterExpression for saved custom filter
		 */
		FilterExpression?: FilterExpression;
	}

	/**
	 * Saved Filter Props.
	 */
	export interface ISavedFilter {
		/**
		 * Id of Saved filter
		 */
		userqueryid: string;

		/**
		 * fetchxml associated with filter
		 */
		fetchxml: string;

		/**
		 * Name of saved filter
		 */
		name: string;
	}
}
