import { NextFunction, Request, Response } from 'express';
import { getCourseProvider } from 'db/providers/courseProvider';

const getCourseById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: courseId } = req.params;
    const course = await getCourseProvider(courseId);
    res.json(course);
  } catch (error) {
    next(error);
  }
};

export default getCourseById;
