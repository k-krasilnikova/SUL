import { AssessmentAction } from 'enums/common';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { ITest } from 'interfaces/Ientities/Itest';

interface ILoginPayload {
  login: string;
  password: string;
}

interface IAssessmentActionPayload {
  action: AssessmentAction;
}

interface IWithAssessmentPayload {
  assessment: boolean;
}

interface IIdPayload {
  id: string;
}

interface ICourseTechnologyPayload {
  skill: string;
  points: number;
}

interface IPreparedCourseDataPayload {
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

type TCreateCoursePayload = Pick<
  Partial<IPreparedCourseDataPayload>,
  'title' | 'avatar' | 'description' | 'technologies' | 'materials' | 'complexity' | 'test'
>;

export {
  ILoginPayload,
  IAssessmentActionPayload,
  IWithAssessmentPayload,
  IIdPayload,
  ICourseTechnologyPayload,
  TCreateCoursePayload,
  IPreparedCourseDataPayload,
};
