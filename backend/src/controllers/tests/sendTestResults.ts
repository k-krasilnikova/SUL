import { NextFunction, Request, Response } from 'express';

import { TAAchievements, TestRuslt } from 'interfaces/Ientities/Itest';
import { TNotification } from 'interfaces/IResponse/IResponse';

const unitTestResults = async (
  req: Request,
  res: Response<
    {
      result: TestRuslt;
      newSkills: TAAchievements['newSkills'];
      updatedSkills: TAAchievements['updatedSkills'];
      techsToAchieve: TAAchievements['techsToAchieve'];
    },
    {
      id: string;
      result: TestRuslt;
      achievements: TAAchievements;
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
