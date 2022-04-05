import { SortOrder } from 'enums/common';
import ISkill from 'interfaces/Ientities/ISkill';

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

interface ICourseToAssign {
  courseId: string;
  assessment?: boolean;
}

type ICoursePopulated = Omit<ICourse, 'technologies'> & { technologies: ISkill[] };

type ICourseInfoPopulated = ICourseInfo & { technologies: ISkill[] };

export {
  IQueryCourses,
  ICourseStatus,
  ICourseInfo,
  ICoursePopulated,
  ICourseInfoPopulated,
  IProgress,
  ICourseToAssign,
};
