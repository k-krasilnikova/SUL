import { NextFunction, Request, Response } from 'express';

import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

const getClientCourses = async (
  req: Request,
  res: Response<IClientCourse[], { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    const courses = await getClientCoursesProvider(userId);
    res.json(courses);
  } catch (err) {
    next(err);
  }
};

export default getClientCourses;
