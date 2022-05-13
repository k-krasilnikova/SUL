import { ICourseTechsFromWeb, IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

import { TechnologiesValidator } from '../schemas/courses';

const validateTechnologies = (
  techs: IUpdateCourseBody['technologies'],
): ICourseTechsFromWeb[] | null | undefined => {
  try {
    return techs ? TechnologiesValidator.validateSync(techs) : undefined;
  } catch {
    return null;
  }
};

export default validateTechnologies;
