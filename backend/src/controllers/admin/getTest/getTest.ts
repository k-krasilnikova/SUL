import { NextFunction } from 'express';

import { getTestById } from 'db/providers/testProvider';
import { TGetTestRequest, TGetTestResponse } from 'interfaces/requests/admin/getTest';

const getTest = async (req: TGetTestRequest, res: TGetTestResponse, next: NextFunction) => {
  try {
    const { id: testId } = req.params;

    const test = await getTestById(testId);

    res.json(test);
  } catch (error) {
    next(error);
  }
};

export default getTest;
