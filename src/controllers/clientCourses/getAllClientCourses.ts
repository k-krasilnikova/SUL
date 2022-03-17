import { NextFunction, Request, Response } from 'express';

import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { IQueryCourses } from 'interfaces/ICourses/IQueryCourses';

const getClientCourses = async (
  req: Request,
  res: Response<IClientCoursePopulated[], { id: string }>,
  next: NextFunction,
) => {
  try {
    const params: IQueryCourses = req.query;
    const { id: userId } = res.locals;

    const courses = await getClientCoursesProvider(userId, { ...params });

    res.json(courses);
  } catch (err) {
    next(err);
  }
};

export default getClientCourses;
