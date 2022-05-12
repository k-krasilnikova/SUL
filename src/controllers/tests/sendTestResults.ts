import { NextFunction, Request, Response } from 'express';

import { TAchievements, TestRuslt } from 'interfaces/Ientities/Itest';
import { TNotification } from 'interfaces/IResponse/IResponse';

const unitTestResults = async (
  req: Request,
  res: Response<
    {
      result: TestRuslt;
      newSkills: TAchievements['newSkills'];
      updatedSkills: TAchievements['updatedSkills'];
      techsToAchieve: TAchievements['techsToAchieve'];
    },
    {
      id: string;
      result: TestRuslt;
      achievements: TAchievements;
    } & TNotification
  >,
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

export default unitTestResults;
