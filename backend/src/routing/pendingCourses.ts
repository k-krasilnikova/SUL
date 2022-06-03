import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import { USER_ROLES } from 'config/constants';
import { addNotification } from 'controllers/notifications';
import {
  approvePendingCourse,
  declinePendingCourse,
  getPendingCourses,
} from 'controllers/pendingCourses';
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
  approvePendingCourse,
  addNotification,
  // sendMail,
);
pendingCoursesRouter.put(
  SubRoutes.declinePendingCourse,
  withAuth([USER_ROLES.MANAGER]),
  declinePendingCourse,
  addNotification,
  // sendMail,
);

export default pendingCoursesRouter;
