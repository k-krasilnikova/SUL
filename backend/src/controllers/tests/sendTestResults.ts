import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { TAchievments, TestRuslt } from 'interfaces/Ientities/Itest';
import { isError } from 'utils/typeGuards/isError';

const unitTestResults = async (
  req: Request,
  res: Response<
    {
      result: TestRuslt;
      newSkills: TAchievments['newSkills'];
      updatedSkills: TAchievments['updatedSkills'];
    },
    {
      id: string;
      result: TestRuslt;
      achievments: TAchievments;
    }
  >,
  next: TMiddlewareCall,
) => {
  try {
    const {
      result,
      achievments: { newSkills, updatedSkills },
    } = res.locals;
    res.json({ result, newSkills, updatedSkills });
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default unitTestResults;
