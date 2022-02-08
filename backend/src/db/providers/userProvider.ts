import UserModel from 'db/models/User';
import { IUser } from 'interfaces/Ientities/Iusers';
import { ObjectId } from 'mongoose';

const getUserProvider = async (userId: string) => {
  const dbUser = await UserModel.findById(userId).lean();
  if (!dbUser) {
    throw new Error('user not found');
  }
  return dbUser;
};

const getUserSkills = async (userId: string): Promise<Pick<IUser, 'skills'>> => {
  const clientSkills = await UserModel.findOne({ _id: userId }, { skills: 1, _id: 0 }).lean();
  if (!clientSkills) {
    throw new Error('user not found');
  }
  return clientSkills;
};

const addUserSkill = async (userId: string, skillName: string) => {
  const updatedSkills = await UserModel.updateOne(
    { _id: userId },
    {
      $push: {
        skills: {
          name: skillName,
          image: '',
          score: 1,
          group: '',
        },
      },
    },
  ).lean();
  return updatedSkills;
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

const updateUserSkill = async (userId: string, skillName: string) => {
  const updatedSkill = await UserModel.updateOne(
    { _id: userId },
    { $inc: { 'skills.$[elem].score': 1 } },
    { arrayFilters: [{ 'elem.name': { $eq: skillName } }] },
  );
  return updatedSkill;
};

export { getUserProvider, updatePendingFieldCourses, updateUserSkill, getUserSkills, addUserSkill };
