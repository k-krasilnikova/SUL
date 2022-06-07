import { ITest } from 'interfaces/entities/test';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = ITest;

type TGetTestRequest = TBaseRequest<TRequestParams>;
type TGetTestResponse = TBaseResponse<TResponsePayload>;

export { TGetTestRequest, TGetTestResponse };
