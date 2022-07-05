import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routes';
import {
  getAllClientCourses,
  getClientCourseById,
  manageAssessment,
  passCourse,
  startCourse,
} from 'controllers/clientCourses';
import { getPendingAssessments } from 'controllers/manager';
import { addNotification } from 'controllers/notifications';
import {
  getAchievements,
  getTest,
  getTestResult,
  getTestTime,
  passTest,
  startTest,
  sendTestResults,
} from 'controllers/tests';
import { assessmentSender, withAuth } from 'middlewares';

const clientCoursesRouter = Router();

clientCoursesRouter.get(
  SubRoutes.getTestTime,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getTestTime,
);
clientCoursesRouter.put(
  SubRoutes.passTest,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  passTest,
  getAchievements,
  sendTestResults,
  addNotification,
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
  assessmentSender,
);

export default clientCoursesRouter;
