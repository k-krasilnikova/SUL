import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import login from 'controllers/auth/login';
import refresh from 'controllers/auth/refresh';
import logout from 'controllers/auth/logout';

const accountRouter = Router();

accountRouter.post(`${SubRoutes.login}`, login);
accountRouter.get(`${SubRoutes.logout}`, logout);
accountRouter.get(`${SubRoutes.refresh}`, refresh);

export default accountRouter;
