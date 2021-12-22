import { Routes } from 'enums/routesEnum';
import { Router } from 'express';

import accountRouters from './accountRoutes';

const routers = Router();

routers.use(`${Routes.account}`, accountRouters);

export default routers;
