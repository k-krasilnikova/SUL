import { NextFunction, Request, Response } from 'express';

import { AssessmentAction } from 'enums/common';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';

const manageAssessment = async (
  req: Request<{ id: string }, unknown, { action: AssessmentAction }>,
  res: Response<never, { status?: CourseStatus }>,
  next: NextFunction,
) => {
  const { id: courseId } = req.params;
  const { action: assessmentAction } = req.body;

  try {
    const { status } = await getStatusProvider(courseId);

    if (status !== CourseStatus.assessment) {
      throw new BadRequestError(`Can not manage assessment while course in status: ${status}.`);
    }

    let statusToSet: CourseStatus;

    switch (assessmentAction) {
      case AssessmentAction.approve:
        statusToSet = CourseStatus.completed;
        break;
      case AssessmentAction.decline:
        statusToSet = CourseStatus.failed;
        break;
      default:
        throw new BadRequestError('Bad assessment action.');
    }

    await updateCourseStatus(courseId, statusToSet);
    res.locals.status = statusToSet;
    next();
  } catch (err) {
    next(err);
  }
};

export default manageAssessment;
