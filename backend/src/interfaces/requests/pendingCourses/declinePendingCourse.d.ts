import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IWithAssessmentPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = { id: string } & IWithAssessmentPayload;

type TResponsePayload = string;
type TResponseLocals = IAuthLocals;

type TDeclinePendingCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TDeclinePendingCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TDeclinePendingCourseRequest, TDeclinePendingCourseResponse };
