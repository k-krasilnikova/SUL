import { TLocalsManager } from 'interfaces/IResponse/IResponse';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';
import { IIdPayload, IWithAssessmentPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = IIdPayload & IWithAssessmentPayload;

type TResponsePayload = { updateStatus: string };
type TResponseLocals = TLocalsManager; // remove after removing adapters

type TApprovePendingCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TApprovePendingCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;
