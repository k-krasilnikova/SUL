import { NextFunction } from 'express';

import {
  TPassCourseRequest,
  TPassCourseResponse,
} from 'interfaces/requests/clientCourses/passCourse';
import { getStatusProvider, updateCourseProgress } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/courses';
import { BadRequestError } from 'classes/errors/clientErrors';

const passCourse = async (
  req: TPassCourseRequest,
  res: TPassCourseResponse,
  next: NextFunction,
) => {
  try {
    const { stage } = req.query;
    const { id: clientCourseId } = req.params;

    if (typeof stage !== 'string') {
      throw new BadRequestError('Invalid query parameters. Stage must be a string value.');
    }

    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.started) {
      throw new BadRequestError('Course is not in progress.');
    }

    const updt = await updateCourseProgress(clientCourseId, stage);

    res.json(updt);
  } catch (err) {
    next(err);
  }
};

export default passCourse;
