import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { getTestProvider } from 'db/providers/testProvider';
import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getTest = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const test = await getTestProvider(clientCourseId);
    if (!test.length) {
      throw new BadRequestError('No tests found.');
    }
    res.json(test);
  } catch (err) {
    next(err);
  }
};

export default getTest;
