import { TAssessmentRequest } from 'interfaces/IResponse/IResponse';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = TAssessmentRequest[];
type TResponseLocals = IAuthLocals;

type TGetPendingAssessmentsRequest = TBaseRequest;
type TGetPendingAssessmentsResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetPendingAssessmentsRequest, TGetPendingAssessmentsResponse };
