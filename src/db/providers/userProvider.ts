import { ObjectId } from 'mongoose';

import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UserModel from 'db/models/User';
import UserSkillModel from 'db/models/UserSkill';
import SkillGroupModel from 'db/models/SkillGroup';
import SkillModel from 'db/models/Skill';
import { userInfo } from 'os';

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

  if (!dbUserFullInfo) {
    throw new NotFoundError('User not found.');
  }

  return dbUserFullInfo;
};

const getEmployeesProvider = async (managerId: string) => {
  const employess = await UserModel.find({ managerId }).lean();
  return employess;
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

export {
  getUserProvider,
  getFullUserInformationProvider,
  updatePendingFieldCourses,
  getEmployeesProvider,
};
