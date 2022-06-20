import { NextFunction } from 'express';

import {
  TGetClientCourseRequest,
  TGetClientCourseResponse,
} from 'interfaces/requests/clientCourses/getClientCourse';
import {
  getClientCourseByCourseAndUser,
  getClientCourseProvider,
} from 'db/providers/clientCourseProvider';
import prepareSimilarCourses from 'utils/normalizer/prepareSimilarCourses';

import { mapClientCourse } from './utils/mappers';

const getClientCourseById = async (
  req: TGetClientCourseRequest,
  res: TGetClientCourseResponse,
  next: NextFunction,
) => {
  try {
    let clientCourse;
    const { id: userId } = res.locals;
    const { id: courseId } = req.params;
    const { byCommonCourse } = req.query;
    if (byCommonCourse === String(true)) {
      clientCourse = await getClientCourseByCourseAndUser(courseId, userId);
    } else {
      clientCourse = await getClientCourseProvider(courseId);
    }

    const preparedSimilarCourses = await prepareSimilarCourses(clientCourse.course.similarCourses);

    const payload = mapClientCourse(clientCourse, preparedSimilarCourses);

    res.json(payload);
  } catch (err) {
    next(err);
  }
};

export default getClientCourseById;
