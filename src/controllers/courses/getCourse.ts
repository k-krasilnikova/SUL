import { NextFunction, Request, Response } from 'express';

import { getCourseProvider } from 'db/providers/courseProvider';
import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';
import prepareSimilarCourses from 'utils/normaliser/prepareSimilarCourses';

const getCourseById = async (
  req: Request,
  res: Response<ICourseWithStatus, { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const { id: userId } = res.locals;

    const course = await getCourseProvider(courseId, userId);

    const preparedSimilarCourses = await prepareSimilarCourses(course.similarCourses);

    res.json({ ...course, similarCourses: preparedSimilarCourses });
  } catch (error) {
    next(error);
  }
};

export default getCourseById;
