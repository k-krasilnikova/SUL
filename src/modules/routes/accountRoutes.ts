import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routesEnum';
import { loginController, refreshController } from 'modules/controllers/authController';
import { getProfileController } from 'modules/controllers/userController';
import withAuth from 'modules/middlewares/authMiddleware';

const accountRouters = Router();

accountRouters.post(`${SubRoutes.login}`, loginController);
accountRouters.get(`${SubRoutes.refresh}`, refreshController);
accountRouters.get(
  `${SubRoutes.profile}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getProfileController,
);

export default accountRouters;
