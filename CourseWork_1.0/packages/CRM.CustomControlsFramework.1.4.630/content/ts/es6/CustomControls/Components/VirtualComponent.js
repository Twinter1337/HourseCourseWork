import * as React from "react";
var VirtualComponent = (function () {
    function VirtualComponent(type, componentId, properties, children) {
        this._type = type;
        this._componentId = componentId;
        this._properties = Object.assign({}, properties);
        this._children = [];
        if (children != null) {
            if (typeof children === "string" ||
                typeof children === "number" ||
                children instanceof VirtualComponent ||
                React.isValidElement(children)) {
                this._children = children;
            }
            else if (children instanceof Array) {
                this._children = children.filter(function (x) {
                    return typeof x === "string" || typeof x === "number" || x instanceof VirtualComponent || React.isValidElement(x);
                }).slice();
            }
        }
    }
    VirtualComponent.prototype.getVirtualRepresentation = function (additionalProps) {
        return new VirtualComponent(this._type, this._componentId, Object.assign(this._properties, additionalProps), null);
    };
    VirtualComponent.prototype.getType = function () {
        return this._type;
    };
    VirtualComponent.prototype.getComponentId = function () {
        return this._componentId;
    };
    VirtualComponent.prototype.getProperties = function () {
        return this._properties;
    };
    VirtualComponent.prototype.getChildren = function () {
        if (this._children instanceof Array)
            return this._children.slice();
        else
            return this._children;
    };
    VirtualComponent.prototype.setProperties = function (props) {
        Object.assign(this._properties, props);
    };
    return VirtualComponent;
}());
export { VirtualComponent };
