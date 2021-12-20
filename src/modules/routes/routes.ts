import { Routes } from 'enums/routesEnum';
import { Router } from 'express';
import accRouters from './accountRoutes';

const routers = Router();
routers.use(`${Routes.account}`, accRouters);

export default routers;
