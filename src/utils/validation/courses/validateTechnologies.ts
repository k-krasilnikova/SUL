import { ICourseTechnologyPayload, IEditCoursePayload } from 'interfaces/requests/common/payloads';

import { TechnologiesValidator } from '../schemas/courses';

const validateTechnologies = (
  techs: IEditCoursePayload['technologies'],
): ICourseTechnologyPayload[] | null | undefined => {
  try {
    return techs ? TechnologiesValidator.validateSync(techs) : undefined;
  } catch {
    return null;
  }
};

export default validateTechnologies;
