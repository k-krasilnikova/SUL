import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { getTestProvider } from 'db/providers/testProvider';
import { getClientCourseProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

const startTest = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status, progress }: IClientCourse = await getClientCourseProvider(clientCourseId);
    const isCoursePassed = progress.every((step) => step.isCompleted);
    if (status === CourseStatus.rejected || status === CourseStatus.pending) {
      if (isCoursePassed) {
        const test = await getTestProvider(clientCourseId);
        await updateCourseStatus(clientCourseId, CourseStatus.testing);
        res.json(test);
      } else {
        res.json(`Failed: can not start testing course. Course is not finished`);
      }
    } else {
      res.json(`Failed: can not start testing course with status: ${status}`);
    }
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default startTest;
