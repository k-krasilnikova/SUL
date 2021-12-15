import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());

try {
  app.listen(port, () => {
    console.log(`SUL api started on port ${port}.`);
  });
} catch (error) {
  console.log(error);
}
