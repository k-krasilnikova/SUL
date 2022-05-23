import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = string;
type TResponseLocals = IAuthLocals;

type TLogoutRequest = TBaseRequest;
type TLogoutResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TLogoutRequest, TLogoutResponse };
