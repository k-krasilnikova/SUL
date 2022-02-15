import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const startCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.approved) {
      throw new BadRequestError("Course hasn't been approved yet.");
    }
    await updateCourseStatus(clientCourseId, CourseStatus.started);
    res.json({ start: true });
  } catch (err) {
    next(err);
  }
};

export default startCourse;