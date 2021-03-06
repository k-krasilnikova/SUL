import { TUserInfoResponse } from 'interfaces/response/response';
import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = TUserInfoResponse;

type TGetProfileInfoRequest = TBaseRequest<TRequestParams>;
type TGetProfileInfoResponse = TBaseResponse<TResponsePayload>;

export { TGetProfileInfoRequest, TGetProfileInfoResponse, TResponsePayload };
