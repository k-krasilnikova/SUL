import { SortOrder } from 'enums/common';

import ISkill from '../Ientities/ISkill';
import { ICourse } from '../Ientities/Icourses';
import { ITest } from '../Ientities/Itest';
import { ICourseDuration, ITimePeriod } from '../common/datetime';

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
  technologies?: ICourseTechsFromWeb[];
  materials?: ICourse['materials'];
  test?: IUpdateCourseTest;
  complexity?: ICourse['complexity'];
}

interface IUpdateCourseTest {
  questions: ITest['questions'];
  timeout: ITest['timeout'];
  title: ITest['title'];
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
  title: ICourse['title'];
  avatar: ICourse['avatar'];
  description: ICourse['description'];
  materials: ICourse['materials'];
  complexity: ICourse['complexity'];
  test: ITest;
  technologies: ICourseTechsFromWeb[];
  lessons: number;
  duration: ITimePeriod;
  similarCourses: ICourse[];
}

interface ICourseDataValidationResult {
  title: ICourse['title'] | null;
  avatar: ICourse['avatar'] | null;
  description: ICourse['description'] | null;
  materials: ICourse['materials'] | null;
  complexity: ICourse['complexity'] | null;
  test: ITest | null;
  technologies: ICourseTechsFromWeb[] | null;
  lessons: number | null;
  duration: ITimePeriod | null;
  similarCourses: ICourse[] | null;
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
  IUpdateCourseTest,
  ICreateCourseBody,
  IPreparedCourseData,
  ICourseTechsFromWeb,
  ICourseDataValidationResult,
};
