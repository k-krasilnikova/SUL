import { Types } from 'mongoose';

import ISkill from '../Ientities/ISkill';
import { ICourse } from '../Ientities/Icourses';
import { ITest } from '../Ientities/Itest';
import { ITimePeriod } from '../common/datetime';

interface ICourseWithStatus extends ICourse {
  status?: string;
}

type ICourseInfo = Omit<ICourse, 'materials'>;

interface IProgress {
  stage: number;
  isCompleted: boolean;
}

interface ICourseTechsFromWeb {
  skill: Types.ObjectId | string;
  points: number;
}

interface ICourseDataValidationResult {
  title?: ICourse['title'] | null;
  avatar?: ICourse['avatar'] | null;
  description?: ICourse['description'] | null;
  materials?: ICourse['materials'] | null;
  complexity?: ICourse['complexity'] | null;
  test?: ITest | null;
  technologies?: ICourseTechsFromWeb[] | null;
  lessons?: number | null;
  duration?: ITimePeriod | null;
  similarCourses?: ICourse[] | null;
}

interface ICourseToAssign {
  courseId: string | Types.ObjectId;
  assessment?: boolean;
}

type TAvailableCourse = Pick<ICourse, '_id' | 'title'>;

type ICoursePopulated = Omit<ICourse, 'technologies'> & {
  technologies: { skill: ISkill; points: number }[];
  test: ITest;
};

type ICourseInfoPopulated = ICourseInfo & { technologies: ISkill[] };

export {
  ICourseWithStatus,
  ICourseInfo,
  ICoursePopulated,
  ICourseInfoPopulated,
  IProgress,
  ICourseToAssign,
  TAvailableCourse,
  ICourseTechsFromWeb,
  ICourseDataValidationResult,
};
