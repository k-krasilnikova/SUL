import { NextFunction, Request, Response } from 'express';

import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { convertToCourseInfo } from 'utils/typeConversion/courses/coursesTypeConversions';

const getClientCourses = async (
  req: Request,
  res: Response<unknown, { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
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
