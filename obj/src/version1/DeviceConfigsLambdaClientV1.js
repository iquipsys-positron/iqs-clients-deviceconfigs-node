"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class DeviceConfigsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('device_configs');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getConfigById(correlationId, deviceId, callback) {
        this.callCommand('get_config_by_id', correlationId, {
            device_id: deviceId
        }, callback);
    }
    setConfig(correlationId, config, callback) {
        this.callCommand('set_config', correlationId, {
            config: config
        }, callback);
    }
    deleteConfigById(correlationId, deviceId, callback) {
        this.callCommand('delete_config_by_id', correlationId, {
            device_id: deviceId
        }, callback);
    }
    requestConfigById(correlationId, deviceId, callback) {
        this.callCommand('request_config_by_id', correlationId, {
            device_id: deviceId
        }, callback);
    }
    sendConfig(correlationId, config, callback) {
        this.callCommand('send_config', correlationId, {
            config: config
        }, callback);
    }
    receiveConfig(correlationId, config, callback) {
        this.callCommand('receive_config', correlationId, {
            config: config
        }, callback);
    }
}
exports.DeviceConfigsLambdaClientV1 = DeviceConfigsLambdaClientV1;
//# sourceMappingURL=DeviceConfigsLambdaClientV1.js.map