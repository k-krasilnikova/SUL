import { Router } from 'express';

import { Params, SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import { USER_ROLES } from 'config/constants';
import getPendingCourses from 'controllers/pendingCourses/getPendingCourses';
import approvePendingCourse from 'controllers/pendingCourses/approvePendingCourse';
import declinePendingCourse from 'controllers/pendingCourses/declinePendingCourse';
import adapterManager from 'controllers/manager/adapterManager';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import sendMail from 'middlewares/mailSender';

const pendingCoursesRouter = Router();

pendingCoursesRouter.get(`${Params.noParams}`, withAuth([USER_ROLES.MANAGER]), getPendingCourses);
pendingCoursesRouter.put(
  `${Params.noParams}${SubRoutes.approveCourse}`,
  withAuth([USER_ROLES.MANAGER]),
  adapterManager,
  approvePendingCourse,
  // sendMail,
  adapterSender,
);
pendingCoursesRouter.put(
  `${Params.noParams}${SubRoutes.declineCourse}`,
  withAuth([USER_ROLES.MANAGER]),
  adapterManager,
  declinePendingCourse,
  // sendMail,
  adapterSender,
);

export default pendingCoursesRouter;
