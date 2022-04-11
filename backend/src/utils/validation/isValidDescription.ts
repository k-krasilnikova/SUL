import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const isValidDescription = (description: IUpdateCourseBody['description']): boolean =>
  Boolean(description && typeof description === 'string');

export default isValidDescription;
