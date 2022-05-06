import { NextFunction, Request, Response } from 'express';

import {
  applyCourseProvider,
  getAllClientCoursesProvider,
} from 'db/providers/clientCourseProvider';
import { addUserNotification } from 'db/providers/notificationProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { getCourseProvider, materialsCounterProvider } from 'db/providers/courseProvider';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import { checkCourseDuplicates } from 'utils/validation/checkDuplicates';
import { INITIAL_INDX } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { TCourseLocals } from 'interfaces/Imiddlewares/Imiddlewares';
import {
  NotificationDescription,
  NotificationStatuses,
  NotificationTitles,
  NotificationType,
} from 'enums/notificationEnums';

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
    const userDB = await getUserProvider(userId);
    const applyedCourses = await getAllClientCoursesProvider(userId);
    const isDuplicate = checkCourseDuplicates(applyedCourses, courseId);
    if (isDuplicate) {
      throw new BadRequestError('Course already applied.');
    }
    const courseData = await getCourseProvider(courseId, userId);
    const materialsCount = await materialsCounterProvider(courseId);
    const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
    const course: IClientCourse = await applyCourseProvider(courseId, userId, progressDto);

    const userName = `${userDB.firstName} ${userDB.lastName}`;

    await addUserNotification(
      userDB.managerId,
      courseData.title,
      userName,
      NotificationStatuses.new,
      NotificationTitles.applied,
      NotificationDescription.applied,
      NotificationType.manager,
    );
    res.locals.clientCourseId = String(course._id);

    results.course = course;
    next();
  } catch (err) {
    next(err);
  }
};

export default applyCourse;
