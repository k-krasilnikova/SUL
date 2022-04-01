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
import getAchievments from 'controllers/tests/getAchievments';
import startTest from 'controllers/tests/startTest';
import getTestResults from 'controllers/tests/getTestResults';
import unitTestResults from 'controllers/tests/sendTestResults';
import manageAssessment from 'controllers/clientCourses/manageAssessment';
import getTestTime from 'controllers/tests/getTestTime';
import adapterSender from 'controllers/pendingCourses/adapterSender';

const clientCoursesRouter = Router();

clientCoursesRouter.get(
  `${Params.id}${SubRoutes.test}/time`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTestTime,
);

clientCoursesRouter.put(
  `${Params.id}${SubRoutes.test}${SubRoutes.result}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTestResults,
  getAchievments,
  unitTestResults,
);
clientCoursesRouter.get(
  `${Params.id}${SubRoutes.test}${SubRoutes.start}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  startTest,
);
clientCoursesRouter.get(`${Params.id}${SubRoutes.test}`, withAuth([USER_ROLES.EMPLOYEE]), getTest);
clientCoursesRouter.get(
  `${Params.id}${SubRoutes.start}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  startCourse,
);
clientCoursesRouter.get(
  `${Params.id}${SubRoutes.finish}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  finishCourse,
);
clientCoursesRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getClientCourseById,
);
clientCoursesRouter.put(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  passCourse,
);
clientCoursesRouter.get(
  `${Params.noParams}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getClientCourses,
);
clientCoursesRouter.put(
  `${Params.id}${SubRoutes.assessment}`,
  withAuth([USER_ROLES.MANAGER]),
  manageAssessment,
  getAchievments,
  adapterSender,
);

export default clientCoursesRouter;
