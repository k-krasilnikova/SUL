import { Router } from 'express';
import { Params } from '../enums/routesEnum';
import withAuth from '../middlewares/authMiddleware';
import { USER_ROLES } from '../config/constants';
import getPendingCourses from '../controllers/pendingCourses/getPendingCourses';

const pendingCoursesRouter = Router();

pendingCoursesRouter.get(`${Params.noParams}`, withAuth([USER_ROLES.MANAGER]), getPendingCourses);

export default pendingCoursesRouter;
