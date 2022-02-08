import { getCourseTechnology } from 'db/providers/clientCourseProvider';
import { addUserSkill, getUserSkills, updateUserSkill } from 'db/providers/userProvider';
import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { ISkills } from 'interfaces/Ientities/Iusers';
import { specifySkills } from 'utils/dto/skillsDto';
import { isError } from 'utils/typeGuards/isError';

const getAchivments = async (
  req: Request,
  res: Response<unknown, { id: string }>,
  next: TMiddlewareCall,
) => {
  try {
    const { id: clientCourseId } = req.params;
    const { id: userId } = res.locals;
    const { course } = await getCourseTechnology(clientCourseId);
    if ('technology' in course && course._id !== undefined) {
      const userSkills: { skills: ISkills[] } = await getUserSkills(userId);
      const { commonSkills, differingSkills } = specifySkills(userSkills, course.technology);
      if (commonSkills.length) {
        const updated = await Promise.all(
          commonSkills.map(async (skill) => updateUserSkill(userId, skill)),
        );
        console.log(updated, 'updated');
      }
      if (differingSkills.length) {
        const created = await Promise.all(
          differingSkills.map(async (skill) => addUserSkill(userId, skill)),
        );
        console.log(created);
      }

      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'failed' });
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default getAchivments;
