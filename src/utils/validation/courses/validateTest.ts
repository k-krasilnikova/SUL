import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

import { convertToTypeUnsafe } from '../../typeConversion/common';
import { TestValidator } from '../schemas/courses';

const validateTest = (test: IUpdateCourseBody['test']): IUpdateCourseBody['test'] | null => {
  try {
    const validatedTest =
      test && convertToTypeUnsafe<IUpdateCourseBody['test']>(TestValidator.validateSync(test));
    return validatedTest;
  } catch (err) {
    return null;
  }
};

export default validateTest;
