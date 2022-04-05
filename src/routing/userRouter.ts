import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import withAuth from 'middlewares/authMiddleware';
import getProfileInformation from 'controllers/user/getProfileInfo';
import { SubRoutes } from 'enums/routesEnum';

const userRouter = Router();

userRouter.get(
  SubRoutes.getUserInfo,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getProfileInformation,
);

export default userRouter;
