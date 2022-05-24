import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IIdPayload, IWithAssessmentPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = IIdPayload & IWithAssessmentPayload;

type TResponsePayload = { updateStatus: string };
type TResponseLocals = IAuthLocals;

type TApprovePendingCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TApprovePendingCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;
