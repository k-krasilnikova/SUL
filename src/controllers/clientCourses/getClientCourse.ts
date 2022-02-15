import { NextFunction, Request, Response } from 'express';
import { getClientCourseProvider } from 'db/providers/clientCourseProvider';

const getClientCourseById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const courses = await getClientCourseProvider(clientCourseId);
    res.json(courses);
  } catch (err) {
    next(err);
  }
};

export default getClientCourseById;
