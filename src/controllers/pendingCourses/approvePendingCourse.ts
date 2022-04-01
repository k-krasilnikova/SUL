import { NextFunction, Request, Response } from 'express';

import CourseStatus from 'enums/coursesEnums';
import {
  getStatusProvider,
  getClientCourseProvider,
  arrangeAssessment,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getUserProvider, removeFromPendingFieldCourses } from 'db/providers/userProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { IUser } from 'interfaces/Ientities/Iusers';
import { TCourseLocals } from 'interfaces/Imiddlewares/Imiddlewares';
import { COURSE_FILEDS } from 'config/constants';

const approvePendingCourse = async (
  req: Request,
  res: Response<
    never,
    TCourseLocals & {
      managerId?: string;
      clientCourseId: string | undefined;
      results: Record<'updateStatus', string>;
      withAssessment?: boolean;
    }
  >,
  next: NextFunction,
) => {
  try {
    const { managerId, clientCourseId, results, withAssessment } = res.locals;
    if (!clientCourseId || !managerId) {
      throw new BadRequestError('Invalid query.');
    }
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.pending) {
      throw new BadRequestError(`Can't approve course in status: ${status}.`);
    }

    const { _id: manager }: IUser = await getUserProvider(managerId);
    const clientCourse = await getClientCourseProvider(clientCourseId);
    await updateClientCourseField(clientCourseId, COURSE_FILEDS.status, CourseStatus.approved);
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
