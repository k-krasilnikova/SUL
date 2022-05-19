import { IPreparedCourseDataPayload } from './payloads';

interface IAuthLocals {
  id: string;
}

interface IPreparedCourseDataLocals {
  preparedCourseData: IPreparedCourseDataPayload;
}

export { IAuthLocals, IPreparedCourseDataLocals, INotificationLocals };
