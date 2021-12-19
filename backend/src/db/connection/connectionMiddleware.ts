import { Request, Response } from 'express';
import { connect } from 'mongoose';

import { DEFAULT_CONNECTION_STRING } from 'config/constants';

const connectionMiddleware = async (req: Request, res: Response, next: () => void) => {
  try {
    const CONNECTION_STRING: string = process.env.DATABASE_URL || DEFAULT_CONNECTION_STRING;

    await connect(CONNECTION_STRING);

    next();
  } catch (err: any) {
    // find a solution to define next()
    // next(err);
    // replace to logger after merging pr
    console.log(err.message);
  }
};

export default connectionMiddleware;
