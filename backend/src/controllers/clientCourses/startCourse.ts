import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';

const startCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.approved) {
      throw new Error('Course is not approved');
    }
    await updateCourseStatus(clientCourseId, CourseStatus.started);
    res.json({ start: true });
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default startCourse;
