import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routesEnum';
import withAuth from 'middlewares/authMiddleware';
import { getTest } from 'controllers/admin';

const testsRouter = Router();

testsRouter.get(SubRoutes.getTest, withAuth([USER_ROLES.ADMIN]), getTest);

export default testsRouter;
