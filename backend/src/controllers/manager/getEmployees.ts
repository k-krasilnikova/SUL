import { NextFunction, Request, Response } from 'express';

import { getEmployeesProvider } from 'db/providers/userProvider';
import { populateUserStack } from 'db/providers/skillProvider';
import { mapEmployeesShortInfo } from 'utils/normaliser/employees';
import { IEmployeeShortInfo } from 'interfaces/IResponse/IResponse';

const getEmployees = async (
  req: Request,
  res: Response<IEmployeeShortInfo[], { id: string }>,
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
