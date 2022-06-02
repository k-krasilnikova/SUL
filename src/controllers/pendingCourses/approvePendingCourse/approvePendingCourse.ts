import { NextFunction } from 'express';

import {
  TApprovePendingCourseRequest,
  TApprovePendingCourseResponse,
} from 'interfaces/requests/pendingCourses/approvePendingCourse';
import { IUser } from 'interfaces/Ientities/Iusers';
import CourseStatus from 'enums/coursesEnums';
import {
  arrangeAssessment,
  getClientCourseProvider,
  getStatusProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getUserProvider, removeFromPendingFieldCourses } from 'db/providers/userProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { CLIENT_COURSE_FIELDS } from 'config/constants';

const approvePendingCourse = async (
  req: TApprovePendingCourseRequest,
  res: TApprovePendingCourseResponse,
  next: NextFunction,
) => {
  try {
    const { managerId, clientCourseId, results, withAssessment } = res.locals;

    if (!clientCourseId || !managerId) {
      throw new BadRequestError('Invalid query. Client course id or manager id is missing.');
    }

    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.pending) {
      throw new BadRequestError(`Can't approve course in status: ${status}.`);
    }

    const { _id: manager }: IUser = await getUserProvider(managerId);
    const clientCourse = await getClientCourseProvider(clientCourseId);

    await updateClientCourseField(
      clientCourseId,
      CLIENT_COURSE_FIELDS.status,
      CourseStatus.approved,
    );
    await removeFromPendingFieldCourses(manager, clientCourse._id);

    if (withAssessment) {
      await arrangeAssessment(clientCourseId);
    }

    results.updateStatus = `Course was approved ${withAssessment ? 'with' : 'without'} assessment.`;
    next();
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
