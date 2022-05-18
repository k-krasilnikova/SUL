import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;
type TRequestBody = IParamsId;

type TResponsePayload = IClientCourse;
type TResponseLocals = IAuthLocals & {
  courseId?: string; // refactor after removing adapters
  clientCourseId?: string; // refactor after removing adapters
  userId?: string; // refactor after removing adapters
} & { results: { course: TResponsePayload } }; // remove results in "V1-247 Remove adapters"

type TApplyCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TApplyCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TApplyCourseRequest, TApplyCourseResponse };
