import { Types } from 'mongoose';

import { AssessmentAction } from 'enums/common';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { IAnswer, ITest, TAchievements, TestRuslt } from 'interfaces/Ientities/Itest';

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
  skill: string | Types.ObjectId;
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

interface IUpdateCourseTestPayload {
  questions: ITest['questions'];
  timeout: ITest['timeout'];
  title: ITest['title'];
}

interface IEditCoursePayload {
  title?: ICourse['title'];
  avatar?: ICourse['avatar'];
  description?: ICourse['description'];
  technologies?: ICourseTechnologyPayload[];
  materials?: ICourse['materials'];
  test?: IUpdateCourseTestPayload;
  complexity?: ICourse['complexity'];
}

interface IPassTestPayload {
  testId: string;
  answers: IAnswer[];
}

interface IPassTestResultPayload extends TAchievements {
  result: TestRuslt;
}

export {
  ILoginPayload,
  IAssessmentActionPayload,
  IWithAssessmentPayload,
  IIdPayload,
  ICourseTechnologyPayload,
  TCreateCoursePayload,
  IPreparedCourseDataPayload,
  IEditCoursePayload,
  IUpdateCourseTestPayload,
  IPassTestPayload,
  IPassTestResultPayload,
};
