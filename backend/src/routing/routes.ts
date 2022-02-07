import { Router } from 'express';

import { Routes } from 'enums/routesEnum';

import accountRouter from './accountRouter';
import userRouter from './userRouter';
import coursesRouter from './coursesRouter';
import clientCoursesRouter from './clientCoursesRouter';
import pendingCoursesRouter from './pendingCourses';
import testRouter from './testRouter';

const routers = Router();

routers.use(`${Routes.account}`, accountRouter);
routers.use(`${Routes.clientCourses}`, clientCoursesRouter);
routers.use(`${Routes.pendingCourses}`, pendingCoursesRouter);
routers.use(`${Routes.users}`, userRouter);
routers.use(`${Routes.courses}`, coursesRouter);
routers.use(`${Routes.test}`, testRouter);

export default routers;
