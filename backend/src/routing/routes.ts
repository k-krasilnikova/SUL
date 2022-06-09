import { Router } from 'express';

import { Routes } from 'enums/routes';

import accountRouter from './accountRouter';
import userRouter from './userRouter';
import coursesRouter from './coursesRouter';
import clientCoursesRouter from './clientCoursesRouter';
import pendingCoursesRouter from './pendingCourses';
import employeesRouter from './employeesRouter';
import skillsRouter from './skillsRouter';
import testsRouter from './testsRouter';

const routers = Router();

routers.use(`${Routes.account}`, accountRouter);
routers.use(`${Routes.clientCourses}`, clientCoursesRouter);
routers.use(`${Routes.pendingCourses}`, pendingCoursesRouter);
routers.use(`${Routes.users}`, userRouter);
routers.use(`${Routes.courses}`, coursesRouter);
routers.use(`${Routes.employees}`, employeesRouter);
routers.use(`${Routes.skills}`, skillsRouter);
routers.use(`${Routes.tests}`, testsRouter);

export default routers;
