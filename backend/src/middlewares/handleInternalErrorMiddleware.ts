import { NextFunction, Request, Response } from 'express';

import { InternalServerError } from 'classes/errors/serverErrors';

const handleInternalErrorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { statusCode, message } = new InternalServerError();

  res.status(statusCode).json(message);

  if (next) {
    next();
  }
};

export default handleInternalErrorMiddleware;
