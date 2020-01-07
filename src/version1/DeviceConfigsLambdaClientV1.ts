let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { DeviceConfigV1 } from './DeviceConfigV1';
import { IDeviceConfigsClientV1 } from './IDeviceConfigsClientV1';

export class DeviceConfigsLambdaClientV1 extends CommandableLambdaClient implements IDeviceConfigsClientV1 {       

    constructor(config?: any) {
        super('device_configs');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getConfigById(correlationId: string, deviceId: string,
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this.callCommand( 
            'get_config_by_id',
            correlationId,
            {
                device_id: deviceId
            }, 
            callback
        );        
    }

    public setConfig(correlationId: string, config: DeviceConfigV1,
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this.callCommand(
            'set_config', 
            correlationId,
            {
                config: config
            }, 
            callback
        );
    }

    public deleteConfigById(correlationId: string, deviceId: string,
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this.callCommand(
            'delete_config_by_id', 
            correlationId,
            {
                device_id: deviceId
            }, 
            callback
        );
    }

    public requestConfigById(correlationId: string, deviceId: string, 
        callback: (err: any) => void): void {
        this.callCommand(
            'request_config_by_id', 
            correlationId,
            {
                device_id: deviceId
            }, 
            callback
        );
    }

    public sendConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this.callCommand(
            'send_config', 
            correlationId,
            {
                config: config
            }, 
            callback
        );
    }

    public receiveConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this.callCommand(
            'receive_config', 
            correlationId,
            {
                config: config
            }, 
            callback
        );
    }
    
}
