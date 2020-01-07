import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { DeviceConfigV1 } from './DeviceConfigV1';
import { IDeviceConfigsClientV1 } from './IDeviceConfigsClientV1';
export declare class DeviceConfigsLambdaClientV1 extends CommandableLambdaClient implements IDeviceConfigsClientV1 {
    constructor(config?: any);
    getConfigById(correlationId: string, deviceId: string, callback: (err: any, config: DeviceConfigV1) => void): void;
    setConfig(correlationId: string, config: DeviceConfigV1, callback: (err: any, config: DeviceConfigV1) => void): void;
    deleteConfigById(correlationId: string, deviceId: string, callback: (err: any, config: DeviceConfigV1) => void): void;
    requestConfigById(correlationId: string, deviceId: string, callback: (err: any) => void): void;
    sendConfig(correlationId: string, config: DeviceConfigV1, callback: (err: any, config: DeviceConfigV1) => void): void;
    receiveConfig(correlationId: string, config: DeviceConfigV1, callback: (err: any, config: DeviceConfigV1) => void): void;
}
