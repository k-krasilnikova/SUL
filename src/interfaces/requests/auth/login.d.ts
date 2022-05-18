import { Request, Response } from 'express';

import { ITokens } from 'interfaces/Iauth/authInterfaces';
import { IUser } from 'interfaces/Ientities/Iusers';

import { ILoginPayload } from '../common/payloads';

type TLoginRequestParams = never;
type TLoginRequestResBody = never;
type TLoginRequestBody = ILoginPayload;

type TLoginResponsePayload = ITokens & Pick<IUser, '_id'>;

type TLoginRequest = Request<TLoginRequestParams, TLoginRequestResBody, TLoginRequestBody>;
type TLoginResponse = Response<TLoginResponsePayload>;

export { TLoginRequest, TLoginResponse };
