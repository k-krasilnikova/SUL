import { getUserProvider } from 'db/providers/userProvider';
import { NextFunction, Request, Response } from 'express';
import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';
import { getStackCoursesUniqueIds } from 'utils/normaliser/stack';

const getCoursesMap = async (
  req: Request,
  res: Response<never, { id: string; results: ICoursesMapResponse }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const { rank: userRank, stack: userStack } = await getUserProvider(userId);

    const courseIds = getStackCoursesUniqueIds(userStack);

    next();
  } catch (error) {
    next(error);
  }
};

export default getCoursesMap;
