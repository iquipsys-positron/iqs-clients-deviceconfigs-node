const _ = require('lodash');

import { IDeviceConfigsClientV1 } from './IDeviceConfigsClientV1';
import { DeviceConfigV1 } from './DeviceConfigV1';

export class DeviceConfigsMemoryClientV1 implements IDeviceConfigsClientV1 {
    private _configs: DeviceConfigV1[] = [];          
    
    public getConfigById(correlationId: string, deviceId: string, 
        callback: (err: any, config: DeviceConfigV1) => void): void {

        let config = _.find(this._configs, (d) => d.id == deviceId);
        callback(null, config);
    }

    public setConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this._configs = _.filter(this._configs, (d) => d.id != config.id);
        this._configs.push(config);        
        callback(null, config);
    }

    public deleteConfigById(correlationId: string, deviceId: string,
        callback: (err: any, config: DeviceConfigV1) => void): void {
        let config = _.find(this._configs, (d) => d.id == deviceId);
        this._configs = _.filter(this._configs, (d) => d.id != config.id);        
        callback(null, config);
    }

    public requestConfigById(correlationId: string, deviceId: string, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public sendConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        config.sent_time = new Date();
        this._configs = _.filter(this._configs, (d) => d.id != config.id);
        this._configs.push(config);        
        callback(null, config);
    }

    public receiveConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        config.received_time = new Date();
        this._configs = _.filter(this._configs, (d) => d.id != config.id);
        this._configs.push(config);        
        callback(null, config);
    }
    
}