import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { convertToCourseInfo } from 'utils/typeConversion/courses/coursesTypeConversions';

const getClientCourseById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const course = await getClientCourseProvider(clientCourseId);

    const clientCourseWithCourseInfo = await convertToCourseInfo(course.course);

    res.json({ ...clientCourseWithCourseInfo, status: course.status });
  } catch (err) {
    next(err);
  }
};

export default getClientCourseById;
