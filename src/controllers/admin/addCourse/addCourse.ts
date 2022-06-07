import { NextFunction } from 'express';

import { TAddCourseRequest, TAddCourseResponse } from 'interfaces/requests/admin/addCourse';
import { addCourseProvider, addSimilarCoursesProvider } from 'db/providers/courseProvider';

const addCourse = async (req: TAddCourseRequest, res: TAddCourseResponse, next: NextFunction) => {
  try {
    const { preparedCourseData } = res.locals;

    const newCourse = await addCourseProvider(preparedCourseData);

    await addSimilarCoursesProvider(newCourse);

    res.json(newCourse);
  } catch (error) {
    next(error);
  }
};

export default addCourse;
