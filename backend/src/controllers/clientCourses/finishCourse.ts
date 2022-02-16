import { NextFunction, Request, Response } from 'express';

import CourseStatus from 'enums/coursesEnums';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const finishCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.successful) {
      throw new BadRequestError("You haven't passed the test.");
    }
    await updateCourseStatus(clientCourseId, CourseStatus.completed);
    res.json({ finish: true });
  } catch (err) {
    next(err);
  }
};

export default finishCourse;
