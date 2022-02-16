import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params, SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getAllCourses from 'controllers/courses/getAllCourses';
import getCourseById from 'controllers/courses/getCourse';
import getMaterials from 'controllers/courses/getMaterials';
import applyCourse from 'controllers/clientCourses/applyCourse';
import applyMiddlewareUser from 'controllers/user/applyMiddlewareUser';
import updatePandingCourse from 'controllers/pendingCourses/updatePendingCourse';

const coursesRouter = Router();
coursesRouter.get(
  `${Params.id}${SubRoutes.materials}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getMaterials,
);
coursesRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getCourseById,
);
coursesRouter.post(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE]),
  applyMiddlewareUser,
  applyCourse,
  updatePandingCourse,
);
coursesRouter.get(
  `${Params.noParams}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getAllCourses,
);

export default coursesRouter;
