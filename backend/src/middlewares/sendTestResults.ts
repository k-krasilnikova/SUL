import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const unitTestResults = async (
  req: Request,
  res: Response<
    { result: number; updatedSkills: string[]; newSkills: string[] },
    { id: string; result: number; achievments: { newSkills: string[]; updatedSkills: string[] } }
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
