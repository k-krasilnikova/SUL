import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import { getProfileInformation } from 'modules/user/userController';

const userRouter = Router();

userRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getProfileInformation,
);

export default userRouter;
