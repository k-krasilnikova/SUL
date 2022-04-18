import { NextFunction, Request, Response } from 'express';

import { getUserProvider } from 'db/providers/userProvider';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const getEmployeeAvailableCourses = async (
  req: Request<{ id: string }>,
  res: Response<
    never,
    {
      id: string;
      results: Pick<ICourse, '_id' | 'title'>;
    }
  >,
  next: NextFunction,
) => {
  try {
    const { id: employeeId } = req.params;
    const { id: managerId } = res.locals;

    const employee = await getUserProvider(employeeId);

    const isEmployeeBelongsToManager = isEqualObjectId(employee.managerId, managerId);
    if (!isEmployeeBelongsToManager) {
      throw new BadRequestError('Employee does not belong to user.');
    }
  } catch (error) {
    next(error);
  }
};

export default getEmployeeAvailableCourses;
