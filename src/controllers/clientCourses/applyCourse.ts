import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { applyCourseProvider, getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import { INITIAL_INDX } from 'config/constants';
import { materialsCounterProvider } from 'db/providers/courseProvider';
import { checkCourseDuplicates } from 'utils/validation/checkDuplicates';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';

const applyCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: courseId } = req.body;
    const { id: userId } = res.locals;
    const applyedCourses = await getClientCoursesProvider(userId);
    const isDuplicate = checkCourseDuplicates(applyedCourses, courseId);
    if (isDuplicate) {
      res.json({ message: 'course already apllied' });
      return;
    }
    const materialsCount = await materialsCounterProvider(courseId);
    const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
    const user = await getPendingCoursesProvider(userId);
    const courses = await applyCourseProvider(courseId, userId, progressDto, user.managerId);
    res.json(courses);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default applyCourse;
