import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';
import { TUserStackMember, TUserStackMemberShort } from 'interfaces/entities/stackMember';
import { IEmployeeClientCourse, TEmployeeCourse } from 'interfaces/response/response';

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
