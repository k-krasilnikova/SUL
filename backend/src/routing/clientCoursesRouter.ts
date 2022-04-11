import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getClientCourses from 'controllers/clientCourses/getAllClientCourses';
import passCourse from 'controllers/clientCourses/passCourse';
import startCourse from 'controllers/clientCourses/startCourse';
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
  SubRoutes.getTestTime,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTestTime,
);

clientCoursesRouter.put(
  SubRoutes.getTestResult,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTestResults,
  getAchievments,
  unitTestResults,
);
clientCoursesRouter.get(
  SubRoutes.startTest,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  startTest,
);
clientCoursesRouter.get(
  SubRoutes.getCourseTest,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTest,
);
clientCoursesRouter.get(
  SubRoutes.startCourse,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  startCourse,
);
clientCoursesRouter.get(
  SubRoutes.getClientCourse,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getClientCourseById,
);
clientCoursesRouter.put(
  SubRoutes.passCourseStage,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  passCourse,
);
clientCoursesRouter.get(
  SubRoutes.getClientCourses,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getClientCourses,
);
clientCoursesRouter.put(
  SubRoutes.manageCourseAssessment,
  withAuth([USER_ROLES.MANAGER]),
  manageAssessment,
  getAchievments,
  adapterSender,
);

export default clientCoursesRouter;
