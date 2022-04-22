import { SortOrder } from 'enums/common';

import ISkill from '../Ientities/ISkill';
import { ICourse } from '../Ientities/Icourses';
import { ITest } from '../Ientities/Itest';
import { ICourseDuration } from '../common/datetime';

interface IQueryCourses {
  pageN?: number;
  title?: string;
  orderField?: string;
  order?: SortOrder;
  nPerPage?: number;
}

interface ICourseWithStatus extends ICourse {
  status?: string;
}

interface ICourseInfo extends Omit<ICourseWithStatus, 'materials'> {
  duration: ICourseDuration;
  lessons: number;
  materials: undefined;
}

interface IProgress {
  stage: number;
  isCompleted: boolean;
}

interface IUpdateCourseBody {
  title?: ICourse['title'];
  avatar?: ICourse['avatar'];
  description?: ICourse['description'];
  skills?: {
    skill: string;
    points: number;
  }[];
  materials?: ICourse['materials'];
  test?: ITest['questions'];
}

interface ICourseTechsFromWeb {
  skill: string;
  points: number;
}

interface ICreateCourseBody {
  title?: ICourse['title'];
  avatar?: ICourse['avatar'];
  description?: ICourse['description'];
  technologies?: ICourseTechsFromWeb[];
  materials?: ICourse['materials'];
  complexity?: ICourse['complexity'];
  test?: ITest;
}

interface IPreparedCourseData {
  title?: ICourse['title'];
  avatar?: ICourse['avatar'];
  description?: ICourse['description'];
  materials?: ICourse['materials'];
  complexity?: ICourse['complexity'];
  test?: ITest;
  technologies?: ICourse['technologies'];
}

interface ICourseToAssign {
  courseId: string;
  assessment?: boolean;
}

type TAvailableCourse = Pick<ICourse, '_id' | 'title'>;

type ICoursePopulated = Omit<ICourse, 'technologies'> & { technologies: ISkill[] };

type ICourseInfoPopulated = ICourseInfo & { technologies: ISkill[] };

export {
  IQueryCourses,
  ICourseWithStatus,
  ICourseInfo,
  ICoursePopulated,
  ICourseInfoPopulated,
  IProgress,
  IUpdateCourseBody,
  ICourseToAssign,
  TAvailableCourse,
  ICreateCourseBody,
  IPreparedCourseData,
  ICourseTechsFromWeb,
};
