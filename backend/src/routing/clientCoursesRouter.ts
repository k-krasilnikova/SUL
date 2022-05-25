import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getTest from 'controllers/tests/getTest';
import getAchievements from 'controllers/tests/getAchievements';
import startTest from 'controllers/tests/startTest';
import passTest from 'controllers/tests/passTest';
import unitTestResults from 'controllers/tests/sendTestResults';
import getTestTime from 'controllers/tests/getTestTime';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import getTestResult from 'controllers/tests/getTestResult';
import addNotification from 'controllers/notifications/addNotification';
import adapterClientCourse from 'controllers/clientCourses/adapterClientCourse';
import {
  getAllClientCourses,
  getClientCourseById,
  manageAssessment,
  passCourse,
  startCourse,
} from 'controllers/clientCourses';
import { getPendingAssessments } from 'controllers/manager';

const clientCoursesRouter = Router();

clientCoursesRouter.get(
  SubRoutes.getTestTime,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTestTime,
);
clientCoursesRouter.put(
  SubRoutes.passTest,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  adapterClientCourse,
  passTest,
  getAchievements,
  addNotification,
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
  SubRoutes.getTestResult,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTestResult,
  adapterSender,
);
clientCoursesRouter.get(
  SubRoutes.startCourse,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  startCourse,
);
clientCoursesRouter.get(
  SubRoutes.getAssessments,
  withAuth([USER_ROLES.MANAGER]),
  getPendingAssessments,
  adapterSender,
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
  getAllClientCourses,
);
clientCoursesRouter.put(
  SubRoutes.manageCourseAssessment,
  withAuth([USER_ROLES.MANAGER]),
  manageAssessment,
  getAchievements,
  adapterSender,
);

export default clientCoursesRouter;
