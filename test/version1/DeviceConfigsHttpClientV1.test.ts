import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DeviceConfigsMemoryPersistence } from 'iqs-services-deviceconfigs-node';
import { DeviceConfigsController } from 'iqs-services-deviceconfigs-node';
import { DeviceConfigsHttpServiceV1 } from 'iqs-services-deviceconfigs-node';
import { DeviceConfigsHttpClientV1 } from '../../src/version1/DeviceConfigsHttpClientV1';
import { DeviceConfigsClientFixtureV1 } from './DeviceConfigsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('DeviceConfigsRestClientV1', ()=> {
    let service: DeviceConfigsHttpServiceV1;
    let client: DeviceConfigsHttpClientV1;
    let fixture: DeviceConfigsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DeviceConfigsMemoryPersistence();
        let controller = new DeviceConfigsController();

        service = new DeviceConfigsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-deviceconfigs', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceconfigs', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-deviceconfigs', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new DeviceConfigsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new DeviceConfigsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Send and Receive Configs', (done) => {
        fixture.testSendAndReceiveConfigs(done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
