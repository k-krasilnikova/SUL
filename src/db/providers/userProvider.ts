import { ObjectId } from 'mongoose';

import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UserModel from 'db/models/User';

const getUserProvider = async (userId: string) => {
  const dbUser = await UserModel.findById(userId).lean();
  if (!dbUser) {
    throw new NotFoundError('User not found.');
  }
  return dbUser;
};

const updatePendingFieldCourses = async (
  managerId: ObjectId,
  applyedCourseId: string | undefined,
) => {
  if (!applyedCourseId) {
    throw new BadRequestError('Applied course is missing');
  }
  await UserModel.updateOne({ _id: managerId }, { $push: { pendingCourses: applyedCourseId } });
};

export { getUserProvider, updatePendingFieldCourses };
