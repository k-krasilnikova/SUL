import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { addUserSkill, getUserSkills, populateUserSkills } from 'db/providers/skillProvider';
import { specifySkills } from 'utils/dto/skillsDto';
import CourseStatus from 'enums/coursesEnums';
import { TAAchievements } from 'interfaces/Ientities/Itest';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { extractCommonUserSkillInfo } from 'utils/normaliser/skills';
import { getUserProvider, updateUserTechnologies } from 'db/providers/userProvider';
import { specifyUserTechnologies } from 'utils/technologies/userTechnologies';
import { addPointToUserSkill } from 'utils/skillsUtils';
import { convertTechnologiesToUserSkills } from 'utils/typeConversion/skills/skillsAndTechs';

const getAchievements = async (
  req: Request,
  res: Response<void, { id: string; achievements: TAAchievements }>,
  next: NextFunction,
) => {
  try {
    const { id: clientCourseId } = req.params;

    const clientCourse = await getClientCourseProvider(clientCourseId);
    const { course } = clientCourse;
    const { technologies: techsToAchieve } = course;
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
