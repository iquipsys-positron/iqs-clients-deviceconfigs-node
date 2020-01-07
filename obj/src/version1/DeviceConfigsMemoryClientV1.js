"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require('lodash');
class DeviceConfigsMemoryClientV1 {
    constructor() {
        this._configs = [];
    }
    getConfigById(correlationId, deviceId, callback) {
        let config = _.find(this._configs, (d) => d.id == deviceId);
        callback(null, config);
    }
    setConfig(correlationId, config, callback) {
        this._configs = _.filter(this._configs, (d) => d.id != config.id);
        this._configs.push(config);
        callback(null, config);
    }
    deleteConfigById(correlationId, deviceId, callback) {
        let config = _.find(this._configs, (d) => d.id == deviceId);
        this._configs = _.filter(this._configs, (d) => d.id != config.id);
        callback(null, config);
    }
    requestConfigById(correlationId, deviceId, callback) {
        if (callback)
            callback(null);
    }
    sendConfig(correlationId, config, callback) {
        config.sent_time = new Date();
        this._configs = _.filter(this._configs, (d) => d.id != config.id);
        this._configs.push(config);
        callback(null, config);
    }
    receiveConfig(correlationId, config, callback) {
        config.received_time = new Date();
        this._configs = _.filter(this._configs, (d) => d.id != config.id);
        this._configs.push(config);
        callback(null, config);
    }
}
exports.DeviceConfigsMemoryClientV1 = DeviceConfigsMemoryClientV1;
//# sourceMappingURL=DeviceConfigsMemoryClientV1.js.map