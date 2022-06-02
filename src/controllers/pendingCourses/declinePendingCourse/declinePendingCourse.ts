import { NextFunction } from 'express';

import {
  TDeclinePendingCourseRequest,
  TDeclinePendingCourseResponse,
} from 'interfaces/requests/pendingCourses/declinePendingCourse';
import { IUser } from 'interfaces/Ientities/Iusers';
import {
  getClientCourseProvider,
  getStatusProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getUserProvider, removeFromPendingFieldCourses } from 'db/providers/userProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { CLIENT_COURSE_FIELDS } from 'config/constants';

const declinePendingCourse = async (
  req: TDeclinePendingCourseRequest,
  res: TDeclinePendingCourseResponse,
  next: NextFunction,
) => {
  try {
    const { managerId, clientCourseId, results } = res.locals;

    if (!clientCourseId || !managerId) {
      throw new BadRequestError('Invalid query. Client course id or manager id is missing.');
    }

    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.pending) {
      throw new BadRequestError(`Can't decline course with status: ${status}.`);
    }

    const { _id: manager }: IUser = await getUserProvider(managerId);
    const clientCourse = await getClientCourseProvider(clientCourseId);

    await updateClientCourseField(
      clientCourseId,
      CLIENT_COURSE_FIELDS.status,
      CourseStatus.rejected,
    );
    await removeFromPendingFieldCourses(manager, clientCourse._id);

    await updateClientCourseField(clientCourseId, CLIENT_COURSE_FIELDS.applyDate, Date.now());

    results.updateStatus = 'Course was declined.';

    next();
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
