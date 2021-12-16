import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import loggerMidleware from './utils/log/loggerMidleware';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());
app.use(loggerMidleware);
app.listen(port, () => {
  console.log(`SUL api started on port ${port}.`);
});
