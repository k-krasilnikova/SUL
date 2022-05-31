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
import { getUserProvider, updatePendingFieldCourses } from 'db/providers/userProvider';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import { checkCourseDuplicates } from 'utils/validation/checkDuplicates';
import { INITIAL_INDX, USER_ROLES } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const applyCourse = async (
  req: TApplyCourseRequest,
  res: TApplyCourseResponse,
  next: NextFunction,
) => {
  try {
    const { courseId } = req.body;
    const { id: userId } = res.locals;

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

    const { managerId, role } = await getUserProvider(userId);
    if (role === USER_ROLES.EMPLOYEE) {
      await updatePendingFieldCourses(managerId, String(course._id));
    }

    next();

    res.json(course);
  } catch (err) {
    next(err);
  }
};

export default applyCourse;
