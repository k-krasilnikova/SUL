import { NextFunction, Request, Response } from 'express';

import { getUserProvider, getUserStackProvider } from 'db/providers/userProvider';
import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';
import {
  addMissingCoursesMapElements,
  fillStackWithStatuses,
  generateCoursesMapResponse,
} from 'utils/normaliser/courses';

const getCoursesMap = async (
  req: Request,
  res: Response<never, { id: string; results: ICoursesMapResponse }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const { rank: userRank } = await getUserProvider(userId);
    const userStack = await getUserStackProvider(userId);

    const userStackWithStatuses = await fillStackWithStatuses(userStack, userId);

    const responseCascade = generateCoursesMapResponse(userStackWithStatuses, userRank);

    const filledResponse = addMissingCoursesMapElements(responseCascade);

    res.locals.results = filledResponse;

    next();
  } catch (error) {
    next(error);
  }
};

export default getCoursesMap;
