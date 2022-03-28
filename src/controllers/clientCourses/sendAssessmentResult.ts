import { NextFunction, Request, Response } from 'express';

import CourseStatus from 'enums/coursesEnums';

const sendAssessmentResult = async (
  req: Request,
  res: Response<
    string,
    {
      status?: CourseStatus;
    }
  >,
  next: NextFunction,
) => {
  try {
    const { status } = res.locals;
    res.json(
      `Assessment has been successfully ${
        status === CourseStatus.completed ? 'approved' : 'declined'
      }.`,
    );
  } catch (err) {
    next(err);
  }
};

export default sendAssessmentResult;
