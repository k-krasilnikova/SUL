import { Request, Response } from 'express';
import { connect } from 'mongoose';

import { DEFAULT_CONNECTION_STRING } from 'config/constants';
import { MiddlewareCall } from 'interfaces/middleware/common';

const connectionMiddleware = async (req: Request, res: Response, next: MiddlewareCall) => {
  try {
    const CONNECTION_STRING: string = process.env.DATABASE_URL || DEFAULT_CONNECTION_STRING;

    await connect(CONNECTION_STRING);

    next();
  } catch (err: unknown) {
    next(err);
  }
};

export default connectionMiddleware;
