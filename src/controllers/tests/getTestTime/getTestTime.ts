import { NextFunction } from 'express';

import { TGetTestTimeRequest, TGetTestTimeResponse } from 'interfaces/requests/tests/getTestTime';
import { TestDb } from 'interfaces/Ientities/Itest';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { getTestProvider } from 'db/providers/testProvider';
import { aggregateNormalizer } from 'utils/normalizer/aggregate';

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

    res.json(aggregateNormalizer<TestDb>(test).test.timeout);
  } catch (err) {
    next(err);
  }
};

export default getTestTime;
