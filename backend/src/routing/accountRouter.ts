import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import { loginController, refreshController } from 'modules/auth/authController';

const accountRouter = Router();

accountRouter.post(`${SubRoutes.login}`, loginController);
accountRouter.get(`${SubRoutes.refresh}`, refreshController);

export default accountRouter;
