import { NextFunction } from 'express';

import {
  TGetPendingCoursesRequest,
  TGetPendingCoursesResponse,
} from 'interfaces/requests/pendingCourses/getPendingCourses';
import { TPendingCourses } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';

import { mapPendingCourses } from './utils/mappers';

const getPendingCourses = async (
  req: TGetPendingCoursesRequest,
  res: TGetPendingCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    
    const { pendingCourses } = await getPendingCoursesProvider(userId);
    
    const mappedPendingCourses: TPendingCourses = mapPendingCourses(pendingCourses);

    res.json(mappedPendingCourses);
  } catch (error) {
    next(error);
  }
};

export default getPendingCourses;
