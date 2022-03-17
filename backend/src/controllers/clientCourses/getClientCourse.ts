import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { convertToCourseInfo } from 'utils/typeConversion/courses/coursesTypeConversions';

const getClientCourseById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const clientCourse = await getClientCourseProvider(clientCourseId);

    const courseInfo = await convertToCourseInfo(clientCourse.course);

    res.json({ ...clientCourse, course: courseInfo });
  } catch (err) {
    next(err);
  }
};

export default getClientCourseById;
