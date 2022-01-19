import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params, SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getClientCourses from 'controllers/clientCourses/getAllClientCourses';
import passCourse from 'controllers/clientCourses/passCourse';
import startCourse from 'controllers/clientCourses/startCourse';
import finishCourse from 'controllers/clientCourses/finishCourse';
import getClientCourseById from 'controllers/clientCourses/getClientCourse';

const clientCoursesRouter = Router();
clientCoursesRouter.get(
  `${Params.id}${SubRoutes.start}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  startCourse,
);
clientCoursesRouter.get(
  `${Params.id}${SubRoutes.finish}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  finishCourse,
);
clientCoursesRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getClientCourseById,
);
clientCoursesRouter.put(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  passCourse,
);
clientCoursesRouter.get(
  `${Params.noParams}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getClientCourses,
);

export default clientCoursesRouter;
