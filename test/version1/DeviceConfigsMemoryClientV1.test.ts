import { DeviceConfigsMemoryClientV1 } from '../../src/version1/DeviceConfigsMemoryClientV1';
import { DeviceConfigsClientFixtureV1 } from './DeviceConfigsClientFixtureV1';

suite('DeviceConfigsMemoryClientV1', ()=> {
    let client: DeviceConfigsMemoryClientV1;
    let fixture: DeviceConfigsClientFixtureV1;

    suiteSetup(() => {
        client = new DeviceConfigsMemoryClientV1();

        fixture = new DeviceConfigsClientFixtureV1(client);
    });
    
    test('Send and Receive Configs', (done) => {
        fixture.testSendAndReceiveConfigs(done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
