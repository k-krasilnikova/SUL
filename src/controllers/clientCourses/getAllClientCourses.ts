import { NextFunction, Request, Response } from 'express';

import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { IQueryCourses } from 'interfaces/ICourses/IQueryCourses';

import { convertToCourseInfo } from 'utils/typeConversion/courses/coursesTypeConversions';

const getClientCourses = async (
  req: Request,
  res: Response<unknown, { id: string }>,
  next: NextFunction,
) => {
  try {
    const params: IQueryCourses = req.query;
    const { id: userId } = res.locals;


    const courses = await getClientCoursesProvider(userId, { ...params });

    res.json(courses);

    const clientCourses = await getClientCoursesProvider(userId);

    const clientCoursesWithCoursesInfo = await Promise.all(
      clientCourses.map(async (clCourse) => {
        const courseInfoPopulated = await convertToCourseInfo(clCourse.course);

        return { ...clCourse, course: courseInfoPopulated };
      }),
    );

    res.json(clientCoursesWithCoursesInfo);
  } catch (err) {
    next(err);
  }
};

export default getClientCourses;
