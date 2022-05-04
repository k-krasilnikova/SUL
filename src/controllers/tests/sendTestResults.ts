import { NextFunction, Request, Response } from 'express';

import { TAchievments, TestRuslt } from 'interfaces/Ientities/Itest';

const unitTestResults = async (
  req: Request,
  res: Response<
    {
      result: TestRuslt;
      newSkills: TAchievments['newSkills'];
      updatedSkills: TAchievments['updatedSkills'];
      techsToAchieve: TAchievments['techsToAchieve'];
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
      achievments: { newSkills, updatedSkills, techsToAchieve },
    } = res.locals;
    res.json({ result, newSkills, updatedSkills, techsToAchieve });
  } catch (error) {
    next(error);
  }
};

export default unitTestResults;
