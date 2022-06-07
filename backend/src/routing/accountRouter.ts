import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import { login, logout, refresh } from 'controllers/auth';
import { USER_ROLES } from 'config/constants';
import { withAuth } from 'middlewares';

const accountRouter = Router();

accountRouter.post(`${SubRoutes.login}`, login);
accountRouter.get(
  `${SubRoutes.logout}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  logout,
);
accountRouter.get(`${SubRoutes.refresh}`, refresh);

export default accountRouter;
