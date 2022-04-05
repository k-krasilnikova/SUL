import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import withAuth from 'middlewares/authMiddleware';
import getEmployees from 'controllers/manager/getEmployees';
import adapterManager from 'controllers/manager/adapterManager';
import applyCourse from 'controllers/clientCourses/applyCourse';
import updatePendingCourse from 'controllers/pendingCourses/updatePendingCourse';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import getEmployeeInfo from 'controllers/manager/getEmployeeInfo';
import { SubRoutes } from 'enums/routesEnum';

const employeesRouter = Router();

employeesRouter.post(
  SubRoutes.applyEmployeeCourse,
  withAuth([USER_ROLES.MANAGER]),
  adapterManager,
  applyCourse,
  updatePendingCourse,
  adapterSender,
);
employeesRouter.get(SubRoutes.getEmployees, withAuth([USER_ROLES.MANAGER]), getEmployees);
employeesRouter.get(SubRoutes.getEmployeeInfo, withAuth([USER_ROLES.MANAGER]), getEmployeeInfo);

export default employeesRouter;
