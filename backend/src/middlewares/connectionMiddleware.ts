import { NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';

import ServiceUnavailableError from 'classes/errors/serverErrors/ServiceUnavailableError';

const connectionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const CONNECTION_STRING: string | undefined =
      process.env.NODE_ENV === 'dev' ? process.env.DATABASE_BACKDEV_URL : process.env.DATABASE_URL;

    if (CONNECTION_STRING) {
      await connect(CONNECTION_STRING);
    }

    next();
  } catch (err) {
    const { message } = err as Error;
    const serviceUnavailableError = new ServiceUnavailableError(message);
    next(serviceUnavailableError);
  }
};

export default connectionMiddleware;
