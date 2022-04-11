import { NextFunction, Request, Response } from 'express';

import { AssessmentAction } from 'enums/common';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { getStatusProvider, updateClientCourseField } from 'db/providers/clientCourseProvider';
import { ASSESSMENT_RESULTS, CLIENT_COURSE_FIELDS } from 'config/constants';
import { TAchievments } from 'interfaces/Ientities/Itest';

const manageAssessment = async (
  req: Request<{ id: string }, unknown, { action: AssessmentAction }>,
  res: Response<never, { id: string; achievments: TAchievments; results: string }>,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const { action: assessmentAction } = req.body;

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

    await updateClientCourseField(courseId, CLIENT_COURSE_FIELDS.status, statusToSet);

    res.locals.results = `Assessment has been successfully ${
      statusToSet === CourseStatus.completed
        ? ASSESSMENT_RESULTS.approved
        : ASSESSMENT_RESULTS.declined
    }.`;

    next();
  } catch (err) {
    next(err);
  }
};

export default manageAssessment;
