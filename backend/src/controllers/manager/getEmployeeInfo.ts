import { NextFunction } from 'express';

import {
  TGetEmployeeInfoRequest,
  TGetEmployeeInfoResponse,
} from 'interfaces/requests/manager/getEmployeeInfo';
import { IUser } from 'interfaces/Ientities/Iusers';
import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { getAllClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { populateUserStack, populateUserTechnologies } from 'db/providers/skillProvider';
import { mapEmployeeInfo } from 'utils/normaliser/employees';

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
