import { ICourseTechsFromWeb, IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

import { TechnologiesValidator } from '../schemas/courses';

const validateTechnologies = (
  techs: IUpdateCourseBody['technologies'],
): ICourseTechsFromWeb[] | null => {
  try {
    return TechnologiesValidator.validateSync(techs);
  } catch {
    return null;
  }
};

export default validateTechnologies;
