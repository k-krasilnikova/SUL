import { NextFunction } from 'express';

import { TGetTestTimeRequest, TGetTestTimeResponse } from 'interfaces/requests/tests/getTestTime';
import { TestDb } from 'interfaces/entities/test';
import { getTestProvider } from 'db/providers/testProvider';
import { aggregateNormalizer } from 'utils/normalizer/aggregate';
import { NotFoundError } from 'classes/errors/clientErrors';

const getTestTime = async (
  req: TGetTestTimeRequest,
  res: TGetTestTimeResponse,
  next: NextFunction,
) => {
  try {
    const { id: clientCourseId } = req.params;

    const test = await getTestProvider(clientCourseId);
    if (!test.length) {
      throw new NotFoundError('Test not found.');
    }

    res.json(aggregateNormalizer<TestDb>(test).test.timeout);
  } catch (err) {
    next(err);
  }
};

export default getTestTime;
