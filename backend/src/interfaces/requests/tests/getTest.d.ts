import { Request, Response } from 'express';

import { ITest } from 'interfaces/Ientities/Itest';

type TGetTestRequestParams = {
  id: string;
};

type TGetTestRequest = Request<TGetTestRequestParams>;

type TGetTestResponse = Response<ITest>;

export { TGetTestRequest, TGetTestResponse };
