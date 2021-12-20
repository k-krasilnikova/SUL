import winston from 'winston';

import { ENVIROMENTS } from 'config/constants';

const logFormat = winston.format.printf(
  ({ message, level, timestamp }) => `${level}:${timestamp}:${message}`,
);

winston.loggers.add(ENVIROMENTS.qa, {
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize(),
    logFormat,
  ),
  transports: [new winston.transports.Console()],
});

winston.loggers.add(ENVIROMENTS.prod, {
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.uncolorize(),
    winston.format.json(),
  ),
  transports: [new winston.transports.Console()],
});
