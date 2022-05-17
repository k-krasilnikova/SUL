import { NextFunction, Request, Response } from 'express';

import { validateCourseData } from 'utils/validation/courses';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { getSkillsToCourseTechs } from 'db/providers/skillProvider';
import { addCourseTest } from 'db/providers/testProvider';
import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { ITest } from 'interfaces/Ientities/Itest';
import checkCourseValidationResult from 'utils/validation/courses/checkCourseValidationResult';

const preparingCourseData = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseDataFromRequest = req.body;

    const validationResult = validateCourseData(courseDataFromRequest);

    checkCourseValidationResult(validationResult, true);

    if (validationResult.technologies) {
      validationResult.technologies = await getSkillsToCourseTechs(validationResult.technologies);
    }

    if (validationResult.test) {
      validationResult.test = convertToTypeUnsafe<ITest>(
        await addCourseTest(validationResult.test),
      );
    }

    res.locals.preparedCourseData = validationResult;
    next();
  } catch (err) {
    next(err);
  }
};

export default preparingCourseData;
