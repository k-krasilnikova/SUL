import { IPreparedCourseData } from 'interfaces/ICourses/IQueryCourses';

interface IAuthLocals {
  id: string;
}

interface IPreparedCourseDataLocals {
  preparedCourseData: IPreparedCourseData;
}

export { IAuthLocals, IPreparedCourseDataLocals, INotificationLocals };
