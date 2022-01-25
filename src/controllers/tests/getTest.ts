import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const getTest = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const test = await getTestProvider(clientCourseId);
    res.json(test);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default getTest;
