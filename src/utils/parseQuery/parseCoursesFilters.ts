import { SortOrder } from 'enums/common';
import { UserRank } from 'enums/users';
import { IGetCoursesRequestQuery } from 'interfaces/requests/common/queries';

const parseCourseQuery = ({
  complexity,
  order,
  pageN,
}: Pick<IGetCoursesRequestQuery, 'complexity' | 'order' | 'pageN'>) => {
  const complexityParsed = complexity && complexity.map((el) => UserRank[el]);
  const orderToNumber = order === String(true) ? SortOrder.asc : SortOrder.desc;
  const pageToNumber = Number(pageN);
  return { complexity: complexityParsed, pageN: pageToNumber, order: orderToNumber };
};

export { parseCourseQuery };
