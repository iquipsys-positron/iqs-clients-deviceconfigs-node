"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const DeviceConfigsNullClientV1_1 = require("../version1/DeviceConfigsNullClientV1");
const DeviceConfigsMemoryClientV1_1 = require("../version1/DeviceConfigsMemoryClientV1");
const DeviceConfigsDirectClientV1_1 = require("../version1/DeviceConfigsDirectClientV1");
const DeviceConfigsHttpClientV1_1 = require("../version1/DeviceConfigsHttpClientV1");
const DeviceConfigsLambdaClientV1_1 = require("../version1/DeviceConfigsLambdaClientV1");
class DeviceConfigsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DeviceConfigsClientFactory.NullClientV1Descriptor, DeviceConfigsNullClientV1_1.DeviceConfigsNullClientV1);
        this.registerAsType(DeviceConfigsClientFactory.MemoryClientV1Descriptor, DeviceConfigsMemoryClientV1_1.DeviceConfigsMemoryClientV1);
        this.registerAsType(DeviceConfigsClientFactory.DirectClientV1Descriptor, DeviceConfigsDirectClientV1_1.DeviceConfigsDirectClientV1);
        this.registerAsType(DeviceConfigsClientFactory.HttpClientV1Descriptor, DeviceConfigsHttpClientV1_1.DeviceConfigsHttpClientV1);
        this.registerAsType(DeviceConfigsClientFactory.LambdaClientV1Descriptor, DeviceConfigsLambdaClientV1_1.DeviceConfigsLambdaClientV1);
    }
}
exports.DeviceConfigsClientFactory = DeviceConfigsClientFactory;
DeviceConfigsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'factory', 'default', 'default', '1.0');
DeviceConfigsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'client', 'null', 'default', '1.0');
DeviceConfigsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'client', 'memory', 'default', '1.0');
DeviceConfigsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'client', 'direct', 'default', '1.0');
DeviceConfigsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'client', 'http', 'default', '1.0');
DeviceConfigsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=DeviceConfigsClientFactory.js.map