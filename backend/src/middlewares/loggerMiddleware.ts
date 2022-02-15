import { Request, Response } from 'express';
import { finished } from 'stream';
import winston from 'winston';

import { ENVIROMENTS } from 'config/constants';

const loggerMiddleware = (req: Request, res: Response, next: () => void) => {
  const { ip, method, url } = req;
  const startTime = new Date();

  const logger =
    process.env.NODE_ENV === ENVIROMENTS.qa
      ? winston.loggers.get(ENVIROMENTS.qa)
      : winston.loggers.get(ENVIROMENTS.prod);

  next();
  finished(res, () => {
    if (process.env.NODE_ENV === ENVIROMENTS.qa || process.env.NODE_ENV === ENVIROMENTS.prod) {
      const ms = Date.now() - Number(startTime);
      const { statusCode } = res;
      logger.silly(
        `request from ${ip} method: ${method} url: ${url} status:${statusCode} ${ms}ms\n`,
      );
    }
  });
};

export default loggerMiddleware;