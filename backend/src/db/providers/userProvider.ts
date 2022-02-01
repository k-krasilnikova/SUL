import UserModel from 'db/models/User';
import { ObjectId } from 'mongoose';

const getUserProvider = async (userId: string) => {
  const dbUser = await UserModel.findById(userId).lean();
  if (!dbUser) {
    throw new Error('user not found');
  }
  return dbUser;
};

const updatePendingFieldCourses = async (
  managerId: ObjectId,
  applyedCourseId: string | undefined,
) => {
  if (!applyedCourseId) {
    throw new Error('applied course is missing');
  }
  await UserModel.updateOne({ _id: managerId }, { $push: { pendingCourses: applyedCourseId } });
};

export { getUserProvider, updatePendingFieldCourses };
