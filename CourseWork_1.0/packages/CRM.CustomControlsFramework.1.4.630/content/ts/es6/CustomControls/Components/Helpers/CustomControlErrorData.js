var ErrorData = (function () {
    function ErrorData() {
    }
    Object.defineProperty(ErrorData.prototype, "errorMessage", {
        get: function () {
            return this._errorMessage;
        },
        set: function (message) {
            this._errorMessage = message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorData.prototype, "errorDetails", {
        get: function () {
            return this._errorDetails;
        },
        set: function (details) {
            this._errorDetails = details;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorData;
}());
export { ErrorData };
