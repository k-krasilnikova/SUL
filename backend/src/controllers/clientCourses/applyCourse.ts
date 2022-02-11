import { Request, Response } from 'express';

import { applyCourseProvider, getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import { INITIAL_INDX } from 'config/constants';
import { materialsCounterProvider } from 'db/providers/courseProvider';
import { checkCourseDuplicates } from 'utils/validation/checkDuplicates';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { finished } from 'stream';
import { isError } from 'utils/typeGuards/isError';

const applyCourse = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string }>,
  res: Response<
    { message: string } | { status: string },
    { courseId: string | undefined; userId: string | undefined }
  >,
  next: TMiddlewareCall,
) => {
  try {
    const { courseId, userId } = res.locals;
    if (!courseId || !userId) {
      throw new BadRequestError('Invalid query');
    }
    const applyedCourses = await getClientCoursesProvider(userId);
    const isDuplicate = checkCourseDuplicates(applyedCourses, courseId);
    if (isDuplicate) {
      throw new BadRequestError('Course already applied.');
    }
    const materialsCount = await materialsCounterProvider(courseId);
    const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
    const course: IClientCourse = await applyCourseProvider(courseId, userId, progressDto);
    next();
    finished(res, () => {
      if (!res.headersSent) {
        res.json(course);
      }
    });
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default applyCourse;
