import { NextFunction } from 'express';

import { TPassTestRequest, TPassTestResponse } from 'interfaces/requests/tests/passTest';
import { IUserSkill } from 'interfaces/entities/userSkill';
import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { addUserSkill, getUserSkills, populateUserSkills } from 'db/providers/skillProvider';
import { getPlainCourseAchievements } from 'db/providers/courseProvider';
import CourseStatus from 'enums/courses';
import { getUserProvider, updateUserTechnologies } from 'db/providers/userProvider';

import { extractCommonUserSkillInfo } from './utils/mappers';
import { addPointToUserSkill, specifySkills, specifyUserTechnologies } from './utils/helpers';
import { convertTechnologiesToUserSkills } from './utils/converters';

const getAchievements = async (
  req: TPassTestRequest,
  res: TPassTestResponse,
  next: NextFunction,
) => {
  try {
    const { clientCourseId } = req.body;

    const clientCourse = await getClientCourseProvider(clientCourseId);
    const { course } = clientCourse;
    const techsToAchieve = await getPlainCourseAchievements(course._id);
    const userId = clientCourse.user.toString();

    if (clientCourse.status === CourseStatus.completed) {
      const userSkills: IUserSkill[] = await getUserSkills(userId);
      const user = await getUserProvider(userId);
      const { oldSkills = [], newSkills = [] } = specifySkills(userSkills, techsToAchieve);

      const updatedUserSkills = await Promise.all(oldSkills.map(addPointToUserSkill(userId)));
      const filterUpdatedUserSkills = updatedUserSkills.filter(
        (skill): skill is IUserSkill => !!skill,
      );
      const insertedUserSkills = await Promise.all(
        newSkills.map(async (newSkill) => addUserSkill(userId, newSkill)),
      );

      const updatedTechnologies = await specifyUserTechnologies(
        user.technologies,
        insertedUserSkills,
      );
      await updateUserTechnologies(userId, updatedTechnologies);

      const updatedUserSkillsPopulated = await populateUserSkills(filterUpdatedUserSkills);
      const insertedUserSkillsPopulated = await populateUserSkills(insertedUserSkills);

      res.locals.achievements = {
        newSkills: extractCommonUserSkillInfo(insertedUserSkillsPopulated),
        updatedSkills: extractCommonUserSkillInfo(updatedUserSkillsPopulated),
      };

      next();
    } else {
      const techsToAchievePopulated = await populateUserSkills(
        convertTechnologiesToUserSkills(techsToAchieve),
      );
      res.locals.achievements = {
        newSkills: [],
        updatedSkills: [],
        techsToAchieve: extractCommonUserSkillInfo(techsToAchievePopulated),
      };
      next();
    }
  } catch (err) {
    next(err);
  }
};

export default getAchievements;
