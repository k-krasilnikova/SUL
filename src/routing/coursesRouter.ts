import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params, SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getAllCourses from 'controllers/courses/getAllCourses';
import getCourseById from 'controllers/courses/getCourse';
import getAllMaterials from 'controllers/courses/getAllMaterials';
import getMaterial from 'controllers/courses/getMaterial';

const coursesRouter = Router();
coursesRouter.get(
  `${Params.noParams}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getAllCourses,
);
coursesRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getCourseById,
);
coursesRouter.get(
  `${SubRoutes.materials}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getAllMaterials,
);
coursesRouter.get(
  `${SubRoutes.materials}${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getMaterial,
);

export default coursesRouter;
