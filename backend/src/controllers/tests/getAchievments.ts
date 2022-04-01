import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { addUserSkill, getUserSkills, populateUserSkills } from 'db/providers/skillProvider';
import { specifySkills } from 'utils/dto/skillsDto';
import CourseStatus from 'enums/coursesEnums';
import { TAchievments } from 'interfaces/Ientities/Itest';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { extractCommonUserSkillInfo } from 'utils/normaliser/skills';
import { getUserProvider, updateUserTechnologies } from 'db/providers/userProvider';
import { specifyUserTechnologies } from 'utils/technologies/userTechnologies';
import { addPointToUserSkill } from 'utils/skillsUtils';

const getAchievments = async (
  req: Request,
  res: Response<void, { id: string; achievments: TAchievments }>,
  next: NextFunction,
) => {
  try {
    const { id: clientCourseId } = req.params;

    const clientCourse = await getClientCourseProvider(clientCourseId);
    const { course } = clientCourse;
    const { technologies: techsToAchieve, complexity } = course;
    const userId = clientCourse.user.toString();

    if (
      clientCourse.status === CourseStatus.successful ||
      clientCourse.status === CourseStatus.completed
    ) {
      const userSkills: IUserSkill[] = await getUserSkills(userId);
      const user = await getUserProvider(userId);
      const { oldSkills = [], newSkills = [] } = specifySkills(userSkills, techsToAchieve);

      const updatedUserSkills = await Promise.all(
        oldSkills.map(addPointToUserSkill(complexity, userId)),
      );
      const filterUpdatedUserSkills = updatedUserSkills.filter(
        (skill): skill is IUserSkill => !!skill,
      );
      const insertedUserSkills = await Promise.all(
        newSkills.map(async (skillId) => addUserSkill(userId, skillId)),
      );

      const updatedTechnologies = await specifyUserTechnologies(
        user.technologies,
        insertedUserSkills,
      );
      await updateUserTechnologies(userId, updatedTechnologies);

      const updatedUserSkillsPopulated = await populateUserSkills(filterUpdatedUserSkills);
      const insertedUserSkillsPopulated = await populateUserSkills(insertedUserSkills);

      res.locals.achievments = {
        newSkills: extractCommonUserSkillInfo(insertedUserSkillsPopulated),
        updatedSkills: extractCommonUserSkillInfo(updatedUserSkillsPopulated),
      };

      next();
    } else {
      res.locals.achievments = { newSkills: [], updatedSkills: [] };
      next();
    }
  } catch (err) {
    next(err);
  }
};

export default getAchievments;
