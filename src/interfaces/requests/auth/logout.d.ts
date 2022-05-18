import { Request, Response } from 'express';

import { IAuthLocals } from '../common/locals';

type TLogoutResponsePayload = string;

type TLogoutRequest = Request;
type TLogoutResponse = Response<TLogoutResponsePayload, IAuthLocals>;

export { TLogoutRequest, TLogoutResponse };
