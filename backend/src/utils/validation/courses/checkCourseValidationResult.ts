import { isEmpty, isNull, isUndefined, pickBy } from 'lodash';

import { ICourseDataValidationResult } from 'interfaces/courses/query';
import { BadRequestError } from 'classes/errors/clientErrors';

import { COURSE_VALIDATION_ERRORS } from './constants';

const isNullOrUndefined = (value: unknown): boolean => isNull(value) || isUndefined(value);

const extractNullFields = (result: ICourseDataValidationResult) => pickBy(result, isNull);

const extractNullAndUndefinedFields = (result: ICourseDataValidationResult) =>
  pickBy(result, isNullOrUndefined);

const checkCourseValidationResult = (
  result: ICourseDataValidationResult,
  isStrict?: boolean,
): void => {
  const invalidFields = isStrict
    ? extractNullAndUndefinedFields(result)
    : extractNullFields(result);

  if (!isEmpty(invalidFields)) {
    const errorField = Object.keys(invalidFields)[0];
    throw new BadRequestError(COURSE_VALIDATION_ERRORS[errorField]);
  }
};

export default checkCourseValidationResult;
