import mongoose, { Types } from 'mongoose';
import { isNull } from 'lodash';

import { ISkillTech, IUserSkill, IUserSkillPopulated } from 'interfaces/entities/userSkill';
import { ICourseTechnologyPayload, IEditCoursePayload } from 'interfaces/requests/common/payloads';
import { ISkillGroup } from 'interfaces/entities/skillGroup';
import { IUser } from 'interfaces/entities/users';
import UserSkillModel from 'db/models/UserSkill';
import UserModel from 'db/models/User';
import SkillModel from 'db/models/Skill';
import { NO_FILTER } from 'config/constants';
import ISkill from 'interfaces/entities/skill';
import { BadRequestError, NotFoundError } from 'classes/errors/clientErrors';
import { SortOrder } from 'enums/common';

const getUserSkills = async (userId: string): Promise<IUserSkill[]> => {
  const skills: IUserSkill[] = await UserSkillModel.find({ user: userId })
    .select('-_id skill score')
    .lean();
  return skills;
};

const getAllSkillsByGroup = async ({
  search,
  order = SortOrder.asc,
}: {
  search?: string;
  order?: SortOrder;
}) => {
  const skillsByGroup: ISkillGroup[] = await SkillModel.aggregate([
    {
      $lookup: {
        from: 'skillGroups',
        localField: 'group',
        foreignField: '_id',
        pipeline: [{ $project: { name: 1 } }],
        as: 'groupName',
      },
    },
    {
      $unwind: '$groupName',
    },
    {
      $match: search
        ? {
            $or: [
              { name: { $regex: new RegExp(search), $options: 'i' } },
              { 'groupName.name': { $regex: new RegExp(search), $options: 'i' } },
            ],
          }
        : NO_FILTER,
    },
    {
      $sort: {
        name: SortOrder.asc,
      },
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
      $sort: {
        'group.name': order,
      },
    },
    {
      $project: {
        name: '$group.name',
        skills: { _id: 1, name: 1, image: 1, maxScore: 1, group: 1 },
        _id: 0,
      },
    },
  ]);
  if (!skillsByGroup) {
    throw new BadRequestError('Unknown params.');
  }

  return skillsByGroup;
};

const getUserSkill = async (
  userId: Types.ObjectId | string,
  skillId: Types.ObjectId | string,
): Promise<IUserSkill> => {
  const userSkill = await UserSkillModel.findOne({ user: userId, skill: skillId });

  if (!userSkill) {
    throw new NotFoundError('User skill not found.');
  }

  return userSkill;
};

const getPopulatedUserSkill = async (
  userSkillId: Types.ObjectId | string,
): Promise<IUserSkillPopulated> =>
  UserSkillModel.findById(userSkillId).populate({ path: 'skill', model: 'Skill' }).lean();

const addUserSkill = async (
  userId: string,
  { skill, points }: { skill: Types.ObjectId; points: number },
): Promise<IUserSkill> => {
  const insertedUserSkill: IUserSkill = await UserSkillModel.create({
    user: new mongoose.Types.ObjectId(userId),
    skill,
    score: points,
  });

  return insertedUserSkill;
};

const getCommonSkill = async (skillId: Types.ObjectId | string): Promise<ISkill> => {
  const skillInfo = await SkillModel.findById(skillId).lean();

  if (!skillInfo) {
    throw new NotFoundError('Common skill not found.');
  }

  return skillInfo;
};

const updateUserSkill = async (
  userId: string,
  points: number,
  skillId?: Types.ObjectId | string,
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

const skillsExist = async (ids?: string[] | Types.ObjectId[]): Promise<boolean> => {
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

const getSkillsToCourseTechs = async (
  technologies: ICourseTechnologyPayload[],
): Promise<ISkillTech[]> => {
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
    skill: currentSkill?._id as Types.ObjectId,
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
  getAllSkillsByGroup,
  skillsExist,
  isProperTechnologies,
  getSkillsToCourseTechs,
  getSkills,
};
