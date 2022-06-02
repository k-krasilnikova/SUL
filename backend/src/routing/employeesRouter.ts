import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import withAuth from 'middlewares/authMiddleware';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import { SubRoutes } from 'enums/routes';
import {
  assignEmployeeCourses,
  getEmployeeAvailableCourses,
  getEmployeeInfo,
  getEmployees,
} from 'controllers/manager';

const employeesRouter = Router();

employeesRouter.post(
  SubRoutes.assignEmployeeCourses,
  withAuth([USER_ROLES.MANAGER]),
  assignEmployeeCourses,
  adapterSender,
);
employeesRouter.get(SubRoutes.getEmployees, withAuth([USER_ROLES.MANAGER]), getEmployees);
employeesRouter.get(SubRoutes.getEmployeeInfo, withAuth([USER_ROLES.MANAGER]), getEmployeeInfo);
employeesRouter.get(
  SubRoutes.getEmployeeAvailableCourses,
  withAuth([USER_ROLES.MANAGER]),
  getEmployeeAvailableCourses,
  adapterSender,
);

export default employeesRouter;
