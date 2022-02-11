import { getEmployeesProvider } from 'db/providers/userProvider';
import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const getEmployees = async (
  req: Request,
  res: Response<unknown, { id: string }>,
  next: TMiddlewareCall,
) => {
  try {
    const { id: managerId } = res.locals;
    const employees = await getEmployeesProvider(managerId);
    res.json(employees);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getEmployees;
