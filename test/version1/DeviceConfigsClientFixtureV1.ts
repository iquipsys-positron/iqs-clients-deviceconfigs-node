let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { DeviceConfigV1 } from '../../src/version1/DeviceConfigV1';
import { IDeviceConfigsClientV1 } from '../../src/version1/IDeviceConfigsClientV1';

let CONFIG1: DeviceConfigV1 = {
    id: '1',
    org_id: '1',
    params: [
        { id: 1, val: 111 },
        { id: 2, val: 222 },
        { id: 3, val: 333 }
    ]
};

export class DeviceConfigsClientFixtureV1 {
    private _client: IDeviceConfigsClientV1;
    
    constructor(client: IDeviceConfigsClientV1) {
        this._client = client;
    }
    
    public testCrudOperations(done) {
        let config1: DeviceConfigV1;

        async.series([
        // Set item
            (callback) => {
                this._client.setConfig(
                    null, CONFIG1, (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, CONFIG1.id);
                        assert.equal(config.org_id, CONFIG1.org_id);
                        assert.lengthOf(config.params, 3);

                        config1 = config;

                        callback(err);
                    }
                );
            },
        // Get config by id
            (callback) => {
                this._client.getConfigById(
                    null,
                    config1.id,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, config1.id);
                        assert.equal(config.org_id, config1.org_id);
                        assert.lengthOf(config.params, config1.params.length);

                        config1 = config;

                        callback();
                    }
                );
            },
        // Update the config
            (callback) => {
                config1 = _.cloneDeep(config1);
                config1.params = [ { id: 5, val: 555 } ];

                this._client.setConfig(
                    null,
                    config1,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, config1.id);
                        assert.equal(config.org_id, config1.org_id);
                        assert.lengthOf(config.params, config1.params.length);

                        callback();
                    }
                );
            },
        // Delete config
            (callback) => {
                this._client.deleteConfigById(
                    null,
                    config1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete config
            (callback) => {
                this._client.getConfigById(
                    null,
                    config1.id,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isNull(config || null);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testSendAndReceiveConfigs(done) {
        let config1: DeviceConfigV1;

        async.series([
        // Send config
            (callback) => {
                this._client.sendConfig(
                    null, CONFIG1, (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, CONFIG1.id);
                        assert.equal(config.org_id, CONFIG1.org_id);
                        assert.lengthOf(config.params, 3);
                        assert.isNotNull(config.sent_time);
                        assert.isNull(config.received_time || null);

                        config1 = config;

                        callback(err);
                    }
                );
            },
        // Request config by id
            (callback) => {
                this._client.requestConfigById(
                    null,
                    config1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Receive the config
            (callback) => {
                config1 = _.cloneDeep(config1);
                config1.params = [ { id: 5, val: 555 } ];

                this._client.receiveConfig(
                    null,
                    config1,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, config1.id);
                        assert.equal(config.org_id, config1.org_id);
                        assert.lengthOf(config.params, config1.params.length);

                        callback();
                    }
                );
            }
        ], done);
    }

}
