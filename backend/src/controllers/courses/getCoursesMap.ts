import { NextFunction, Request, Response } from 'express';

import { getCoursesByIdsWithStatusProvider } from 'db/providers/courseProvider';
import { getUserProvider, getUserStackProvider } from 'db/providers/userProvider';
import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';
import { getStackCoursesUniqueIds } from 'utils/normaliser/stack';
import { addMissingCoursesMapElements, generateCoursesMapResponse } from 'utils/normaliser/courses';

const getCoursesMap = async (
  req: Request,
  res: Response<never, { id: string; results: ICoursesMapResponse }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const { rank: userRank } = await getUserProvider(userId);
    const userStack = await getUserStackProvider(userId);

    const coursesIds = getStackCoursesUniqueIds(userStack);

    const relatedCourses = await getCoursesByIdsWithStatusProvider(coursesIds, userId);

    const responseCascade = generateCoursesMapResponse(relatedCourses, userRank);

    const filledResponse = addMissingCoursesMapElements(responseCascade);

    res.locals.results = filledResponse;

    next();
  } catch (error) {
    next(error);
  }
};

export default getCoursesMap;
