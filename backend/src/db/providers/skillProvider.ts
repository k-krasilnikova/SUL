import mongoose, { ObjectId } from 'mongoose';

import UserSkillModel from 'db/models/UserSkill';
import UserModel from 'db/models/User';
import { IUserSkill, IUserSkillPopulated } from 'interfaces/Ientities/IUserSkill';
import { ITechnologyGroup } from 'interfaces/Ientities/Iusers';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
  const skills: IUserSkill[] = await UserSkillModel.find({ user: userId })
    .select('-_id skill score')
    .lean();
  return skills;
};

const attachSkillToUserProfile = async (userId: string, userSkillId: ObjectId) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    throw new NotFoundError('User not found.');
  }

  const userSkill: IUserSkillPopulated = await UserSkillModel.findById(userSkillId).populate({
    path: 'skill',
    model: 'Skill',
  });
  if (!userSkill) {
    throw new NotFoundError('User skill not found.');
  }

  const isGroupExists = user.technologies.some((tech) =>
    isEqualObjectId(tech.group, userSkill.skill.group),
  );

  if (isGroupExists) {
    user.technologies.map((tech) => {
      if (isEqualObjectId(tech.group, userSkill.skill.group)) {
        tech.achievedSkills.push(userSkillId);
      }
      return tech;
    });
  } else {
    const newTechnology: ITechnologyGroup = {
      group: userSkill.skill.group,
      achievedSkills: [userSkillId],
      isPrimary: false,
    };
    user.technologies.push(newTechnology);
  }
  await user.save();
};

const addUserSkill = async (userId: string, skillId?: ObjectId): Promise<IUserSkill> => {
  const insertedUserSkill: IUserSkill = await UserSkillModel.create({
    user: new mongoose.Types.ObjectId(userId),
    skill: skillId,
    score: 1,
  });

  if (insertedUserSkill._id) {
    await attachSkillToUserProfile(userId, insertedUserSkill._id);
  }

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

export {
  getUserSkills,
  addUserSkill,
  attachSkillToUserProfile,
  updateUserSkill,
  populateUserSkills,
};
