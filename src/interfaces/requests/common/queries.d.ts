import { SortOrder } from 'enums/common';

interface IGetCoursesRequestQuery {
  pageN?: number;
  title?: string;
  orderField?: string;
  order?: SortOrder;
  nPerPage?: number;
}

interface IStageQuery {
  stage: string;
}

interface ITitleQuery {
  title: string;
}

interface ISearchQuery {
  search: string;
}

export { IGetCoursesRequestQuery, IStageQuery, ITitleQuery, ISearchQuery };
