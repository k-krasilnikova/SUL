import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';

import { Routes } from 'enums/routesEnum';
import routers from 'modules/routes/routes';
import connectionMiddleware from 'db/connection/connectionMiddleware';

import loggerMiddleware from 'modules/middlewares/loggerMiddleware';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());

app.use(loggerMiddleware);
app.use(`${Routes.namespace}`, routers);

app.use(connectionMiddleware);

app.listen(port, () => {
  console.log(`SUL api started on port ${port}.`);
});
