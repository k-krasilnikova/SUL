import { AssessmentAction } from 'enums/common';
import { TAchievements } from 'interfaces/Ientities/Itest';
import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;
type TRequestBody = { action: AssessmentAction };

type TResponsePayload = string;
type TResponseLocals = IAuthLocals & {
  achievments: TAchievements;
  results: TResponsePayload; // remove results in "V1-247 Remove adapters"
};

type TManageAssessmentRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TManageAssessmentResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TManageAssessmentRequest, TManageAssessmentResponse };
