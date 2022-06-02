import { ICourseWithStatus } from 'interfaces/courses/queryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = ICourseWithStatus;
type TResponseLocals = IAuthLocals;

type TGetCourseRequest = TBaseRequest<TRequestParams>;
type TGetCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetCourseRequest, TGetCourseResponse };
