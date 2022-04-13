import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const isValidTitle = (title: IUpdateCourseBody['title']): boolean =>
  Boolean(title && typeof title === 'string');

export default isValidTitle;
