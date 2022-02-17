import { NextFunction, Request, Response } from 'express';

import { TAchievments, TestRuslt } from 'interfaces/Ientities/Itest';

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
  next: NextFunction,
) => {
  try {
    const {
      result,
      achievments: { newSkills, updatedSkills },
    } = res.locals;
    res.json({ result, newSkills, updatedSkills });
  } catch (error) {
    next(error);
  }
};

export default unitTestResults;
