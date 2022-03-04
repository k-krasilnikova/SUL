import { ObjectId } from 'mongoose';

import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UserModel from 'db/models/User';
import UserSkillModel from 'db/models/UserSkill';
import SkillGroupModel from 'db/models/SkillGroup';
import SkillModel from 'db/models/Skill';

const getUserProvider = async (userId: string) => {
  const dbUser = await UserModel.findById(userId).lean();
  if (!dbUser) {
    throw new NotFoundError('User not found.');
  }
  return dbUser;
};

const getFullUserInformationProvider = async (userId: string) => {
  const dbUserFullInfo = await UserModel.findById(userId)
    .populate([
      {
        path: 'technologies',
        populate: {
          path: 'group',
          model: SkillGroupModel,
          select: 'name -_id',
        },
      },
      {
        path: 'technologies',
        populate: {
          path: 'achievedSkills',
          model: UserSkillModel,
          populate: {
            path: 'skill',
            model: SkillModel,
            select: 'name maxScore image -_id',
          },
          select: 'score skill -_id',
        },
      },
    ])
    .lean();

  return dbUserFullInfo;
};

const getEmployeesProvider = async (managerId: string) => {
  const employess = await UserModel.find({ managerId }).lean();
  return employess;
};

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
  // const clientSkills = await UserModel.findOne({ _id: userId }, { technologies: 1, _id: 0 }).lean();
  // if (!clientSkills) {
  //   throw new NotFoundError('User not found.');
  // }
  // return clientSkills;
  const skills: IUserSkill[] = await UserSkillModel.find({ user: userId }).lean();
  return skills;
};

const addUserSkill = async (userId: string, skillId?: ObjectId) => {
  await UserSkillModel.create({
    user: userId,
    skill: skillId,
    score: 1,
  });
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

const updateUserSkill = async (userId: string, skillId?: ObjectId) => {
  // await UserModel.findOneAndUpdate(
  //   { _id: userId },
  //   { $inc: { 'skills.$[elem].score': 1 } },
  //   { arrayFilters: [{ 'elem.name': { $eq: skillName } }] },
  // );
  await UserSkillModel.findOneAndUpdate({ user: userId, skill: skillId }, { $inc: { score: 1 } });
};

export {
  getUserProvider,
  getFullUserInformationProvider,
  updatePendingFieldCourses,
  updateUserSkill,
  getUserSkills,
  addUserSkill,
  getEmployeesProvider,
};
