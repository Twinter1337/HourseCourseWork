import XrmProxy from "../../Utilities/XrmProxy";
var Device = (function () {
    function Device(customControlProperties) {
        this._bagProps = customControlProperties.propBagMethods.device;
    }
    Device.prototype.captureImage = function (options) {
        return XrmProxy.captureImage(options);
    };
    Device.prototype.captureAudio = function () {
        return XrmProxy.captureAudio();
    };
    Device.prototype.captureVideo = function () {
        return XrmProxy.captureVideo();
    };
    Device.prototype.pickFile = function (options) {
        return XrmProxy.pickFile(options);
    };
    Device.prototype.getBarcodeValue = function () {
        return XrmProxy.getBarcodeValue();
    };
    Device.prototype.getCurrentPosition = function () {
        return XrmProxy.getCurrentPosition();
    };
    Device.prototype.isGetBarcodeValueOperationAvailable = function () {
        return this._bagProps.isGetBarcodeValueOperationAvailable();
    };
    Device.prototype.isTakePictureOperationAvailable = function () {
        return this._bagProps.isTakePictureOperationAvailable();
    };
    Device.prototype.isCaptureVideoOperationAvailable = function () {
        return this._bagProps.isCaptureVideoOperationAvailable();
    };
    Device.prototype.isCaptureAudioOperationAvailable = function () {
        return this._bagProps.isCaptureAudioOperationAvailable();
    };
    return Device;
}());
export { Device };
