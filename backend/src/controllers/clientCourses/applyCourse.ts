import { NextFunction } from 'express';

import {
  TApplyCourseRequest,
  TApplyCourseResponse,
} from 'interfaces/requests/clientCourses/applyCourse';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import {
  applyCourseProvider,
  getAllClientCoursesProvider,
} from 'db/providers/clientCourseProvider';
import { materialsCounterProvider } from 'db/providers/courseProvider';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import { checkCourseDuplicates } from 'utils/validation/checkDuplicates';
import { INITIAL_INDX } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const applyCourse = async (
  req: TApplyCourseRequest,
  res: TApplyCourseResponse,
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
