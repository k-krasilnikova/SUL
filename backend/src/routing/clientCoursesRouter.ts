import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getClientCoursesById from 'modules/clientCourses/clientCourses';

const clientCoursesRouter = Router();
clientCoursesRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getClientCoursesById,
);

export default clientCoursesRouter;
