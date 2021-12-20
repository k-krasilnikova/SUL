import { SubRoutes } from 'enums/routesEnum';
import { Router } from 'express';

const accRouters = Router();

accRouters.use(`${SubRoutes.login}`);

export default accRouters;
