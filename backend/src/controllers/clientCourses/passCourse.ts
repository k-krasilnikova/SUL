import { Request, Response } from 'express';

import { updateCourseProgress } from 'db/providers/clientCourseProvider';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const passCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { stage } = req.query;
    if (typeof stage !== 'string') {
      throw new BadRequestError('Invalid query parameters.');
    }
    const { id: clientCourseId } = req.params;
    const updt = await updateCourseProgress(clientCourseId, stage);
    res.json(updt);
  } catch (err) {
    next(err);
  }
};

export default passCourse;
