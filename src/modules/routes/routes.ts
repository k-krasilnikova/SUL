import { Router } from 'express';

import { Routes } from 'enums/routesEnum';

import accountRouters from './accountRoutes';

const routers = Router();

routers.use(`${Routes.account}`, accountRouters);

export default routers;
