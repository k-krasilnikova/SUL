import { SortOrder } from 'enums/common';
import CourseStatus from 'enums/courses';
import { UserRank } from 'enums/users';

interface IGetCoursesRequestQuery {
  title?: string;
  orderField?: string;
  order?: string;
  nPerPage?: number;
  technologies?: string[];
  complexity?: Array<keyof typeof UserRank>;
  status?: Array<keyof typeof CourseStatus>;
  pageN?: string;
}

type TGetCoursesParams = Omit<
  IGetCoursesRequestQuery,
  'complexity' | 'order' | 'pageN' | 'nPerPage'
> & {
  pageN?: number;
  nPerPage?: number;
  complexity?: number[];
  order?: SortOrder;
};

interface IStageQuery {
  stage: string;
}

interface ITitleQuery {
  title: string;
}

interface ISearchQuery {
  search: string;
  order?: SortOrder;
}

export { IGetCoursesRequestQuery, IStageQuery, ITitleQuery, ISearchQuery, TGetCoursesParams };