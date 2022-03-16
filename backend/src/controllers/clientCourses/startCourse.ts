import { NextFunction, Request, Response } from 'express';

import { getStatusProvider, updateClientCourseField } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const startCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.approved) {
      throw new BadRequestError("Course hasn't been approved yet.");
    }
    await updateClientCourseField(clientCourseId, 'status', CourseStatus.started);
    res.json({ start: true });
  } catch (err) {
    next(err);
  }
};

export default startCourse;
