declare class CustomControlEntityReference {
    static EMPTY: CustomControlEntityReference;
    private _etn;
    private _id;
    private _name;
    private _Id;
    constructor(entityName: string, id?: string, name?: string);
    readonly entityName: string;
    readonly entityType: string;
    readonly logicalName: string;
    readonly LogicalName: string;
    readonly id: string;
    readonly Id: string | CrmFramework.Guid;
    readonly name: string;
    readonly Name: string;
    static toString(reference: CustomControlEntityReference): string;
    static equals(x: CustomControlEntityReference, y: CustomControlEntityReference): boolean;
}
export { CustomControlEntityReference };
