import { Request, Response } from 'express';

import { ITokens } from 'interfaces/Iauth/authInterfaces';

type TRefreshResponsePaylaod = ITokens;

type TRefreshRequest = Request;
type TRefreshResponse = Response<TRefreshResponsePaylaod>;

export { TRefreshRequest, TRefreshResponse };
