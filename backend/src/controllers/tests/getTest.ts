import { NextFunction, Request, Response } from 'express';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { getTestProvider } from 'db/providers/testProvider';

const getTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const test = await getTestProvider(clientCourseId);
    if (!test.length) {
      throw new NotFoundError('No tests found.');
    }
    res.json(test);
  } catch (err) {
    next(err);
  }
};

export default getTest;
