import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = string;

type TStartTestRequest = TBaseRequest<TRequestParams>;
type TStartTestResponse = TBaseResponse<TResponsePayload>;

export { TStartTestRequest, TStartTestResponse };
