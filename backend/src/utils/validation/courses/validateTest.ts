import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { ITest } from 'interfaces/Ientities/Itest';

import { convertToTypeUnsafe } from '../../typeConversion/common';
import { TestValidator } from '../schemas/courses';

const validateTest = (test: IUpdateCourseBody['test']): ITest | null | undefined => {
  try {
    return test ? convertToTypeUnsafe<ITest>(TestValidator.validateSync(test)) : undefined;
  } catch {
    return null;
  }
};

export default validateTest;
