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

interface IEmployeeShortInfo
  extends Pick<
    IUser,
    '_id' | 'firstName' | 'lastName' | 'position' | 'rank' | 'stack' | 'group' | 'phone' | 'skype'
  > {
  courses: undefined;
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
  > {
  courses: IEmployeeClientCourse[];
  technologies: ITechnologyGroup[];
}

interface IEmployeeClientCourse extends Pick<IClientCourse, 'status' | 'progress' | 'date'> {
  course: TEmployeeCourse;
}

type TEmployeeCourse = Pick<ICourse, 'title' | 'avatar'>;

type TLocalsManager = ILocals;
type TLocalsUser = Omit<ILocals, 'managerId'>;

export { TLocalsManager, TLocalsUser, IEmployeeInfo, IEmployeeClientCourse, TEmployeeCourse };
