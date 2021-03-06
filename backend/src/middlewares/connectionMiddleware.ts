import { NextFunction, Request, Response } from 'express';

import { ServiceUnavailableError } from 'classes/errors/serverErrors';
import { connectToDatabase } from 'utils/connection/connectToDatabase';

const connectionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    const { message } = err as Error;
    const serviceUnavailableError = new ServiceUnavailableError(message);
    next(serviceUnavailableError);
  }
};

export default connectionMiddleware;
