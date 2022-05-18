import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import withAuth from 'middlewares/authMiddleware';
import getEmployees from 'controllers/manager/getEmployees';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import getEmployeeInfo from 'controllers/manager/getEmployeeInfo';
import { SubRoutes } from 'enums/routesEnum';
import assignEmployeeCourses from 'controllers/manager/assignEmployeeCourses';
import getEmployeeAvailableCourses from 'controllers/manager/getEmployeeAvailableCourses';

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