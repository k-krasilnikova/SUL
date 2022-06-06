import { NextFunction, Request, Response } from 'express';
import { finished } from 'stream';

import { isLogsDisplayed, logger } from 'utils/log/logger';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { ip, method, url } = req;
  const startTime = new Date();

  next();
  finished(res, () => {
    if (isLogsDisplayed()) {
      const ms = Date.now() - Number(startTime);
      const { statusCode } = res;
      logger.info(
        `
        request from ${ip}
        method: [${method}] url: ${url}
        status: ${statusCode}
        duration: ${ms}ms
        `,
      );
    }
  });
};

export default loggerMiddleware;
