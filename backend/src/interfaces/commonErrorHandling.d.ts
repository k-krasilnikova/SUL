import { NextFunction, Request, Response } from 'express';

import CommonHttpError from 'classes/errors/common/CommonHttpError';

type TErrorHandler = (
  err: CommonHttpError,
  req: Request,
  res: Response,
  next?: NextFunction,
) => void;

export { TErrorHandler };
