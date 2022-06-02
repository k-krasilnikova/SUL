import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import withAuth from 'middlewares/authMiddleware';
import { readNotifications } from 'controllers/notifications';
import { SubRoutes } from 'enums/routes';
import { getProfileInformation } from 'controllers/user';

const userRouter = Router();

userRouter.get(
  SubRoutes.getUserInfo,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getProfileInformation,
);

userRouter.put(
  SubRoutes.readNotifications,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  readNotifications,
);

export default userRouter;
