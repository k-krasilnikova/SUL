import { Router } from 'express';

import { SubRoutes } from 'enums/routesEnum';
import { loginController, refreshController } from 'modules/controllers/authController';

const accountRouters = Router();

accountRouters.post(`${SubRoutes.login}`, loginController);
accountRouters.get(`${SubRoutes.refresh}`, refreshController);

export default accountRouters;
