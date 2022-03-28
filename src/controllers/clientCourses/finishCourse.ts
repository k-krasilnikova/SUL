import { NextFunction, Request, Response } from 'express';

import CourseStatus from 'enums/coursesEnums';
import { getStatusProvider, updateClientCourseField } from 'db/providers/clientCourseProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { COURSE_FILEDS } from 'config/constants';

const finishCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.successful && status !== CourseStatus.assessment) {
      await updateClientCourseField(clientCourseId, COURSE_FILEDS.status, CourseStatus.failed);
      throw new BadRequestError("You haven't passed the test.");
    }
    if (status !== CourseStatus.assessment) {
      await updateClientCourseField(clientCourseId, COURSE_FILEDS.status, CourseStatus.completed);
    }
    res.json({ finish: true });
  } catch (err) {
    next(err);
  }
};

export default finishCourse;
