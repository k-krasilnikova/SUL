import { NextFunction } from 'express';

import {
  TDeclinePendingCourseRequest,
  TDeclinePendingCourseResponse,
} from 'interfaces/requests/pendingCourses/declinePendingCourse';
import { IUser } from 'interfaces/entities/users';
import {
  getClientCourseProvider,
  getStatusProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getUserProvider, removeFromPendingFieldCourses } from 'db/providers/userProvider';
import CourseStatus from 'enums/courses';
import { CLIENT_COURSE_FIELDS } from 'config/constants';
import { BadRequestError } from 'classes/errors/clientErrors';

const declinePendingCourse = async (
  req: TDeclinePendingCourseRequest,
  res: TDeclinePendingCourseResponse,
  next: NextFunction,
) => {
  try {
    const { clientCourseId } = req.body;
    const { id: managerId } = res.locals;

    if (!clientCourseId) {
      throw new BadRequestError('Invalid query. Client course id is missing.');
    }
    if (!managerId) {
      throw new BadRequestError('Invalid query. Manager id is missing.');
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

    res.locals.clientCourseId = clientCourseId;

    next();

    res.json('Course was declined.');
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
