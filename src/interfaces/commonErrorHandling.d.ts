import { Request, Response } from 'express';

import CommonHttpError from 'classes/errors/common/CommonHttpError';

import { TMiddlewareCall } from './commonMiddleware';

type TErrorHandler = (
  err: CommonHttpError,
  req: Request,
  res: Response,
  next?: TMiddlewareCall,
) => void;

export { TErrorHandler };
