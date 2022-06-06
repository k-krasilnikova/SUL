import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { TUserStackMember, TUserStackMemberShort } from 'interfaces/Ientities/IStackMember';
import { IEmployeeClientCourse, TEmployeeCourse } from 'interfaces/IResponse/IResponse';

const mapEmployeeStack = (stack: TUserStackMember[]): TUserStackMemberShort[] =>
  stack.map((stackMember) => ({
    isPrimary: stackMember.isPrimary,
    member: { name: stackMember.member.name },
  }));

const mapEmployeeClientCourse = (clientCourse: IClientCoursePopulated): IEmployeeClientCourse => {
  const { status, progress, date } = clientCourse;
  const { title, avatar } = clientCourse.course;

  const course: TEmployeeCourse = { title, avatar };
  const emplooyeeClientCourse: IEmployeeClientCourse = { status, progress, date, course };

  return emplooyeeClientCourse;
};

export { mapEmployeeStack, mapEmployeeClientCourse };
