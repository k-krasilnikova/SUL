import { NextFunction, Request, Response } from 'express';

const unitTestResults = async (
  req: Request,
  res: Response<
    { result: number; updatedSkills: string[]; newSkills: string[] },
    { id: string; result: number; achievments: { newSkills: string[]; updatedSkills: string[] } }
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
