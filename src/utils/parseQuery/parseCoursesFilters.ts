import { SortOrder } from 'enums/common';
import CourseStatus from 'enums/courses';
import { UserRank } from 'enums/users';
import { IGetCoursesRequestQuery } from 'interfaces/requests/common/queries';

const parseCourseQuery = ({
  complexity,
  order,
  pageN,
  status,
}: Pick<IGetCoursesRequestQuery, 'complexity' | 'order' | 'pageN' | 'status'>) => {
  const complexityParsed = complexity && complexity.map((value) => UserRank[value]);
  const orderToNumber = order === String(true) ? SortOrder.asc : SortOrder.desc;
  const pageToNumber = Number(pageN);
  const statusParsed = status && (status.map((value) => value.toLowerCase()) as CourseStatus[]);
  return {
    complexity: complexityParsed,
    pageN: pageToNumber,
    order: orderToNumber,
    status: statusParsed,
  };
};

export { parseCourseQuery };
