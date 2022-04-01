import { NextFunction, Request, Response } from 'express';

import { TErrorHandler } from 'interfaces/commonErrorHandling';
import CommonHttpError from 'classes/errors/common/CommonHttpError';
import InternalServerError from 'classes/errors/serverErrors/InternalServerError';
import logger from 'utils/log/logger';

const handleError: TErrorHandler = (
  error: CommonHttpError,
  req: Request,
  res: Response,
  next?: NextFunction,
) => {
  const { statusCode, message } = error;
  if (!statusCode && next) {
    logger.error(error);
    next();
  } else {
    logger.warn(error);
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
