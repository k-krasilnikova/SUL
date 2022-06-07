import { Router } from 'express';

import { USER_ROLES } from 'config/constants';
import { SubRoutes } from 'enums/routes';
import { getTest } from 'controllers/admin';
import { withAuth } from 'middlewares';

const testsRouter = Router();

testsRouter.get(SubRoutes.getTest, withAuth([USER_ROLES.ADMIN]), getTest);

export default testsRouter;
