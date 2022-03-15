import { NextFunction, Request, Response } from 'express';

import { getCourseProvider } from 'db/providers/courseProvider';
import { convertToCourseInfo } from 'utils/typeConversion/courses/coursesTypeConversions';
import { ICourseInfo } from 'interfaces/ICourses/IQueryCourses';

const getCourseById = async (
  req: Request,
  res: Response<ICourseInfo, { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const { id: userId } = res.locals;

    const course = await getCourseProvider(courseId, userId);

    const courseInfo = convertToCourseInfo(course);

    res.json(courseInfo);
  } catch (error) {
    next(error);
  }
};

export default getCourseById;
