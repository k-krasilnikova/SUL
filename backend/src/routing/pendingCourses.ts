import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import { USER_ROLES } from 'config/constants';
import getPendingCourses from 'controllers/pendingCourses/getPendingCourses';
import approvePendingCourse from 'controllers/pendingCourses/approvePendingCourse';
import declinePendingCourse from 'controllers/pendingCourses/declinePendingCourse';
import adapterManager from 'controllers/manager/adapterManager';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import addNotification from 'controllers/notifications/addNotification';
// import sendMail from 'middlewares/mailSender';

const pendingCoursesRouter = Router();

pendingCoursesRouter.get(
  SubRoutes.getPendingCourses,
  withAuth([USER_ROLES.MANAGER]),
  getPendingCourses,
);
pendingCoursesRouter.put(
  SubRoutes.approvePendingCourse,
  withAuth([USER_ROLES.MANAGER]),
  adapterManager,
  approvePendingCourse,
  addNotification,
  // sendMail,
  adapterSender,
);
pendingCoursesRouter.put(
  SubRoutes.declinePendingCourse,
  withAuth([USER_ROLES.MANAGER]),
  adapterManager,
  declinePendingCourse,
  // sendMail,
  adapterSender,
);

export default pendingCoursesRouter;
