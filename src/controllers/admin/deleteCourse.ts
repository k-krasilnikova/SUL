import { NextFunction, Request, Response } from 'express';

import { getClientCoursesByCourseId } from 'db/providers/clientCourseProvider';
import { deleteCourseProvider } from 'db/providers/courseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courseId = req.params.id;

    const clientCourses = await getClientCoursesByCourseId(courseId);
    const notDeleteCourses = clientCourses.find(
      (clientCourse) =>
        clientCourse.status === CourseStatus.started ||
        clientCourse.status === CourseStatus.testing,
    );

    if (notDeleteCourses) {
      throw new BadRequestError(
        'The course has already started or is being tested for some people',
      );
    }
    await deleteCourseProvider(courseId);
    res.json('Course deleted');
  } catch (e) {
    next(e);
  }
};

export default deleteCourse;
