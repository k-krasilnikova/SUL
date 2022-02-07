import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { getTestProvider } from 'db/providers/testProvider';
import { updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';

const startTest = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const test = await getTestProvider(clientCourseId);
    await updateCourseStatus(clientCourseId, CourseStatus.testing);
    res.json(test);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default startTest;
