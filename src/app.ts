import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { Routes } from 'enums/routesEnum';
import routers from 'routing/routes';
import connectionMiddleware from 'middlewares/connectionMiddleware';
import loggerMiddleware from 'middlewares/loggerMiddleware';
import { handleError, handleInternalError } from 'middlewares/errorHandlingMiddleware';

dotenv.config();
const app = express();
const port = process.env.PORT;
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

app.use(handleError, handleInternalError);

app.listen(port, () => {
  if (port) {
    console.log(`SUL api started on port ${port}.`);
  }
});
