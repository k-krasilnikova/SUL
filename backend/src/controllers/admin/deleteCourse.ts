import { NextFunction, Request, Response } from 'express';

import { checkNotDeleteCoursesProvider } from 'db/providers/clientCourseProvider';
import { deleteCourseProvider } from 'db/providers/courseProvider';

const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId } = req.params;

    await checkNotDeleteCoursesProvider(courseId);

    await deleteCourseProvider(courseId);
    res.json('Course deleted.');
  } catch (err) {
    next(err);
  }
};

export default deleteCourse;
