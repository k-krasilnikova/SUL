import { Request, Response } from 'express';

import { getStatusProvider, updateCourseProgress } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const passCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { stage } = req.query;
    if (typeof stage !== 'string') {
      throw new BadRequestError('Invalid query parameters.');
    }
    const { id: clientCourseId } = req.params;
    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.started) {
      res.json({ message: 'course is not in progress' });
      return;
    }
    const updt = await updateCourseProgress(clientCourseId, stage);
    res.json(updt);
  } catch (err) {
    next(err);
  }
};

export default passCourse;
