import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IIdPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = IIdPayload;

type TResponsePayload = IClientCourse;
type TResponseLocals = IAuthLocals & {
  courseId?: string; // refactor after removing adapters
  clientCourseId?: string; // refactor after removing adapters
  userId?: string; // refactor after removing adapters
} & { results: { course: TResponsePayload } }; // remove results in "V1-247 Remove adapters"

type TApplyCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TApplyCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TApplyCourseRequest, TApplyCourseResponse };
