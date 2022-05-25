import { NextFunction } from 'express';

import {
  TGetPendingCoursesRequest,
  TGetPendingCoursesResponse,
} from 'interfaces/requests/pendingCourses/getPendingCourses';
import { TPendingCourses, IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';
import { mapPendingCourses } from 'utils/normaliser/pendingCourses';

const getPendingCourses = async (
  req: TGetPendingCoursesRequest,
  res: TGetPendingCoursesResponse,
  next: NextFunction,
) => {
  const { id: userId } = res.locals;
  try {
    const { pendingCourses }: IUser = await getPendingCoursesProvider(userId);

    const mappedPendingCourses: TPendingCourses = mapPendingCourses(pendingCourses);

    res.json(mappedPendingCourses);
  } catch (error) {
    next(error);
  }
};

export default getPendingCourses;
