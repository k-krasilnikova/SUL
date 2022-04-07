import mongoose, { ObjectId } from 'mongoose';

import UserSkillModel from 'db/models/UserSkill';
import { IUserSkill, IUserSkillPopulated } from 'interfaces/Ientities/IUserSkill';
import { IUser } from 'interfaces/Ientities/Iusers';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UserModel from 'db/models/User';
import SkillModel from 'db/models/Skill';

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
  const skills: IUserSkill[] = await UserSkillModel.find({ user: userId })
    .select('-_id skill score')
    .lean();
  return skills;
};

const getUserSkill = async (userId: ObjectId | string, skillId: ObjectId | string) => {
  const userSkill = await UserSkillModel.findOne({ user: userId, skill: skillId });

  if (!userSkill) {
    throw new NotFoundError('User skill not found.');
  }

  return userSkill;
};

const getPopulatedUserSkill = async (
  userSkillId: ObjectId | string,
): Promise<IUserSkillPopulated> =>
  UserSkillModel.findById(userSkillId).populate({ path: 'skill', model: 'Skill' }).lean();

const addUserSkill = async (userId: string, skillId?: ObjectId): Promise<IUserSkill> => {
  const insertedUserSkill: IUserSkill = await UserSkillModel.create({
    user: new mongoose.Types.ObjectId(userId),
    skill: skillId,
    score: 1,
  });

  return insertedUserSkill;
};

const getCommonSkill = async (skillId: ObjectId | string) => {
  const skillInfo = await SkillModel.findById(skillId).lean();

  if (!skillInfo) {
    throw new NotFoundError('Common skill not found.');
  }

  return skillInfo;
};

const updateUserSkill = async (
  userId: string,
  points: number,
  skillId?: ObjectId | string,
): Promise<IUserSkill> => {
  const updatedUserSkill: IUserSkill | null = await UserSkillModel.findOneAndUpdate(
    { user: userId, skill: skillId },
    { $inc: { score: points } },
    { new: true },
  ).lean();

  if (!updatedUserSkill) {
    throw new NotFoundError('User skill not found.');
  }

  return updatedUserSkill;
};

const populateUserSkills = async (userSkills: IUserSkill[]): Promise<IUserSkill[]> => {
  const populatedUserSkills = await UserSkillModel.populate(userSkills, {
    path: 'skill',
    model: 'Skill',
    select: '-_id name image maxScore',
  });
  return populatedUserSkills;
};

const populateUserTechnologies = async (employee: IUser): Promise<IUser> =>
  UserModel.populate(employee, [
    {
      path: 'technologies',
      populate: {
        path: 'group',
        model: 'SkillGroup',
        select: 'name -_id',
      },
    },
    {
      path: 'technologies',
      populate: {
        path: 'achievedSkills',
        model: 'UserSkill',
        populate: {
          path: 'skill',
          model: 'Skill',
          select: 'name maxScore image -_id',
        },
        select: 'score skill -_id',
      },
    },
  ]);

const populateUserStack = async (user: IUser): Promise<IUser> =>
  UserModel.populate(user, { path: 'stack', select: '-_id name' });

const skillsExist = async (ids?: string[] | ObjectId[]): Promise<boolean> => {
  if (!ids) {
    return false;
  }
  const foundSkillsCount = await SkillModel.count({ _id: { $in: ids } });
  return foundSkillsCount === ids.length;
};

export {
  getUserSkills,
  getPopulatedUserSkill,
  addUserSkill,
  updateUserSkill,
  populateUserSkills,
  populateUserTechnologies,
  populateUserStack,
  getCommonSkill,
  getUserSkill,
  skillsExist,
};
