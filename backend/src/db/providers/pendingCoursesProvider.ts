import { IUser, TPendingCourses } from 'interfaces/entities/users';
import { NotFoundError } from 'classes/errors/clientErrors';

import UserModel from '../models/User';

const getPendingCoursesProvider = async (
  managerId: string,
): Promise<{ pendingCourses: TPendingCourses }> => {
  const dbUser: Omit<IUser, 'pendingCourses'> & { pendingCourses: TPendingCourses } =
    await UserModel.findById(managerId)
      .populate({
        path: 'pendingCourses',
        select: 'user course status date',
        populate: [
          {
            path: 'course',
            model: 'Courses',
            select: '_id title avatar',
          },
          {
            path: 'user',
            model: 'User',
            select: 'firstName lastName position avatar',
          },
        ],
      })
      .lean();
  if (!dbUser) {
    throw new NotFoundError('User not found.');
  }
  return dbUser;
};

export { getPendingCoursesProvider };
