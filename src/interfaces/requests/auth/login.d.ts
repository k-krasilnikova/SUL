import { ITokens } from 'interfaces/Iauth/authInterfaces';
import { IUser } from 'interfaces/Ientities/Iusers';

import { TBaseRequest, TBaseResponse } from '../base';
import { ILoginPayload } from '../common/payloads';

type TRequestParams = never;
type TRequestBody = ILoginPayload;

type TResponsePayload = ITokens & Pick<IUser, '_id'>;

type TLoginRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TLoginResponse = TBaseResponse<TResponsePayload>;

export { TLoginRequest, TLoginResponse, TResponsePayload as TLoginPayload };
