import { Router } from 'express';

import { SubRoutes } from 'enums/routes';
import { withAuth } from 'middlewares';
import { USER_ROLES } from 'config/constants';
import { login, refresh, logout } from 'controllers/auth';

const accountRouter = Router();

accountRouter.post(`${SubRoutes.login}`, login);
accountRouter.get(
  `${SubRoutes.logout}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  logout,
);
accountRouter.get(`${SubRoutes.refresh}`, refresh);

export default accountRouter;
