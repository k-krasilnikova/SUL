import mongoose, { ObjectId } from 'mongoose';

import UserSkillModel from 'db/models/UserSkill';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
  const skills: IUserSkill[] = await UserSkillModel.find({ user: userId })
    .select('-_id skill score')
    .lean();
  return skills;
};

const addUserSkill = async (userId: string, skillId?: ObjectId): Promise<IUserSkill> => {
  const [insertedUserSkill] = await UserSkillModel.insertMany({
    user: new mongoose.Types.ObjectId(userId),
    skill: skillId,
    score: 1,
  });

  return insertedUserSkill;
};

const updateUserSkill = async (userId: string, skillId?: ObjectId): Promise<IUserSkill> => {
  const updatedUserSkill: IUserSkill | null = await UserSkillModel.updateOne(
    { user: userId, skill: skillId },
    { $inc: { score: 1 } },
  ).lean();

  if (!updatedUserSkill) {
    throw new NotFoundError('User skill not found.');
  }

  return updatedUserSkill;
};

const populateUserSkills = async (userSkills: IUserSkill[]): Promise<IUserSkill[]> => {
  const mappedUserSkills = userSkills.map((uskill) => {
    const { score, skill } = uskill;
    return { score, skill };
  });

  const populatedUserSkills: IUserSkill[] = await UserSkillModel.populate(mappedUserSkills, [
    {
      path: 'skill',
      model: 'Skill',
      select: '-_id name image maxScore',
    },
  ]);

  return populatedUserSkills;
};

export { getUserSkills, addUserSkill, updateUserSkill, populateUserSkills };
