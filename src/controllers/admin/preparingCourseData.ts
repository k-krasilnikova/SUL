import { NextFunction, Request, Response } from 'express';

import { validateCourseData } from 'utils/validation/courses';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { convertToCourseDuration } from 'utils/typeConversion/datetime/datetimeTypeConversions';
import { getSkillsToCourseTechs } from 'db/providers/skillProvider';
import { addCourseTest } from 'db/providers/testProvider';
import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { ITest } from 'interfaces/Ientities/Itest';
import { ESTIMATE_TIME_PER_LESSON } from 'config/constants';

const preparingCourseData = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseDataFromRequest = req.body;

    const validCourseData = validateCourseData(courseDataFromRequest);

    validCourseData.technologies = await getSkillsToCourseTechs(validCourseData.technologies);

    validCourseData.test = convertToTypeUnsafe<ITest>(await addCourseTest(validCourseData.test));

    const durationSeconds =
      validCourseData.materials.length * ESTIMATE_TIME_PER_LESSON + validCourseData.test.timeout;
    const duration = convertToCourseDuration(durationSeconds);

    validCourseData.duration = duration;

    res.locals.preparedCourseData = validCourseData;
    next();
  } catch (err) {
    next(err);
  }
};

export default preparingCourseData;
