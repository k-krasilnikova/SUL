import { NextFunction, Request, Response } from 'express';

import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { INITIAL_INDX } from 'config/constants';
import {
  assignCourseToEmployee,
  getAllClientCoursesProvider,
} from 'db/providers/clientCourseProvider';
import { materialsCounterProvider } from 'db/providers/courseProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { ICourseToAssign } from 'interfaces/ICourses/IQueryCourses';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import {
  isCoursesToAssignHaveDuplicates,
  removeCoursesToAssignDuplicates,
} from 'utils/normaliser/queryCourses';

const assignEmployeeCourses = async (
  req: Request<{ id: string }, never, ICourseToAssign[]>,
  res: Response<never, { id: string; results: string }>,
  next: NextFunction,
) => {
  try {
    const { id: employeeId } = req.params;
    const { id: managerId } = res.locals;
    const coursesToAssign = req.body;

    const employee = await getUserProvider(employeeId);
    const manager = await getUserProvider(managerId);

    if (String(employee.managerId) !== String(manager._id)) {
      throw new BadRequestError('Employee does not belong to user.');
    }

    const reducedCoursesToAssign = removeCoursesToAssignDuplicates(coursesToAssign);

    const employeeClientCourses = await getAllClientCoursesProvider(employeeId);

    const hasDuplicates = isCoursesToAssignHaveDuplicates(
      employeeClientCourses,
      reducedCoursesToAssign,
    );

    if (hasDuplicates) {
      throw new BadRequestError(`Attemt to assign duplicated courses.`);
    }

    const assignedCourses = await Promise.all(
      reducedCoursesToAssign.map(async (courseToAssign) => {
        try {
          const materialsCount = await materialsCounterProvider(courseToAssign.courseId);
          const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
          const assignedCourse = await assignCourseToEmployee(
            employeeId,
            courseToAssign.courseId,
            progressDto,
            courseToAssign.assessment,
          );
          return assignedCourse;
        } catch {
          return undefined;
        }
      }),
    );

    const assignedCoursesAmmount = assignedCourses.filter((doc) => !!doc).length;

    res.locals.results = `${assignedCoursesAmmount}/${assignedCourses.length} courses successfully assigned.`;

    next();
  } catch (error) {
    next(error);
  }
};

export default assignEmployeeCourses;
