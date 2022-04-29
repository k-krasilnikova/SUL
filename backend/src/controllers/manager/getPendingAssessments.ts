import { NextFunction, Request, Response } from 'express';

import { getPendingAssessmentsProvider } from 'db/providers/clientCourseProvider';
import { getEmployeesProvider } from 'db/providers/userProvider';
import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';

const getPendingAssessments = async (
  req: Request,
  res: Response<never, { id: string; results: IClientCoursePopulated[] }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;

    const employees = await getEmployeesProvider(userId);

    const employeesIds = employees.map((employee) => String(employee._id));

    const assessments = await getPendingAssessmentsProvider(employeesIds);

    res.locals.results = assessments;
    next();
  } catch (error) {
    next(error);
  }
};

export default getPendingAssessments;
