import { getCourseTechnology } from 'db/providers/clientCourseProvider';
import { updateUserSkill } from 'db/providers/userProvider';
import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const getAchivments = async (
  req: Request,
  res: Response<unknown, { id: string }>,
  next: TMiddlewareCall,
) => {
  try {
    const { id: clientCourseId } = req.params;
    const { id: userId } = res.locals;
    const clientCourse = await getCourseTechnology(clientCourseId);
    if ('technology' in clientCourse.course && clientCourse.course._id !== undefined) {
      await Promise.all(
        clientCourse.course.technology.map(async (skill) => updateUserSkill(userId, skill)),
      );
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
