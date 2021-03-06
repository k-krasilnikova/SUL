import { UserRank } from 'enums/users';

import {
  IStackMember,
  IUserStackMemberDatabase,
  TUserStackMemberShort,
} from '../entities/stackMember';
import { ICourse } from '../entities/courses';
import { IClientCourse, IClientCoursePopulated } from '../entities/clientCourses';
import { ITechnologyGroup, IUser, TUserPopulated } from '../entities/users';
import { ITimePeriod } from '../common/datetime';

interface ILocals {
  id: string;
  courseId: string | undefined;
  clientCourseId: string | undefined;
  userId: string | undefined;
  managerId: string | undefined;
  withAssessment?: boolean;
  results: Record<string, unknown>;
}

interface IEmployeeInfo
  extends Pick<
    TUserPopulated,
    | '_id'
    | 'firstName'
    | 'lastName'
    | 'position'
    | 'group'
    | 'avatar'
    | 'birthday'
    | 'skype'
    | 'phone'
    | 'rank'
  > {
  courses: IEmployeeClientCourse[];
  technologies: ITechnologyGroup[];
  stack: TUserStackMemberShort[];
}

type TUserInfoResponse = Omit<IUser, 'passwordHash'> & {
  pendingRequestsAmount?: number;
  pendingAssessmentsAmount?: number;
};

interface IEmployeeShortInfo
  extends Pick<
    IUser,
    '_id' | 'firstName' | 'lastName' | 'position' | 'rank' | 'group' | 'avatar' | 'phone' | 'skype'
  > {
  stack: IEmployeeInfo['stack'];
}

interface IEmployeeClientCourse extends Pick<IClientCourse, 'status' | 'progress' | 'date'> {
  course: TEmployeeCourse;
}

interface ITestResultResponse {
  answers: { qN: number; isCorrect: boolean }[];
  percentage: number;
}

interface ICoursesMapResponse {
  userRank: UserRank;
  stackMap: IStackMapElement[];
}

interface IStackMapElement {
  stack: IStackMember['name'];
  isPrimary: IUserStackMemberDatabase['isPrimary'];
  coursesMap: ICoursesMapElement[];
}

interface ICoursesMapElement {
  rank: UserRank;
  courses: ICourseShortInfo[];
}

interface ICourseShortInfo {
  _id: ICourse['_id'];
  title: ICourse['title'];
  avatar: ICourse['avatar'];
  isCompleted: boolean;
  clientCourseId?: IClientCourse['_id'];
}

type TEmployeeCourse = Pick<ICourse, 'title' | 'avatar'>;

type TLocalsManager = ILocals;
type TLocalsUser = Omit<ILocals, 'managerId'>;

type TAssessmentRequest = Pick<IClientCoursePopulated, 'user' | 'course' | '_id'> & {
  elapsed: ITimePeriod;
};

type TNotification = Omit<ILocals, 'managerId' | 'results'>;

export {
  TLocalsManager,
  TLocalsUser,
  IEmployeeInfo,
  IEmployeeShortInfo,
  IEmployeeClientCourse,
  ICoursesMapResponse,
  TEmployeeCourse,
  ITestResultResponse,
  ICourseShortInfo,
  ICoursesMapElement,
  IStackMapElement,
  TAssessmentRequest,
  TUserInfoResponse,
  TNotification,
};
