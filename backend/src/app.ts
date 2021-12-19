import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';

import connectionMiddleware from 'db/connection/connectionMiddleware';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());

app.use(connectionMiddleware);

app.listen(port, () => {
  console.log(`SUL api started on port ${port}.`);
});
