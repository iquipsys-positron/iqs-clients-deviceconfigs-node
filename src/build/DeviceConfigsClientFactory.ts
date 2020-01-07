import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { DeviceConfigsNullClientV1 } from '../version1/DeviceConfigsNullClientV1';
import { DeviceConfigsMemoryClientV1 } from '../version1/DeviceConfigsMemoryClientV1';
import { DeviceConfigsDirectClientV1 } from '../version1/DeviceConfigsDirectClientV1';
import { DeviceConfigsHttpClientV1 } from '../version1/DeviceConfigsHttpClientV1';
import { DeviceConfigsLambdaClientV1 } from '../version1/DeviceConfigsLambdaClientV1';

export class DeviceConfigsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-deviceconfigs', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-deviceconfigs', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-deviceconfigs', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-deviceconfigs', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-deviceconfigs', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-deviceconfigs', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(DeviceConfigsClientFactory.NullClientV1Descriptor, DeviceConfigsNullClientV1);
		this.registerAsType(DeviceConfigsClientFactory.MemoryClientV1Descriptor, DeviceConfigsMemoryClientV1);
		this.registerAsType(DeviceConfigsClientFactory.DirectClientV1Descriptor, DeviceConfigsDirectClientV1);
		this.registerAsType(DeviceConfigsClientFactory.HttpClientV1Descriptor, DeviceConfigsHttpClientV1);
		this.registerAsType(DeviceConfigsClientFactory.LambdaClientV1Descriptor, DeviceConfigsLambdaClientV1);
	}
	
}
