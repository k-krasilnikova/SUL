import { IPreparedCourseDataPayload } from './payloads';

interface IAuthLocals {
  id: string;
}

interface IPreparedCourseDataLocals {
  preparedCourseData: IPreparedCourseDataPayload;
}

interface IMailLocals {
  clientCourseId: string;
}

export { IAuthLocals, IPreparedCourseDataLocals, IMailLocals };
