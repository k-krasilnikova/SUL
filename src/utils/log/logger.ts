import winston from 'winston';

import { ENVIROMENTS } from 'config/constants';

const logFormat = winston.format.printf(({ message, level }) => `${level}: ${message}`);

const qaLoggerOptions = {
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize(),
    logFormat,
  ),
  transports: [new winston.transports.Console()],
};

const prodLoggerOptions = {
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.json(),
  ),
  transports: [new winston.transports.Console()],
};

const logger =
  process.env.NODE_ENV === ENVIROMENTS.qa
    ? winston.createLogger(qaLoggerOptions)
    : winston.createLogger(prodLoggerOptions);

export default logger;
