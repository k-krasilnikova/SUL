import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import login from 'controllers/auth/login';
import refresh from 'controllers/auth/refresh';
import logout from 'controllers/auth/logout';
import withAuth from 'middlewares/authMiddleware';
import { USER_ROLES } from 'config/constants';

const accountRouter = Router();

accountRouter.post(`${SubRoutes.login}`, login);
accountRouter.get(
  `${SubRoutes.logout}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  logout,
);
accountRouter.get(`${SubRoutes.refresh}`, refresh);

export default accountRouter;
