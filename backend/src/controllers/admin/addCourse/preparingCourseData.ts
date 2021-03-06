import { NextFunction } from 'express';

import { TAddCourseRequest, TAddCourseResponse } from 'interfaces/requests/admin/addCourse';
import { ITest } from 'interfaces/entities/test';
import checkCourseValidationResult from 'utils/validation/courses/checkCourseValidationResult';
import { validateCourseData } from 'utils/validation/courses';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { getSkillsToCourseTechs } from 'db/providers/skillProvider';
import { addCourseTest } from 'db/providers/testProvider';
import { IPreparedCourseDataPayload } from 'interfaces/requests/common/payloads';

const preparingCourseData = async (
  req: TAddCourseRequest,
  res: TAddCourseResponse,
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

    res.locals.preparedCourseData =
      convertToTypeUnsafe<IPreparedCourseDataPayload>(validationResult);
    next();
  } catch (err) {
    next(err);
  }
};

export default preparingCourseData;
