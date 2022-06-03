import { NextFunction } from 'express';

import {
  TGetEmployeesRequest,
  TGetEmployeesResponse,
} from 'interfaces/requests/manager/getEmployees';
import { getEmployeesProvider } from 'db/providers/userProvider';
import { populateUserStack } from 'db/providers/skillProvider';

import { mapEmployeesShortInfo } from './utils/mappers';

const getEmployees = async (
  req: TGetEmployeesRequest,
  res: TGetEmployeesResponse,
  next: NextFunction,
) => {
  try {
    const { id: managerId } = res.locals;

    const employees = await getEmployeesProvider(managerId);
    const employeesWithStack = await Promise.all(
      employees.map((employee) => populateUserStack(employee)),
    );

    const mappedEmployees = mapEmployeesShortInfo(employeesWithStack);

    res.json(mappedEmployees);
  } catch (error) {
    next(error);
  }
};

export default getEmployees;
