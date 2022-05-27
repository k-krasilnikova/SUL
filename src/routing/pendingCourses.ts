import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import { USER_ROLES } from 'config/constants';
import adapterManager from 'controllers/manager/adapterManager';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import { addNotification } from 'controllers/notifications';
import {
  approvePendingCourse,
  declinePendingCourse,
  getPendingCourses,
} from 'controllers/pendingCourses';
import { withAuth } from 'middlewares';
// import { sendMail } from 'middlewares';

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
  addNotification,
  // sendMail,
  adapterSender,
);

export default pendingCoursesRouter;
