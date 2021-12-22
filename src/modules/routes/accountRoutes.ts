import { SubRoutes } from 'enums/routesEnum';
import { Router } from 'express';

import { loginController, refreshController } from 'modules/controllers/authController';

const accountRouters = Router();

accountRouters.post(`${SubRoutes.login}`, loginController);
accountRouters.get(`${SubRoutes.refresh}`, refreshController);

export default accountRouters;
