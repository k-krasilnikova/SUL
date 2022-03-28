import { NextFunction, Request, Response } from 'express';

import { TPendingCourses, IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';
import { mapPendingCourses } from 'utils/normaliser/pendingCourses';

const getPendingCourses = async (
  req: Request,
  res: Response<TPendingCourses, { id: string }>,
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
