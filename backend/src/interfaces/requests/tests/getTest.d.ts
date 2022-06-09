import { TestDb } from 'interfaces/entities/test';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = TestDb[]; // refactor in V1-244 Types declarations

type TGetTestRequest = TBaseRequest<TRequestParams>;
type TGetTestResponse = TBaseResponse<TResponsePayload>;

export { TGetTestRequest, TGetTestResponse };
