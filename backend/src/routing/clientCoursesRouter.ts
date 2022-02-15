import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params, SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getClientCourses from 'controllers/clientCourses/getAllClientCourses';
import passCourse from 'controllers/clientCourses/passCourse';
import startCourse from 'controllers/clientCourses/startCourse';
import finishCourse from 'controllers/clientCourses/finishCourse';
import getClientCourseById from 'controllers/clientCourses/getClientCourse';
import getTest from 'controllers/tests/getTest';

const clientCoursesRouter = Router();
clientCoursesRouter.get(`${Params.id}${SubRoutes.test}`, withAuth([USER_ROLES.EMPLOYEE]), getTest);
clientCoursesRouter.get(
  `${Params.id}${SubRoutes.start}`,
  withAuth([USER_ROLES.EMPLOYEE]),
  startCourse,
);
clientCoursesRouter.get(
  `${Params.id}${SubRoutes.finish}`,
  withAuth([USER_ROLES.EMPLOYEE]),
  finishCourse,
);
clientCoursesRouter.get(`${Params.id}`, withAuth([USER_ROLES.EMPLOYEE]), getClientCourseById);
clientCoursesRouter.put(`${Params.id}`, withAuth([USER_ROLES.EMPLOYEE]), passCourse);
clientCoursesRouter.get(`${Params.noParams}`, withAuth([USER_ROLES.EMPLOYEE]), getClientCourses);

export default clientCoursesRouter;