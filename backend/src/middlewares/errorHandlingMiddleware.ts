import { NextFunction, Request, Response } from 'express';

import { CommonHttpError } from 'classes/errors/common';
import { TErrorHandler } from 'interfaces/commonErrorHandling';
import { isLogsDisplayed, logger } from 'utils/log/logger';

const errorHandlingMiddleware: TErrorHandler = (
  error: CommonHttpError,
  req: Request,
  res: Response,
  next?: NextFunction,
) => {
  const { statusCode, message } = error;
  if (!statusCode && next) {
    if (isLogsDisplayed()) {
      logger.error(error);
    }
    next();
  } else {
    if (isLogsDisplayed()) {
      logger.warn(error);
    }
    res.status(statusCode).json(message);
  }
};

export default errorHandlingMiddleware;
