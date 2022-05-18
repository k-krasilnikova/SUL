import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TLogoutResponsePayload = string;

type TLogoutRequest = TBaseRequest;
type TLogoutResponse = TBaseResponse<TLogoutResponsePayload, IAuthLocals>;

export { TLogoutRequest, TLogoutResponse };
