import { TPendingCourses } from 'interfaces/Ientities/Iusers';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = TPendingCourses;
type TResponseLocals = IAuthLocals;

type TGetPendingCoursesRequest = TBaseRequest;
type TGetPendingCoursesResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetPendingCoursesRequest, TGetPendingCoursesResponse };
