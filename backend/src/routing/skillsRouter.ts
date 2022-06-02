import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routes';
import withAuth from 'middlewares/authMiddleware';
import { getAllSkills } from 'controllers/skills';

const skillsRouter = Router();

skillsRouter.get(SubRoutes.getAllSkills, withAuth([USER_ROLES.ADMIN]), getAllSkills);

export default skillsRouter;
