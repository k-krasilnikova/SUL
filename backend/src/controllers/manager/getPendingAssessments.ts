import { NextFunction } from 'express';

import {
  TGetPendingAssessmentsRequest,
  TGetPendingAssessmentsResponse,
} from 'interfaces/requests/manager/getPendingAssessments';
import { getPendingAssessmentsProvider } from 'db/providers/clientCourseProvider';
import { getEmployeesProvider } from 'db/providers/userProvider';
import { convertToAssessmentsRequests } from 'utils/typeConversion/clientCourses/clientCoursesTypeConversions';

const getPendingAssessments = async (
  req: TGetPendingAssessmentsRequest,
  res: TGetPendingAssessmentsResponse,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const employees = await getEmployeesProvider(userId);

    const employeesIds = employees.map((employee) => String(employee._id));

    const clientCourses = await getPendingAssessmentsProvider(employeesIds);

    const assessments = convertToAssessmentsRequests(clientCourses);

    res.json(assessments);
  } catch (error) {
    next(error);
  }
};

export default getPendingAssessments;
