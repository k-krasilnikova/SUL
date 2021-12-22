import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';

import connectionMiddleware from 'db/connection/connectionMiddleware';

import loggerMiddleware from './utils/log/loggerMiddleware';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());

app.use(loggerMiddleware);

app.use(connectionMiddleware);

app.listen(port, () => {
  console.log(`SUL api started on port ${port}.`);
});
