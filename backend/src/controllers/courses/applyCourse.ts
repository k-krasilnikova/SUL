import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { applyCourseProvider } from 'db/providers/courseProvider';

const applyCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: courseId } = req.body;
    const { id: userId } = res.locals;
    const courses = await applyCourseProvider(courseId, userId);
    res.json(courses);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default applyCourse;
