import UserModel from '../models/User';

const getPendingCoursesProvider = async (userId: string) => {
  const dbUser = await UserModel.findById(userId)
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
    throw new Error('user not found');
  }
  return dbUser;
};

export { getPendingCoursesProvider };
