import { Request, Response } from 'express';

import { TErrorHandler } from 'interfaces/commonErrorHandling';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import CommonHttpError from 'classes/errors/common/CommonHttpError';
import InternalServerError from 'classes/errors/serverErrors/InternalServerError';

const handleError: TErrorHandler = (
  error: CommonHttpError,
  req: Request,
  res: Response,
  next?: TMiddlewareCall,
) => {
  const { statusCode, message } = error;

  if (!statusCode && next) {
    const internalError = new InternalServerError('Unhandled server error.');
    next(internalError);
  } else {
    res.status(statusCode).json(message);
  }
};

export default handleError;
