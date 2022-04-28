import { NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';

import ServiceUnavailableError from 'classes/errors/serverErrors/ServiceUnavailableError';

const DB_URL: Record<string, string | undefined> = {
  local: process.env.DATABASE_LOCAL_URL,
  dev: process.env.DATABASE_URL,
  backdev: process.env.DATABASE_BACKDEV_URL,
};

const connectionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const CONNECTION_STRING = process.env.NODE_ENV && DB_URL[process.env.NODE_ENV];

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
