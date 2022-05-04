import { NextFunction, Request, Response } from 'express';

import {
  applyCourseProvider,
  getAllClientCoursesProvider,
} from 'db/providers/clientCourseProvider';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import { INITIAL_INDX } from 'config/constants';
import { materialsCounterProvider } from 'db/providers/courseProvider';
import { checkCourseDuplicates } from 'utils/validation/checkDuplicates';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { TCourseLocals } from 'interfaces/Imiddlewares/Imiddlewares';

const applyCourse = async (
  req: Request,
  res: Response<never, TCourseLocals & { results: Record<'course', IClientCourse> }>,
  next: NextFunction,
) => {
  try {
    const { courseId, userId, results } = res.locals;
    if (!courseId || !userId) {
      throw new BadRequestError('Invalid query');
    }

    const applyedCourses = await getAllClientCoursesProvider(userId);
    const isDuplicate = checkCourseDuplicates(applyedCourses, courseId);
    if (isDuplicate) {
      throw new BadRequestError('Course already applied.');
    }
    const materialsCount = await materialsCounterProvider(courseId);
    const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
    const course: IClientCourse = await applyCourseProvider(courseId, userId, progressDto);
    res.locals.clientCourseId = String(course._id);

    results.course = course;
    next();
  } catch (err) {
    next(err);
  }
};

export default applyCourse;
