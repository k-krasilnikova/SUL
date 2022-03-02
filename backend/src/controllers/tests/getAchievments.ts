import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { addUserSkill, getUserSkills, updateUserSkill } from 'db/providers/userProvider';
import { specifySkills } from 'utils/dto/skillsDto';
import CourseStatus from 'enums/coursesEnums';
import { TAchievments } from 'interfaces/Ientities/Itest';
import IUserSkill from 'interfaces/Ientities/IUserSkill';

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
      const { oldSkills, newSkills } = specifySkills(userSkills, techsToAchieve);
      if (oldSkills.length) {
        await Promise.all(oldSkills.map(async (skill) => updateUserSkill(userId, skill._id)));
      }
      if (newSkills.length) {
        await Promise.all(newSkills.map(async (skill) => addUserSkill(userId, skill._id)));
      }

      res.locals.achievments = { newSkills, updatedSkills: oldSkills };
      next();
    }
    res.locals.achievments = { newSkills: [], updatedSkills: [] };
    next();
  } catch (err) {
    next(err);
  }
};

export default getAchievments;
