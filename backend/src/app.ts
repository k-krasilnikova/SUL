import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';

import { Routes } from 'enums/routesEnum';
import routers from 'modules/routes/routes';
import loggerMiddleware from 'modules/middlewares/loggerMiddleware';
import { connect } from 'mongoose';
import { DEFAULT_CONNECTION_STRING } from 'config/constants';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());

app.use(loggerMiddleware);
app.use(`${Routes.namespace}`, routers);

app.listen(port, async () => {
  try {
    const CONNECTION_STRING: string = process.env.DATABASE_URL || DEFAULT_CONNECTION_STRING;
    await connect(CONNECTION_STRING);
    console.log(`SUL api started on port ${port}.`);
  } catch (error) {
    throw new Error('not connected');
  }
});
