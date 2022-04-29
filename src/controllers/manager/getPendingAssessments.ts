import { NextFunction, Request, Response } from 'express';

import { getPendingAssessmentsProvider } from 'db/providers/clientCourseProvider';
import { getEmployeesProvider } from 'db/providers/userProvider';
import { TAssessmentRequest } from 'interfaces/IResponse/IResponse';
import { convertToAssessmentsRequests } from 'utils/typeConversion/clientCourses/clientCoursesTypeConversions';

const getPendingAssessments = async (
  req: Request,
  res: Response<never, { id: string; results: TAssessmentRequest[] }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const employees = await getEmployeesProvider(userId);

    const employeesIds = employees.map((employee) => String(employee._id));

    const clientCourses = await getPendingAssessmentsProvider(employeesIds);

    const assessments = convertToAssessmentsRequests(clientCourses);

    res.locals.results = assessments;
    next();
  } catch (error) {
    next(error);
  }
};

export default getPendingAssessments;
