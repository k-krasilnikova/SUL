import { NextFunction, Request, Response } from 'express';

import { addUserNotification } from 'db/providers/notificationProvider';
import { getCourseProvider } from 'db/providers/courseProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { fullNameCreator } from 'utils/fullNameCreator';
import { NotificationStatuses, NotificationType } from 'enums/notificationEnums';
import { USER_ROLES } from 'config/constants';
import {
  getClientCourseByCourseId,
  getClientCourseProvider,
} from 'db/providers/clientCourseProvider';
import { TNotification } from 'interfaces/IResponse/IResponse';
import convertCourseStatusToNotificationInfo from 'utils/notifications/convertCourseStatusToNotificationInfo';

const addNotification = async (
  req: Request,
  res: Response<never, TNotification>,
  next: NextFunction,
) => {
  try {
    const { userId, courseId, clientCourseId } = res.locals;

    if (userId) {
      let course;
      let clientCourse;

      if (courseId) {
        course = await getCourseProvider(courseId, userId);
        clientCourse = await getClientCourseByCourseId(courseId, userId);
      }

      if (clientCourseId) {
        clientCourse = await getClientCourseProvider(clientCourseId);
        course = clientCourse.course;
      }

      let convertedNotification;
      if (clientCourse) {
        convertedNotification = convertCourseStatusToNotificationInfo(clientCourse.status);
      }

      const user = await getUserProvider(userId);

      const targetForNotification = user.managerId ? user.managerId : clientCourse?.user;

      const userFullName = fullNameCreator(user.firstName, user.lastName);
      const notificationType =
        user.role === USER_ROLES.EMPLOYEE ? NotificationType.manager : NotificationType.employee;

      if (course && targetForNotification && convertedNotification) {
        await addUserNotification(
          targetForNotification,
          course.title,
          userFullName,
          NotificationStatuses.new,
          convertedNotification.title,
          convertedNotification.description,
          notificationType,
        );
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default addNotification;
