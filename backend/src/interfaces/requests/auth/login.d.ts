import { ITokens } from 'interfaces/Iauth/authInterfaces';
import { IUser } from 'interfaces/Ientities/Iusers';

import { TBaseRequest, TBaseResponse } from '../base';
import { ILoginPayload } from '../common/payloads';

type TLoginRequestParams = never;
type TLoginRequestBody = ILoginPayload;

type TLoginResponsePayload = ITokens & Pick<IUser, '_id'>;

type TLoginRequest = TBaseRequest<TLoginRequestParams, TLoginRequestBody>;
type TLoginResponse = TBaseResponse<TLoginResponsePayload>;

export { TLoginRequest, TLoginResponse };
