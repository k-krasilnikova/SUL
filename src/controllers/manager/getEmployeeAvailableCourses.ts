import { NextFunction, Request, Response } from 'express';

import { getUserProvider } from 'db/providers/userProvider';
import { getAllCoursesProvider } from 'db/providers/courseProvider';
import { IQueryCourses, TAvailableCourse } from 'interfaces/ICourses/IQueryCourses';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';
import {
  filterOnlyAvailableCourses,
  normalizeeAvailableCoursesInfo,
} from 'utils/normaliser/courses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const getEmployeeAvailableCourses = async (
  req: Request<{ id: string }, never, never, { title?: IQueryCourses['title'] }>,
  res: Response<
    never,
    {
      id: string;
      results: TAvailableCourse[];
    }
  >,
  next: NextFunction,
) => {
  try {
    const { id: employeeId } = req.params;
    const { id: managerId } = res.locals;
    const { title: searchTitle } = req.query;

    const employee = await getUserProvider(employeeId);

    const isEmployeeBelongsToManager = isEqualObjectId(employee.managerId, managerId);
    if (!isEmployeeBelongsToManager) {
      throw new BadRequestError('Employee does not belong to user.');
    }

    const courses = await getAllCoursesProvider(employeeId, searchTitle);

    const availableCourses = filterOnlyAvailableCourses(courses);

    const availableCoursesResponse = normalizeeAvailableCoursesInfo(availableCourses);

    res.locals.results = availableCoursesResponse;
    next();
  } catch (error) {
    next(error);
  }
};

export default getEmployeeAvailableCourses;
