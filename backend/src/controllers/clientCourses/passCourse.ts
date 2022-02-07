import { Request, Response } from 'express';

import { getStatusProvider, updateCourseProgress } from 'db/providers/clientCourseProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import CourseStatus from 'enums/coursesEnums';

const passCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { stage } = req.query;
    if (typeof stage !== 'string') {
      res.json({ message: 'invalid query params' });
      return;
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
    if (isError(err)) {
      next(err);
    }
  }
};

export default passCourse;
