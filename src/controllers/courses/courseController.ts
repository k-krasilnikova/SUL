import { Request, Response } from 'express';

import { getCourseProvider, getCoursesProvider } from 'db/providers/courseProvider';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { TCourses } from 'interfaces/entities/Icourses';

const getAllCourses = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const allCourses: TCourses = await getCoursesProvider();
    res.json(allCourses);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

const getCourseById = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: courseId } = req.params;
    const course = await getCourseProvider(courseId);
    res.json(course);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export { getAllCourses, getCourseById };
