import dotenv from 'dotenv';

import { app } from 'app';
import { ENVIROMENTS } from 'config/constants';

dotenv.config();
const port =
  process.env.NODE_ENV && process.env.NODE_ENV === ENVIROMENTS.qa
    ? process.env.TEST_PORT
    : process.env.PORT;
app.listen(port, () => {
  if (port) {
    console.log(`SUL api started on port ${port}.`);
  }
});
