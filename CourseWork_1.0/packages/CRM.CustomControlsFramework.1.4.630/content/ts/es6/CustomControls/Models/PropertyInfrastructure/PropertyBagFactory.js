var PropertyBagFactory = (function () {
    function PropertyBagFactory(customControlProperties, externalUtils, hostData) {
        this._customControlProperties = customControlProperties;
        this._externalUtils = externalUtils;
        this._hostData = hostData;
    }
    PropertyBagFactory.prototype.getInstance = function (instance) {
        return new instance(this._customControlProperties, this._externalUtils, this._hostData);
    };
    return PropertyBagFactory;
}());
export { PropertyBagFactory };
