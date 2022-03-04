import { ObjectId } from 'mongoose';

import { IUser } from 'interfaces/Ientities/Iusers';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UserModel from 'db/models/User';

const getUserProvider = async (userId: string | ObjectId) => {
  const dbUser = await UserModel.findById(userId).lean();
  if (!dbUser) {
    throw new NotFoundError('User not found.');
  }
  return dbUser;
};

const getEmployeesProvider = async (managerId: string) => {
  const employess = await UserModel.find({ managerId }).lean();
  return employess;
};

const getUserSkills = async (userId: string): Promise<Pick<IUser, 'skills'>> => {
  const clientSkills = await UserModel.findOne({ _id: userId }, { skills: 1, _id: 0 }).lean();
  if (!clientSkills) {
    throw new NotFoundError('User not found.');
  }
  return clientSkills;
};

const addUserSkill = async (userId: string, skillName: string) => {
  const newSkill = {
    name: skillName,
    image: '',
    score: 1,
    maxScore: 5,
    group: '',
  };

  await UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        skills: newSkill,
      },
    },
  ).lean();
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

const updateUserSkill = async (userId: string, skillName: string) => {
  await UserModel.findOneAndUpdate(
    { _id: userId },
    { $inc: { 'skills.$[elem].score': 1 } },
    { arrayFilters: [{ 'elem.name': { $eq: skillName } }] },
  );
};

export {
  getUserProvider,
  updatePendingFieldCourses,
  updateUserSkill,
  getUserSkills,
  addUserSkill,
  getEmployeesProvider,
};
