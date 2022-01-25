import { Request, Response } from 'express';

import { updateCourseProgress } from 'db/providers/clientCourseProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const passCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { stage } = req.query;
    if (typeof stage !== 'string') {
      res.json({ message: 'invalid query params' });
      return;
    }
    const { id: clientCourseId } = req.params;
    const c = await updateCourseProgress(clientCourseId, stage);
    res.json(c);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default passCourse;
