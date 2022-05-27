import { NextFunction } from 'express';

import { TPassTestRequest, TPassTestResponse } from 'interfaces/requests/tests/passTest';

const sendTestResults = async (
  req: TPassTestRequest,
  res: TPassTestResponse,
  next: NextFunction,
) => {
  try {
    const {
      result,
      achievements: { newSkills, updatedSkills, techsToAchieve },
    } = res.locals;
    res.json({ result, newSkills, updatedSkills, techsToAchieve });
  } catch (error) {
    next(error);
  }
};

export default sendTestResults;
