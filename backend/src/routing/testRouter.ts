import { Router } from 'express';

import { Params } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import { USER_ROLES } from 'config/constants';
import startTest from 'controllers/tests/startTest';

const testRouter = Router();
testRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  startTest,
);

export default testRouter;
