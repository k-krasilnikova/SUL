import { NextFunction, Request, Response } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import { ICourseInfo, IQueryCourses } from 'interfaces/ICourses/IQueryCourses';
import { convertToCourseInfoArray } from 'utils/typeConversion/courses/coursesTypeConversions';

const getAllCourses = async (
  req: Request,
  res: Response<ICourseInfo[], { id: string }>,
  next: NextFunction,
) => {
  try {
    const params: IQueryCourses = req.query;
    const { id: userId } = res.locals;

    const allCourses = await getCoursesProvider({ ...params }, userId);

    const allCoursesInfo = convertToCourseInfoArray(allCourses);

    res.json(allCoursesInfo);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;
