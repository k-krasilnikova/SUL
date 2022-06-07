import { TLocalsManager } from 'interfaces/response/response';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals, IMailLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IWithAssessmentPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = { clientCourseId: string } & IWithAssessmentPayload;

type TResponsePayload = string;
type TResponseLocals = IAuthLocals & IMailLocals;

type TDeclinePendingCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TDeclinePendingCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TDeclinePendingCourseRequest, TDeclinePendingCourseResponse };
