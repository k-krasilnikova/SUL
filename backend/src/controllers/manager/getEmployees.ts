import { NextFunction, Request, Response } from 'express';

import { getEmployeesProvider } from 'db/providers/userProvider';
import { IUser } from 'interfaces/Ientities/Iusers';

const getEmployees = async (
  req: Request,
  res: Response<IUser[], { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: managerId } = res.locals;
    const employees = await getEmployeesProvider(managerId);
    res.json(employees);
  } catch (error) {
    next(error);
  }
};

export default getEmployees;
