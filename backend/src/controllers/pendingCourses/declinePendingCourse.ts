import { NextFunction, Request, Response } from 'express';

import {
  getClientCourseProvider,
  getStatusProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getUserProvider, removeFromPendingFieldCourses } from 'db/providers/userProvider';
import { addUserNotification } from 'db/providers/notificationProvider';
import CourseStatus from 'enums/coursesEnums';
import {
  NotificationDescription,
  NotificationStatuses,
  NotificationTitles,
  NotificationType,
} from 'enums/notificationEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { IUser } from 'interfaces/Ientities/Iusers';
import { TCourseLocals } from 'interfaces/Imiddlewares/Imiddlewares';
import { CLIENT_COURSE_FIELDS } from 'config/constants';

const declinePendingCourse = async (
  req: Request,
  res: Response<
    never,
    TCourseLocals & {
      managerId?: string;
      clientCourseId: string | undefined;
      results: Record<'updateStatus', string>;
    }
  >,
  next: NextFunction,
) => {
  try {
    const { managerId, clientCourseId, results } = res.locals;
    if (!clientCourseId || !managerId) {
      throw new BadRequestError('Invalid query.');
    }
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.pending) {
      throw new BadRequestError(`Can't decline course with status: ${status}.`);
    }

    const { _id: manager, firstName, lastName }: IUser = await getUserProvider(managerId);
    const clientCourse = await getClientCourseProvider(clientCourseId);
    await updateClientCourseField(
      clientCourseId,
      CLIENT_COURSE_FIELDS.status,
      CourseStatus.rejected,
    );
    await removeFromPendingFieldCourses(manager, clientCourse._id);

    results.updateStatus = 'Course was declined.';
    await updateClientCourseField(clientCourseId, CLIENT_COURSE_FIELDS.applyDate, Date.now());

    const managerName = `${firstName} ${lastName}`;

    await addUserNotification(
      clientCourse.user,
      clientCourse.course.title,
      managerName,
      NotificationStatuses.new,
      NotificationTitles.declined,
      NotificationDescription.declined,
      NotificationType.user,
    );
    next();
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
