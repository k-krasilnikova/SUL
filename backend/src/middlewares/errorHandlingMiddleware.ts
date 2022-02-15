import { NextFunction, Request, Response } from 'express';
import { TErrorHandler } from 'interfaces/commonErrorHandling';
import CommonHttpError from 'classes/errors/common/CommonHttpError';
import InternalServerError from 'classes/errors/serverErrors/InternalServerError';

const handleError: TErrorHandler = (
  error: CommonHttpError,
  req: Request,
  res: Response,
  next?: NextFunction,
) => {
  const { statusCode, message } = error;

  if (!statusCode && next) {
    next();
  } else {
    res.status(statusCode).json(message);
  }
};

const handleInternalError = (req: Request, res: Response, next: NextFunction) => {
  const { statusCode, message } = new InternalServerError();

  res.status(statusCode).json(message);

  if (next) {
    next();
  }
};

export { handleError, handleInternalError };
