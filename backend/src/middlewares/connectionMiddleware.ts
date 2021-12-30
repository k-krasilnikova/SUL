import { Request, Response } from 'express';
import { connect } from 'mongoose';

import { DEFAULT_CONNECTION_STRING } from 'config/constants';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const connectionMiddleware = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const CONNECTION_STRING: string = process.env.DATABASE_URL || DEFAULT_CONNECTION_STRING;

    await connect(CONNECTION_STRING);

    next();
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default connectionMiddleware;
