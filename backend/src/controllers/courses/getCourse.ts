import { NextFunction, Request, Response } from 'express';

import { getCourseProvider } from 'db/providers/courseProvider';

const getCourseById = async (
  req: Request,
  res: Response<unknown, { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const { id: userId } = res.locals;

    const course = await getCourseProvider(courseId, userId);

    res.json(course);
  } catch (error) {
    next(error);
  }
};

export default getCourseById;
