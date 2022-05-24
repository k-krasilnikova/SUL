import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IIdPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = IIdPayload;

type TResponsePayload = IClientCourse;
type TResponseLocals = IAuthLocals;

type TApplyCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TApplyCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TApplyCourseRequest, TApplyCourseResponse };
