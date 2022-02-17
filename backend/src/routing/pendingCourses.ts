import { Router } from 'express';

import { Params, SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import { USER_ROLES } from 'config/constants';
import getPendingCourses from 'controllers/pendingCourses/getPendingCourses';
import approvePendingCourse from 'controllers/pendingCourses/approvePendingCourse';
import declinePendingCourse from 'controllers/pendingCourses/declinePendingCourse';
import applyMiddlewareManager from 'controllers/manager/applyMiddlewareManager';

const pendingCoursesRouter = Router();

pendingCoursesRouter.get(`${Params.noParams}`, withAuth([USER_ROLES.MANAGER]), getPendingCourses);
pendingCoursesRouter.put(
  `${Params.noParams}${SubRoutes.approveCourse}`,
  withAuth([USER_ROLES.MANAGER]),
  applyMiddlewareManager,
  approvePendingCourse,
);
pendingCoursesRouter.put(
  `${Params.noParams}${SubRoutes.declineCourse}`,
  withAuth([USER_ROLES.MANAGER]),
  applyMiddlewareManager,
  declinePendingCourse,
);

export default pendingCoursesRouter;
