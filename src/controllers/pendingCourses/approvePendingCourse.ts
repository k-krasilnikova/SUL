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
    const { clientCourseId, assessment: withAssessment } = req.body;
    const { id: managerId } = res.locals;

    if (!clientCourseId || !managerId) {
      throw new BadRequestError('Invalid query.');
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

    next();

    res.json({
      updateStatus: `Course was approved ${withAssessment ? 'with' : 'without'} assessment.`,
    });
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
