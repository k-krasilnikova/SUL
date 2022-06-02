import { NextFunction } from 'express';

import {
  TGetEmployeeInfoRequest,
  TGetEmployeeInfoResponse,
} from 'interfaces/requests/manager/getEmployeeInfo';
import { IUser } from 'interfaces/entities/users';
import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';
import { getAllClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { populateUserStack, populateUserTechnologies } from 'db/providers/skillProvider';

import { mapEmployeeInfo } from './utils/mappers';

const getEmployeeInfo = async (
  req: TGetEmployeeInfoRequest,
  res: TGetEmployeeInfoResponse,
  next: NextFunction,
) => {
  try {
    const { id: userId } = req.params;

    const employee: IUser = await getUserProvider(userId);
    const courses: IClientCoursePopulated[] = await getAllClientCoursesProvider(userId);
    const employeeTechs = await populateUserTechnologies(employee);
    const employeePopulated = await populateUserStack(employeeTechs);

    const employeeInfo = mapEmployeeInfo(employeePopulated, courses);

    res.json(employeeInfo);
  } catch (error) {
    next(error);
  }
};

export default getEmployeeInfo;
