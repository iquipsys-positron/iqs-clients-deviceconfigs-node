import { IDeviceConfigsClientV1 } from './IDeviceConfigsClientV1';
import { DeviceConfigV1 } from './DeviceConfigV1';

export class DeviceConfigsNullClientV1 implements IDeviceConfigsClientV1 {
            
    public getConfigById(correlationId: string, deviceId: string, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        callback(null, null);
    }

    public setConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        callback(null, config);
    }

    public deleteConfigById(correlationId: string, deviceId: string,
        callback: (err: any, config: DeviceConfigV1) => void): void {
        if (callback) callback(null, null);
    }

    public requestConfigById(correlationId: string, deviceId: string, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public sendConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        callback(null, config);
    }

    public receiveConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        callback(null, config);
    }

}