import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import {
  addUserSkill,
  attachSkillToUserProfile,
  getUserSkills,
  populateUserSkills,
  updateUserSkill,
} from 'db/providers/skillProvider';
import { specifySkills } from 'utils/dto/skillsDto';
import CourseStatus from 'enums/coursesEnums';
import { TAchievments } from 'interfaces/Ientities/Itest';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { extractCommonUserSkillInfo } from 'utils/normaliser/skills';

const getAchievments = async (
  req: Request,
  res: Response<void, { id: string; achievments: TAchievments }>,
  next: NextFunction,
) => {
  try {
    const { id: clientCourseId } = req.params;
    const { id: userId } = res.locals;

    const clientCourse = await getClientCourseProvider(clientCourseId);
    const { course } = clientCourse;
    const { technologies: techsToAchieve } = course;

    if (clientCourse.status === CourseStatus.successful) {
      const userSkills: IUserSkill[] = await getUserSkills(userId);
      const { oldSkills = [], newSkills = [] } = specifySkills(userSkills, techsToAchieve);
      const updatedUserSkills = await Promise.all(
        oldSkills.map(async (skillId) => updateUserSkill(userId, skillId)),
      );
      const insertedUserSkills = await Promise.all(
        newSkills.map(async (skillId) => {
          const insertedSkill = await addUserSkill(userId, skillId);
          if (insertedSkill._id) {
            await attachSkillToUserProfile(userId, insertedSkill._id);
          }
          return insertedSkill;
        }),
      );

      const updatedUserSkillsPopulated = await populateUserSkills(updatedUserSkills);
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
