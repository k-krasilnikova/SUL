import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { Params, SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getAllCourses from 'controllers/courses/getAllCourses';
import getCourseById from 'controllers/courses/getCourse';
import getAllMaterials from 'controllers/materials/getAllMaterials';
import getMaterial from 'controllers/materials/getMaterial';

const coursesRouter = Router();
coursesRouter.get(
  `${Params.id}${SubRoutes.materials}${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getMaterial,
);
coursesRouter.get(
  `${SubRoutes.materials}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getAllMaterials,
);
coursesRouter.get(
  `${Params.id}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getCourseById,
);
coursesRouter.get(
  `${Params.noParams}`,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getAllCourses,
);

export default coursesRouter;
