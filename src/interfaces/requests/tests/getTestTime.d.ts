import { ITest } from 'interfaces/Ientities/Itest';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = ITest['timeout'];

type TGetTestTimeRequest = TBaseRequest<TRequestParams>;
type TGetTestTimeResponse = TBaseResponse<TResponsePayload>;

export { TGetTestTimeRequest, TGetTestTimeResponse };
