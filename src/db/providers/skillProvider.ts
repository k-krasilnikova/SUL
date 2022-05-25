import mongoose, { ObjectId } from 'mongoose';
import { isNull } from 'lodash';

import { IUserSkill, IUserSkillPopulated } from 'interfaces/Ientities/IUserSkill';
import { ICourseTechnologyPayload, IEditCoursePayload } from 'interfaces/requests/common/payloads';
import { ISkillGroup } from 'interfaces/Ientities/ISkillGroup';
import { IUser } from 'interfaces/Ientities/Iusers';
import { ISearchQuery } from 'interfaces/requests/common/queries';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import UserSkillModel from 'db/models/UserSkill';
import UserModel from 'db/models/User';
import SkillModel from 'db/models/Skill';
import SkillGroupModel from 'db/models/SkillGroup';
import { NO_FILTER } from 'config/constants';
import ISkill from 'interfaces/Ientities/ISkill';

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
  const skills: IUserSkill[] = await UserSkillModel.find({ user: userId })
    .select('-_id skill score')
    .lean();
  return skills;
};

const getAllGroupsWithSkills = async ({ search }: ISearchQuery): Promise<ISkillGroup[]> => {
  const groups: ISkillGroup[] = await SkillGroupModel.aggregate([
    {
      $match: search ? { name: { $regex: new RegExp(search), $options: 'i' } } : NO_FILTER,
    },
    {
      $lookup: {
        from: 'skills',
        localField: 'skills',
        foreignField: '_id',
        as: 'skills',
      },
    },
    {
      $project: { _id: 0 },
    },
  ]);

  if (!groups) {
    throw new BadRequestError('Unknown params.');
  }

  return groups;
};

const getAllSkillsByGroup = async ({ search }: { search?: string }) => {
  const skillsByGroup: ISkillGroup[] = await SkillModel.aggregate([
    {
      $match: search ? { name: { $regex: new RegExp(search), $options: 'i' } } : NO_FILTER,
    },
    {
      $group: { _id: '$group', skills: { $push: '$$ROOT' } },
    },
    {
      $lookup: {
        from: 'skillGroups',
        localField: '_id',
        foreignField: '_id',
        pipeline: [{ $project: { name: 1 } }],
        as: 'group',
      },
    },
    {
      $unwind: '$group',
    },
    {
      $project: { name: '$group.name', skills: 1, _id: 0 },
    },
  ]);

  if (!skillsByGroup) {
    throw new BadRequestError('Unknown params.');
  }

  return skillsByGroup;
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

const addUserSkill = async (
  userId: string,
  { skill, points }: { skill: ObjectId; points: number },
): Promise<IUserSkill> => {
  const insertedUserSkill: IUserSkill = await UserSkillModel.create({
    user: new mongoose.Types.ObjectId(userId),
    skill,
    score: points,
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
  UserModel.populate(user, {
    path: 'stack',
    populate: { path: 'member', model: 'StackMember', select: '-_id name' },
  });

const skillsExist = async (ids?: string[] | ObjectId[]): Promise<boolean> => {
  if (!ids) {
    return false;
  }
  const foundSkillsCount = await SkillModel.count({ _id: { $in: ids } });
  return foundSkillsCount === ids.length;
};

const isProperTechnologies = async (
  techs: IEditCoursePayload['technologies'],
): Promise<boolean> => {
  if (!techs) {
    return false;
  }

  const checks = await Promise.all(
    techs.map(async (tech) => {
      const skill = await getCommonSkill(tech.skill);
      if (!skill) {
        return false;
      }
      return tech.points <= skill.maxScore;
    }),
  );

  const checksPassed = checks.every((check) => check);

  return checksPassed;
};

const getSkillsToCourseTechs = async (technologies: ICourseTechnologyPayload[]) => {
  const techs = await Promise.all(
    technologies.map(({ skill }) => {
      return SkillModel.findById(skill);
    }),
  );

  techs.forEach((tech) => {
    if (isNull(tech)) {
      throw new NotFoundError(`Couldn't find some of mentioned technologies.`);
    }
  });

  const techsForCourse = techs.map((currentSkill, index) => ({
    skill: currentSkill?._id as string,
    points: technologies[index].points,
  }));

  return techsForCourse;
};

const getSkills = async (): Promise<ISkill[]> => SkillModel.find({}).lean();

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
  getAllGroupsWithSkills,
  getAllSkillsByGroup,
  skillsExist,
  isProperTechnologies,
  getSkillsToCourseTechs,
  getSkills,
};