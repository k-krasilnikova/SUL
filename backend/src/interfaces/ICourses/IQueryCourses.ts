import { SortOrder } from 'enums/common';

import { ICourse } from '../Ientities/Icourses';
import { ICourseDuration } from '../common/datetime';

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

interface ICourseInfo extends Omit<ICourseStatus, 'materials'> {
  duration: ICourseDuration;
  lessons: number;
  materials: undefined;
}

interface IProgress {
  stage: number;
  isCompleted: boolean;
}

export { IQueryCourses, ICourseStatus, ICourseInfo, IProgress };
