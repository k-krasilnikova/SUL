import { Request, Response } from 'express';
import { ITokens } from 'interfaces/Iauth/authInterfaces';

import { IUser } from 'interfaces/Ientities/Iusers';

interface ILoginRequestBody {
  login: string;
  password: string;
}

type TLoginResponsePayload = ITokens & Pick<IUser, '_id'>;

type TLoginRequest = Request<never, never, ILoginRequestBody>;

type TLoginResponse = Response<TLoginResponsePayload>;

export { TLoginRequest, TLoginResponse };
