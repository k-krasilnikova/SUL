import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { Routes } from 'enums/routesEnum';
import routers from 'routing/routes';
import connectionMiddleware from 'middlewares/connectionMiddleware';
import loggerMiddleware from 'middlewares/loggerMiddleware';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);
app.use(connectionMiddleware);
app.use(loggerMiddleware);
app.use(`${Routes.namespace}`, routers);

app.listen(port, () => {
  if (port) {
    console.log(`SUL api started on port ${port}.`);
  }
});
