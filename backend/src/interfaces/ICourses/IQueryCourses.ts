import { SortOrder } from 'enums/common';

import { ICourse } from '../Ientities/Icourses';

interface IQueryCourses {
  pageN?: number;
  title?: string;
  orderField?: string;
  order?: SortOrder;
  nPerPage?: number;
}

interface ICourseStatus extends ICourse {
  status?: string;
}

interface IProgress {
  stage: number;
  isCompleted: boolean;
}

export { IQueryCourses, ICourseStatus, IProgress };