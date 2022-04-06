import { isValidObjectId } from 'mongoose';

import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const isValidTechnologies = (techs: IUpdateCourseBody['skills']): boolean => {
  const validationChecks = techs?.map((tech) => isValidObjectId(tech));

  const allChecksPassed = Boolean(validationChecks?.every((validation) => validation));

  return allChecksPassed;
};

export default isValidTechnologies;
