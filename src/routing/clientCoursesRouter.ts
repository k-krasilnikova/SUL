import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getClientCoursesById from 'controllers/clientCourses/getClientCourses';
import passCourse from 'controllers/clientCourses/passCourse';
import startCourse from 'controllers/clientCourses/startCourse';
import finishCourse from 'controllers/clientCourses/finishCourse';

const clientCoursesRouter = Router();
clientCoursesRouter.get(
  `${Params.id}/start`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  startCourse,
);
clientCoursesRouter.put(
  `${Params.id}/finish`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  finishCourse,
);
clientCoursesRouter.put(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  passCourse,
);
clientCoursesRouter.get(
  `${Params.noParams}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getClientCoursesById,
);

export default clientCoursesRouter;
