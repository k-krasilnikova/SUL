import { isValidObjectId } from 'mongoose';

import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { NOTHING } from 'config/constants';

const isValidTechnologies = (techs: IUpdateCourseBody['skills']): boolean => {
  const validationChecks = techs?.map(
    (tech) =>
      isValidObjectId(tech.skill) && typeof tech.points === 'number' && tech.points > NOTHING,
  );

  const allChecksPassed = Boolean(validationChecks?.every((validation) => validation));

  return allChecksPassed;
};

export default isValidTechnologies;
