import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { RootBundleFactory } from '../build/RootBundleFactory';

export class RootBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-services-facade", "Client facade for iQuipsys Positron");
        this._factories.add(new RootBundleFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
