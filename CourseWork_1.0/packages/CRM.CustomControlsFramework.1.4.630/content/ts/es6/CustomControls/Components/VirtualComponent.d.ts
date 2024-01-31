declare class VirtualComponent implements CustomControlInterfaces.IVirtualComponent {
    private _type;
    private _componentId;
    private _properties;
    private _children;
    constructor(type: string, componentId: string, properties: CustomControlInterfaces.IVirtualComponentProps, children: CustomControlInterfaces.VirtualComponentChild | CustomControlInterfaces.VirtualComponentChild[]);
    getVirtualRepresentation(additionalProps: CustomControlInterfaces.IVirtualComponentProps): CustomControlInterfaces.IVirtualComponent;
    getType(): string;
    getComponentId(): string;
    getProperties(): CustomControlInterfaces.IVirtualComponentProps;
    getChildren(): CustomControlInterfaces.VirtualComponentChild | CustomControlInterfaces.VirtualComponentChild[];
    setProperties(props: CustomControlInterfaces.IVirtualComponentProps): void;
}
export { VirtualComponent };
