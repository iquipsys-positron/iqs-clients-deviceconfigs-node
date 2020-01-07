"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DeviceConfigsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-deviceconfigs", "controller", "*", "*", "*"));
    }
    getConfigById(correlationId, deviceId, callback) {
        let timing = this.instrument(correlationId, 'configs.get_config_by_id');
        this._controller.getConfigById(correlationId, deviceId, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }
    setConfig(correlationId, config, callback) {
        let timing = this.instrument(correlationId, 'configs.set_config');
        this._controller.setConfig(correlationId, config, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }
    deleteConfigById(correlationId, deviceId, callback) {
        let timing = this.instrument(correlationId, 'configs.delete_config_by_id');
        this._controller.deleteConfigById(correlationId, deviceId, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }
    requestConfigById(correlationId, deviceId, callback) {
        let timing = this.instrument(correlationId, 'configs.request_config_by_id');
        this._controller.requestConfigById(correlationId, deviceId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    sendConfig(correlationId, config, callback) {
        let timing = this.instrument(correlationId, 'configs.send_config');
        this._controller.sendConfig(correlationId, config, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }
    receiveConfig(correlationId, config, callback) {
        let timing = this.instrument(correlationId, 'configs.receive_config');
        this._controller.receiveConfig(correlationId, config, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }
}
exports.DeviceConfigsDirectClientV1 = DeviceConfigsDirectClientV1;
//# sourceMappingURL=DeviceConfigsDirectClientV1.js.map