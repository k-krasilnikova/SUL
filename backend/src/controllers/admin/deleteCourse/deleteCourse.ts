import { NextFunction } from 'express';

import {
  TDeleteCourseRequest,
  TDeleteCourseResponse,
} from 'interfaces/requests/admin/deleteCourse';
import { checkNotDeleteCoursesProvider } from 'db/providers/clientCourseProvider';
import { deleteCourseProvider } from 'db/providers/courseProvider';
import { BadRequestError } from 'classes/errors/clientErrors';

const deleteCourse = async (
  req: TDeleteCourseRequest,
  res: TDeleteCourseResponse,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;

    if (!courseId) {
      throw new BadRequestError('Invalidate queries.');
    }

    await checkNotDeleteCoursesProvider(courseId);
    await deleteCourseProvider(courseId);

    res.json('Course deleted.');
  } catch (err) {
    next(err);
  }
};

export default deleteCourse;
