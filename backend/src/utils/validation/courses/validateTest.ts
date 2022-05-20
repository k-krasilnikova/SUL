import { ITest } from 'interfaces/Ientities/Itest';
import { IEditCoursePayload } from 'interfaces/requests/common/payloads';

import { convertToTypeUnsafe } from '../../typeConversion/common';
import { TestValidator } from '../schemas/courses';

const validateTest = (test: IEditCoursePayload['test']): ITest | null | undefined => {
  try {
    return test ? convertToTypeUnsafe<ITest>(TestValidator.validateSync(test)) : undefined;
  } catch {
    return null;
  }
};

export default validateTest;
