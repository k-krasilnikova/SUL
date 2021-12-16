import { Request, Response } from 'express';
import { finished } from 'stream';
import winston from 'winston';
import { PROD, QA } from '../../config/constants';

const loggerMidleware = (req: Request, res: Response, next: () => void) => {
  const { ip, method, url } = req;
  const startTime = new Date();

  const logger = process.env.NODE_ENV === QA ? winston.loggers.get(QA) : winston.loggers.get(PROD);

  next();
  finished(res, () => {
    if (process.env.NODE_ENV === 'qa' || process.env.NODE_ENV === 'prod') {
      const ms = Date.now() - Number(startTime);
      const { statusCode } = res;
      logger.silly(
        `request from ${ip} method: ${method} url: ${url}  status:${statusCode} ${ms}ms\n`,
      );
    }
  });
};

export default loggerMidleware;
