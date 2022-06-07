import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routes';
import {
  assignEmployeeCourses,
  getEmployeeAvailableCourses,
  getEmployeeInfo,
  getEmployees,
} from 'controllers/manager';
import { withAuth } from 'middlewares';

const employeesRouter = Router();

employeesRouter.post(
  SubRoutes.assignEmployeeCourses,
  withAuth([USER_ROLES.MANAGER]),
  assignEmployeeCourses,
);
employeesRouter.get(SubRoutes.getEmployees, withAuth([USER_ROLES.MANAGER]), getEmployees);
employeesRouter.get(SubRoutes.getEmployeeInfo, withAuth([USER_ROLES.MANAGER]), getEmployeeInfo);
employeesRouter.get(
  SubRoutes.getEmployeeAvailableCourses,
  withAuth([USER_ROLES.MANAGER]),
  getEmployeeAvailableCourses,
);

export default employeesRouter;
