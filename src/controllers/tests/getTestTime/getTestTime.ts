import { NextFunction } from 'express';

import { TGetTestTimeRequest, TGetTestTimeResponse } from 'interfaces/requests/tests/getTestTime';
import { TestDb } from 'interfaces/entities/test';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { getTestProvider } from 'db/providers/testProvider';
import { aggregateNormolizer } from 'utils/normaliser/aggregateNormalizer';

const getTestTime = async (
  req: TGetTestTimeRequest,
  res: TGetTestTimeResponse,
  next: NextFunction,
) => {
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
