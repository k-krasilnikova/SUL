import { TAssessmentRequest } from 'interfaces/response/response';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = TAssessmentRequest[];
type TResponseLocals = IAuthLocals & { results: TResponsePayload }; // remove results in "V1-247 Remove adapters"

type TGetPendingAssessmentsRequest = TBaseRequest;
type TGetPendingAssessmentsResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetPendingAssessmentsRequest, TGetPendingAssessmentsResponse };
