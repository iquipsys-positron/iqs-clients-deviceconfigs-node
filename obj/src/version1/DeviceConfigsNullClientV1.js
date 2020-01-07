"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeviceConfigsNullClientV1 {
    getConfigById(correlationId, deviceId, callback) {
        callback(null, null);
    }
    setConfig(correlationId, config, callback) {
        callback(null, config);
    }
    deleteConfigById(correlationId, deviceId, callback) {
        if (callback)
            callback(null, null);
    }
    requestConfigById(correlationId, deviceId, callback) {
        if (callback)
            callback(null);
    }
    sendConfig(correlationId, config, callback) {
        callback(null, config);
    }
    receiveConfig(correlationId, config, callback) {
        callback(null, config);
    }
}
exports.DeviceConfigsNullClientV1 = DeviceConfigsNullClientV1;
//# sourceMappingURL=DeviceConfigsNullClientV1.js.map