import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import getAllSkills from 'controllers/skills/getAllSkills';
import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';

const skillsRouter = Router();

skillsRouter.get(SubRoutes.getAllSkills, withAuth([USER_ROLES.ADMIN]), getAllSkills);

export default skillsRouter;
