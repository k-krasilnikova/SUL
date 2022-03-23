import mongoose, { ObjectId } from 'mongoose';

import UserSkillModel from 'db/models/UserSkill';
import { IUserSkill, IUserSkillPopulated } from 'interfaces/Ientities/IUserSkill';
import { IUser } from 'interfaces/Ientities/Iusers';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UserModel from 'db/models/User';

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
  const skills: IUserSkill[] = await UserSkillModel.find({ user: userId })
    .select('-_id skill score')
    .lean();
  return skills;
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

const updateUserSkill = async (userId: string, skillId?: ObjectId): Promise<IUserSkill> => {
  const updatedUserSkill: IUserSkill | null = await UserSkillModel.findOneAndUpdate(
    { user: userId, skill: skillId },
    { $inc: { score: 1 } },
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

export {
  getUserSkills,
  getPopulatedUserSkill,
  addUserSkill,
  updateUserSkill,
  populateUserSkills,
  populateUserTechnologies,
};