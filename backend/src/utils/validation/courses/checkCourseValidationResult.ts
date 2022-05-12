import { isEmpty, isNull, pickBy } from 'lodash';

import { ICourseDataValidationResult } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { COURSE_VALIDATION_ERRORS } from './constants';

const checkCourseValidationResult = (result: ICourseDataValidationResult): void => {
  const invalidFields = pickBy(result, isNull);

  if (isEmpty(invalidFields)) {
    return;
  }

  const errorField = Object.keys(invalidFields)[0];
  throw new BadRequestError(COURSE_VALIDATION_ERRORS[errorField]);
};

export default checkCourseValidationResult;
