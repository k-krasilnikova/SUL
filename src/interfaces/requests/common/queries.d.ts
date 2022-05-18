import { SortOrder } from 'enums/common';

interface IGetCoursesRequestQuery {
  pageN?: number;
  title?: string;
  orderField?: string;
  order?: SortOrder;
  nPerPage?: number;
}

export { IGetCoursesRequestQuery };
