import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const isValidTitle = (description: IUpdateCourseBody['title']): boolean =>
  Boolean(description && typeof description === 'string');

export default isValidTitle;
