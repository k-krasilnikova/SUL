import { NextFunction } from 'express';

import {
  TGetEmployeeAvailableCoursesRequest,
  TGetEmployeeAvailableCoursesResponse,
} from 'interfaces/requests/manager/getEmployeeAvailableCourses';

import { getUserProvider } from 'db/providers/userProvider';
import { getAllCoursesProvider } from 'db/providers/courseProvider';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

import { filterOnlyAvailableCourses, mapAvailableCoursesInfo } from './utils/mappers';

const getEmployeeAvailableCourses = async (
  req: TGetEmployeeAvailableCoursesRequest,
  res: TGetEmployeeAvailableCoursesResponse,
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
    const availableCoursesResponse = mapAvailableCoursesInfo(availableCourses);

    res.locals.results = availableCoursesResponse;
    next();
  } catch (error) {
    next(error);
  }
};

export default getEmployeeAvailableCourses;
