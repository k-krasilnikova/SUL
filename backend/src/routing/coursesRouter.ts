import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import getAllCourses from 'controllers/courses/getAllCourses';
import getCourseById from 'controllers/courses/getCourse';
import getMaterials from 'controllers/courses/getMaterials';
import applyCourse from 'controllers/clientCourses/applyCourse';
import updatePendingCourse from 'controllers/pendingCourses/updatePendingCourse';
import adapterUser from 'controllers/user/adapterUser';
import adapterSender from 'controllers/pendingCourses/adapterSender';
import deleteCourse from 'controllers/admin/deleteCourse';
import editCourse from 'controllers/admin/editCourse';
import addCourse from 'controllers/admin/addCourse';

const coursesRouter = Router();
coursesRouter.get(
  SubRoutes.getCourseMaterials,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getMaterials,
);
coursesRouter.get(
  SubRoutes.getCourse,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getCourseById,
);
coursesRouter.post(
  SubRoutes.applyCourse,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  adapterUser,
  applyCourse,
  updatePendingCourse,
  adapterSender,
);
coursesRouter.get(
  SubRoutes.getCourses,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getAllCourses,
);
coursesRouter.put(SubRoutes.updateCourse, withAuth([USER_ROLES.ADMIN]), editCourse, adapterSender);

coursesRouter.post(SubRoutes.createCourse, withAuth([USER_ROLES.ADMIN]), addCourse, adapterSender);

coursesRouter.delete(`${SubRoutes.deleteCourse}`, withAuth([USER_ROLES.ADMIN]), deleteCourse);

export default coursesRouter;
