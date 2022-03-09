import { ObjectId } from 'mongoose';

import UserSkillModel from 'db/models/UserSkill';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
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

const updateUserSkill = async (userId: string, skillId?: ObjectId) => {
  await UserSkillModel.findOneAndUpdate({ user: userId, skill: skillId }, { $inc: { score: 1 } });
};

export { getUserSkills, addUserSkill, updateUserSkill };
