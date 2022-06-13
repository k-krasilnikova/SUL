import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { Routes } from 'enums/routes';
import routers from 'routing/routes';

import { registerScheduler } from 'utils/schedule/registerScheduler';
import {
  connectionMiddleware,
  errorHandlingMiddleware,
  handleInternalErrorMiddleware,
  loggerMiddleware,
} from 'middlewares';

dotenv.config();

const app = express();
registerScheduler();

const localhost = process.env.LOCAL_HOST || 'http://localhost:3000';
const webhost = process.env.WEB_HOST || 'https://sul-web.herokuapp.com';
app.use(json());
app.use(cookieParser());
app.use(
  cors({
    origin: [localhost, webhost],
    credentials: true,
  }),
);

app.use(connectionMiddleware);
app.use(loggerMiddleware);
app.use(`${Routes.namespace}`, routers);

app.use(errorHandlingMiddleware, handleInternalErrorMiddleware);

export { app };
