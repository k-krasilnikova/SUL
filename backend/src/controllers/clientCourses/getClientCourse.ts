import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import prepareSimilarCourses from 'utils/normaliser/prepareSimilarCourses';

const getClientCourseById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const clientCourse = await getClientCourseProvider(clientCourseId);

    const preparedSimilarCourses = await prepareSimilarCourses(clientCourse.course.similarCourses);

    res.json({
      ...clientCourse,
      course: { ...clientCourse.course, similarCourses: preparedSimilarCourses },
    });
  } catch (err) {
    next(err);
  }
};

export default getClientCourseById;
