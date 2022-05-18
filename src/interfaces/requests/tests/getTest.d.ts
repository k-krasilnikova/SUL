import { ITest } from 'interfaces/Ientities/Itest';

import { TBaseRequest, TBaseResponse } from '../base';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;

type TResponsePayload = ITest;

type TGetTestRequest = TBaseRequest<TRequestParams>;

type TGetTestResponse = TBaseResponse<TResponsePayload>;

export { TGetTestRequest, TGetTestResponse };
