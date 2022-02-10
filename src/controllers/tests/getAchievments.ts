import { Request, Response } from 'express';

import { getCourseTechnology } from 'db/providers/clientCourseProvider';
import { addUserSkill, getUserSkills, updateUserSkill } from 'db/providers/userProvider';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { ISkill } from 'interfaces/Ientities/Iusers';
import { specifySkills } from 'utils/dto/skillsDto';
import { isError } from 'utils/typeGuards/isError';

const getAchievments = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string }>,
  res: Response<
    unknown,
    { id: string; achievments: { newSkills: string[]; updatedSkills: string[] } }
  >,
  next: TMiddlewareCall,
) => {
  try {
    const { id: clientCourseId } = req.params;
    const { id: userId } = res.locals;

    const { course } = await getCourseTechnology(clientCourseId);
    if ('technology' in course) {
      const userSkills: { skills: ISkill[] } = await getUserSkills(userId);
      const { oldSkills, newSkills } = specifySkills(userSkills.skills, course.technology);
      if (oldSkills.length) {
        await Promise.all(oldSkills.map(async (skill) => updateUserSkill(userId, skill)));
      }
      if (newSkills.length) {
        await Promise.all(newSkills.map(async (skill) => addUserSkill(userId, skill)));
      }

      res.locals.achievments = { newSkills, updatedSkills: oldSkills };
      next();
    }
    res.locals.achievments = { newSkills: [], updatedSkills: [] };
    next();
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default getAchievments;
