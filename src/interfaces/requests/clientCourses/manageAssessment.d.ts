import { TAchievements } from 'interfaces/entities/test';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IAssessmentActionPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = IAssessmentActionPayload;

type TResponsePayload = string;
type TResponseLocals = IAuthLocals & {
  achievments: TAchievements;
  message: string;
};

type TManageAssessmentRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TManageAssessmentResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TManageAssessmentRequest, TManageAssessmentResponse };
