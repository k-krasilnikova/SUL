import { IStackMember } from '../Ientities/IStackMember';
import { ICourse } from '../Ientities/Icourses';
import { IClientCourse } from '../Ientities/IclientCourses';
import { ITechnologyGroup, IUser, TUserPopulated } from '../Ientities/Iusers';

interface ILocals {
  id: string;
  courseId: string | undefined;
  clientCourseId: string | undefined;
  userId: string | undefined;
  managerId: string | undefined;
  results: Record<string, never>;
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
  stack: Pick<IStackMember, 'name'>[];
}

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

type TEmployeeCourse = Pick<ICourse, 'title' | 'avatar'>;

type TLocalsManager = ILocals;
type TLocalsUser = Omit<ILocals, 'managerId'>;

export {
  TLocalsManager,
  TLocalsUser,
  IEmployeeInfo,
  IEmployeeShortInfo,
  IEmployeeClientCourse,
  TEmployeeCourse,
};
