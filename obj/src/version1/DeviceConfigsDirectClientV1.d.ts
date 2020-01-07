import { DirectClient } from 'pip-services3-rpc-node';
import { IDeviceConfigsClientV1 } from './IDeviceConfigsClientV1';
import { DeviceConfigV1 } from './DeviceConfigV1';
export declare class DeviceConfigsDirectClientV1 extends DirectClient<any> implements IDeviceConfigsClientV1 {
    constructor();
    getConfigById(correlationId: string, deviceId: string, callback: (err: any, config: DeviceConfigV1) => void): void;
    setConfig(correlationId: string, config: DeviceConfigV1, callback: (err: any, config: DeviceConfigV1) => void): void;
    deleteConfigById(correlationId: string, deviceId: string, callback: (err: any, config: DeviceConfigV1) => void): void;
    requestConfigById(correlationId: string, deviceId: string, callback: (err: any) => void): void;
    sendConfig(correlationId: string, config: DeviceConfigV1, callback: (err: any, config: DeviceConfigV1) => void): void;
    receiveConfig(correlationId: string, config: DeviceConfigV1, callback: (err: any, config: DeviceConfigV1) => void): void;
}
