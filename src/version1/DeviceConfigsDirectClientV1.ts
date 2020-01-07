import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IDeviceConfigsClientV1 } from './IDeviceConfigsClientV1';
//import { IDeviceConfigsController } from 'iqs-services-deviceconfigs-node';
import { DeviceConfigV1 } from './DeviceConfigV1';

export class DeviceConfigsDirectClientV1 extends DirectClient<any> implements IDeviceConfigsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-deviceconfigs", "controller", "*", "*", "*"))
    }

    public getConfigById(correlationId: string, deviceId: string, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        let timing = this.instrument(correlationId, 'configs.get_config_by_id');
        this._controller.getConfigById(correlationId, deviceId, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }

    public setConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        let timing = this.instrument(correlationId, 'configs.set_config');
        this._controller.setConfig(correlationId, config, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }

    public deleteConfigById(correlationId: string, deviceId: string,
        callback: (err: any, config: DeviceConfigV1) => void): void {
        let timing = this.instrument(correlationId, 'configs.delete_config_by_id');
        this._controller.deleteConfigById(correlationId, deviceId, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }

    public requestConfigById(correlationId: string, deviceId: string, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'configs.request_config_by_id');
        this._controller.requestConfigById(correlationId, deviceId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public sendConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        let timing = this.instrument(correlationId, 'configs.send_config');
        this._controller.sendConfig(correlationId, config, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }

    public receiveConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        let timing = this.instrument(correlationId, 'configs.receive_config');
        this._controller.receiveConfig(correlationId, config, (err, config) => {
            timing.endTiming();
            callback(err, config);
        });
    }
    
}