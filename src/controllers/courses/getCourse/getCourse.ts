import { NextFunction } from 'express';

import { TGetCourseRequest, TGetCourseResponse } from 'interfaces/requests/courses/getCourse';
import { getCourseProvider } from 'db/providers/courseProvider';
import prepareSimilarCourses from 'utils/normaliser/prepareSimilarCourses';
import { mapCourse } from './utils/mappers';

const getCourseById = async (
  req: TGetCourseRequest,
  res: TGetCourseResponse,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const { id: userId } = res.locals;

    const course = await getCourseProvider(courseId, userId);

    const preparedSimilarCourses = await prepareSimilarCourses(course.similarCourses);

    const payload = mapCourse(course, preparedSimilarCourses);

    res.json(payload);
  } catch (error) {
    next(error);
  }
};

export default getCourseById;
