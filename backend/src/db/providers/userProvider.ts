import { Types } from 'mongoose';
import { isEmpty } from 'lodash';

import UserModel from 'db/models/User';
import UserSkillModel from 'db/models/UserSkill';
import SkillGroupModel from 'db/models/SkillGroup';
import SkillModel from 'db/models/Skill';
import StackMemberModel from 'db/models/StackMember';
import CourseModel from 'db/models/Course';
import { ITechnologyGroup, IUser } from 'interfaces/entities/users';
import { TUserStackMemberPopulated } from 'interfaces/entities/stackMember';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { BadRequestError, NotFoundError } from 'classes/errors/clientErrors';

const getUserProvider = async (userId: string | Types.ObjectId): Promise<IUser> => {
  const dbUser = await UserModel.findById(userId).lean();

  if (!dbUser) {
    throw new NotFoundError('User not found.');
  }
  return dbUser;
};

const getFullUserInformationProvider = async (userId: string): Promise<IUser> => {
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
      {
        path: 'stack',
        populate: {
          path: 'member',
          model: StackMemberModel,
          select: '-_id name',
        },
      },
    ])
    .select('-passwordHash')
    .lean();

  if (!dbUserFullInfo) {
    throw new NotFoundError('User not found.');
  }

  return dbUserFullInfo;
};

const getUserStackProvider = async (
  userId: Types.ObjectId | string,
): Promise<TUserStackMemberPopulated[]> => {
  const { stack } = await UserModel.findById(userId)
    .populate('stack.member')
    .populate({ path: 'stack.member', populate: { path: 'relatedCourses', model: CourseModel } })
    .lean();

  if (isEmpty(stack)) {
    throw new NotFoundError('Could not found user stack.');
  }

  return convertToTypeUnsafe<TUserStackMemberPopulated[]>(stack);
};

const getEmployeesProvider = async (managerId: string): Promise<IUser[]> => {
  const employess = await UserModel.find({ managerId }).lean();
  return employess;
};

const updatePendingFieldCourses = async (
  managerId: Types.ObjectId,
  applyedCourseId: string | undefined,
): Promise<void> => {
  if (!applyedCourseId) {
    throw new BadRequestError('Applied course is missing.');
  }
  await UserModel.updateOne({ _id: managerId }, { $push: { pendingCourses: applyedCourseId } });
};

const updateUserTechnologies = async (
  userId: Types.ObjectId | string,
  techs: ITechnologyGroup[],
): Promise<void> => {
  await UserModel.updateOne(
    { _id: userId },
    {
      $set: {
        technologies: techs,
      },
    },
  );
};

const removeFromPendingFieldCourses = async (
  managerId: Types.ObjectId | string,
  approvedCourseId?: Types.ObjectId | string,
): Promise<void> => {
  if (!approvedCourseId) {
    throw new BadRequestError('Approved course is missing.');
  }

  await UserModel.updateOne({ _id: managerId }, { $pull: { pendingCourses: approvedCourseId } });
};

export {
  getUserProvider,
  getUserStackProvider,
  getFullUserInformationProvider,
  updatePendingFieldCourses,
  removeFromPendingFieldCourses,
  getEmployeesProvider,
  updateUserTechnologies,
};
