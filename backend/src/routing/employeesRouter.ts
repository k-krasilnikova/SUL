import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getEmployees from 'controllers/manager/getEmployees';
import applyMiddlewareManager from 'controllers/manager/applyMiddlewareManager';
import applyCourse from 'controllers/clientCourses/applyCourse';
import updatePandingCourse from 'controllers/pendingCourses/updatePendingCourse';
import approvePendingCourse from 'controllers/pendingCourses/approvePendingCourse';

const employeesRouter = Router();

employeesRouter.post(
  `${Params.id}`,
  withAuth([USER_ROLES.MANAGER]),
  applyMiddlewareManager,
  applyCourse,
  updatePandingCourse,
  approvePendingCourse,
);
employeesRouter.get(`${Params.noParams}`, withAuth([USER_ROLES.MANAGER]), getEmployees);

export default employeesRouter;