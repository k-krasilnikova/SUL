import NotFoundError from 'classes/errors/clientErrors/NotFoundError';

import UserModel from '../models/User';

const getPendingCoursesProvider = async (managerId: string) => {
  const dbUser = await UserModel.findById(managerId)
    .populate({
      path: 'pendingCourses',
      select: 'user course status',
      populate: [
        {
          path: 'course',
          model: 'Courses',
          select: 'title',
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