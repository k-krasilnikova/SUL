import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { getTestProvider } from 'db/providers/testProvider';
import { getCurrentProgress, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { INITIAL_INDX, REQUIRED_PCT } from 'config/constants';

const startTest = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;

    const progress = await getCurrentProgress(clientCourseId);
    if (progress[INITIAL_INDX].currProgress < REQUIRED_PCT) {
      throw new BadRequestError("Can not start test till all the stages haven't been passed.");
    }
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
