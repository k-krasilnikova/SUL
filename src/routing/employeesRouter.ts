import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getEmployees from 'controllers/manager/getEmployees';
import adapterManager from 'controllers/manager/adapterManager';
import applyCourse from 'controllers/clientCourses/applyCourse';
import updatePendingCourse from 'controllers/pendingCourses/updatePendingCourse';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import getEmployeeInfo from 'controllers/manager/getEmployeeInfo';

const employeesRouter = Router();

employeesRouter.post(
  `${Params.id}`,
  withAuth([USER_ROLES.MANAGER]),
  adapterManager,
  applyCourse,
  updatePendingCourse,
  adapterSender,
);
employeesRouter.get(`${Params.noParams}`, withAuth([USER_ROLES.MANAGER]), getEmployees);
employeesRouter.get(`${Params.id}`, withAuth([USER_ROLES.MANAGER]), getEmployeeInfo);

export default employeesRouter;
