import { IClientCourse } from 'interfaces/entities/clientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;
type TRequestBody = { courseId: string };

type TResponsePayload = IClientCourse;
type TResponseLocals = IAuthLocals;

type TApplyCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TApplyCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TApplyCourseRequest, TApplyCourseResponse };
