import { ITokens } from 'interfaces/auth/auth';
import { IUser } from 'interfaces/entities/users';

import { TBaseRequest, TBaseResponse } from '../base';
import { ILoginPayload } from '../common/payloads';

type TRequestParams = never;
type TRequestBody = ILoginPayload;

type TResponsePayload = ITokens & Pick<IUser, '_id'>;

type TLoginRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TLoginResponse = TBaseResponse<TResponsePayload>;

export { TLoginRequest, TLoginResponse, TResponsePayload };
