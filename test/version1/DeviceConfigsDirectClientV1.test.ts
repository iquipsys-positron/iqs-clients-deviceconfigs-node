import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DeviceConfigsMemoryPersistence } from 'iqs-services-deviceconfigs-node';
import { DeviceConfigsController } from 'iqs-services-deviceconfigs-node';
import { DeviceConfigsDirectClientV1 } from '../../src/version1/DeviceConfigsDirectClientV1';
import { DeviceConfigsClientFixtureV1 } from './DeviceConfigsClientFixtureV1';

suite('DeviceConfigsDirectClientV1', ()=> {
    let client: DeviceConfigsDirectClientV1;
    let fixture: DeviceConfigsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DeviceConfigsMemoryPersistence();
        let controller = new DeviceConfigsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-deviceconfigs', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceconfigs', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new DeviceConfigsDirectClientV1();
        client.setReferences(references);

        fixture = new DeviceConfigsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Send and Receive Configs', (done) => {
        fixture.testSendAndReceiveConfigs(done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
