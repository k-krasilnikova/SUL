import { ObjectId } from 'mongoose';

import { ITest } from 'interfaces/Ientities/Itest';

interface IUpdateTestDto {
  testId: string | ObjectId;
  questions: ITest['questions'];
  timeout: ITest['timeout'];
  title: ITest['title'];
}

export { IUpdateTestDto };
