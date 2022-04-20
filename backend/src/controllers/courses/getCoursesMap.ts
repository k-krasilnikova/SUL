import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import { getUserProvider, getUserStackProvider } from 'db/providers/userProvider';
import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';
import { addMissingCoursesMapElements, generateCoursesMapResponse } from 'utils/normaliser/courses';
import { getCourseStatusProvider } from 'db/providers/courseProvider';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

const getCoursesMap = async (
  req: Request,
  res: Response<never, { id: string; results: ICoursesMapResponse }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const { rank: userRank } = await getUserProvider(userId);
    const userStack = await getUserStackProvider(userId);

    const userStackWithStatuses = await Promise.all(
      userStack.map(async (stackMember) => {
        const updatedRelatedCourses = await Promise.all(
          stackMember.member.relatedCourses.map(async (course) => ({
            ...course,
            status: await getCourseStatusProvider(
              convertToTypeUnsafe<ObjectId>(course._id),
              userId,
            ),
          })),
        );
        const newMember = { ...stackMember };
        newMember.member.relatedCourses = updatedRelatedCourses;
        return newMember;
      }),
    );

    const responseCascade = generateCoursesMapResponse(userStackWithStatuses, userRank);

    const filledResponse = addMissingCoursesMapElements(responseCascade);

    res.locals.results = filledResponse;

    next();
  } catch (error) {
    next(error);
  }
};

export default getCoursesMap;
