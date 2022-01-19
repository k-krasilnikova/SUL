import { updateCourseProgress } from 'db/providers/clientCourseProvider';
import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const passCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { stage } = req.params;
    const { id: clientCourseId } = req.params;
    const updatedCourse = await updateCourseProgress(clientCourseId, stage);
    res.json(updatedCourse);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default passCourse;
