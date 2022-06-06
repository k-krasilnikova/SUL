import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import {
  getEditCoursePayload,
  preparingCourseData,
  addCourse,
  deleteCourse,
  editCourse,
} from 'controllers/admin';
import { applyCourse } from 'controllers/clientCourses';
import { getAllCourses, getCourseById, getCoursesMap, getMaterials } from 'controllers/courses';
import { addNotification } from 'controllers/notifications';

const coursesRouter = Router();
coursesRouter.get(
  SubRoutes.getCourseMaterials,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getMaterials,
);
coursesRouter.get(
  SubRoutes.getCoursesMap,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  getCoursesMap,
);
coursesRouter.get(
  SubRoutes.getCourse,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getCourseById,
);
coursesRouter.post(
  SubRoutes.applyCourse,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER]),
  applyCourse,
  addNotification,
);
coursesRouter.get(
  SubRoutes.getCourses,
  withAuth([USER_ROLES.EMPLOYEE, USER_ROLES.ADMIN, USER_ROLES.MANAGER]),
  getAllCourses,
);
coursesRouter.get(
  SubRoutes.getEditCoursePayload,
  withAuth([USER_ROLES.ADMIN]),
  getEditCoursePayload,
);
coursesRouter.put(SubRoutes.updateCourse, withAuth([USER_ROLES.ADMIN]), editCourse);
coursesRouter.post(
  SubRoutes.createCourse,
  withAuth([USER_ROLES.ADMIN]),
  preparingCourseData,
  addCourse,
);
coursesRouter.delete(`${SubRoutes.deleteCourse}`, withAuth([USER_ROLES.ADMIN]), deleteCourse);

export default coursesRouter;
