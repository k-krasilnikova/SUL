import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routesEnum';
import { getAllSkills } from 'controllers/skills';
import { withAuth } from 'middlewares';

const skillsRouter = Router();

skillsRouter.get(SubRoutes.getAllSkills, withAuth([USER_ROLES.ADMIN]), getAllSkills);

export default skillsRouter;
