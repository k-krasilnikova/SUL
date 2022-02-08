import { Request, Response } from 'express';

import { getCourseProvider } from 'db/providers/courseProvider';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getCourseById = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: courseId } = req.params;
    const course = await getCourseProvider(courseId);
    res.json(course);
  } catch (error) {
    next(error);
  }
};

export default getCourseById;
