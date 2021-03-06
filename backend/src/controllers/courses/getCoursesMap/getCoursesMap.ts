import { NextFunction } from 'express';

import {
  TGetCoursesMapRequest,
  TGetCoursesMapResponse,
} from 'interfaces/requests/courses/getCoursesMap';
import { getUserProvider, getUserStackProvider } from 'db/providers/userProvider';

import {
  addMissingCoursesMapElements,
  fillStackWithStatuses,
  generateCoursesMapResponse,
} from './utils/mappers';
import { sortCoursesMapResponse } from './utils/sorts';

const getCoursesMap = async (
  req: TGetCoursesMapRequest,
  res: TGetCoursesMapResponse,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const { rank: userRank } = await getUserProvider(userId);
    const userStack = await getUserStackProvider(userId);

    const userStackWithStatuses = await fillStackWithStatuses(userStack, userId);

    const responseCascade = await generateCoursesMapResponse(
      userStackWithStatuses,
      userRank,
      userId,
    );

    const filledResponse = addMissingCoursesMapElements(responseCascade);

    const sortedCoursesMapResponse = sortCoursesMapResponse(filledResponse);

    res.json(sortedCoursesMapResponse);
  } catch (error) {
    next(error);
  }
};

export default getCoursesMap;
