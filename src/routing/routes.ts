import { Router } from 'express';

import { Routes } from 'enums/routesEnum';

import accountRouter from './accountRouter';
import userRouter from './userRouter';
import coursesRouter from './coursesRouter';

const routers = Router();

routers.use(`${Routes.account}`, accountRouter);
routers.use(`${Routes.users}`, userRouter);
routers.use(`${Routes.courses}`, coursesRouter);

export default routers;
