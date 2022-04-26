import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

import { TechnologiesValidator } from '../schemas/courses';

const validateTechnologies = (
  techs: IUpdateCourseBody['technologies'],
): IUpdateCourseBody['technologies'] | null => {
  try {
    return TechnologiesValidator.validateSync(techs);
  } catch {
    return null;
  }
};

export default validateTechnologies;
