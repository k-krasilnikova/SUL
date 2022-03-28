import { NextFunction, Request, Response } from 'express';

import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { getTestProvider } from 'db/providers/testProvider';
import { aggregateNormolizer } from 'utils/normaliser/aggregateNormalizer';
import { TestDb } from 'interfaces/Ientities/Itest';

const getTestTime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;

    const test = await getTestProvider(clientCourseId);
    if (!test.length) {
      throw new NotFoundError('No tests found.');
    }
    res.json(aggregateNormolizer<TestDb>(test).test.timeout);
  } catch (err) {
    next(err);
  }
};

export default getTestTime;
