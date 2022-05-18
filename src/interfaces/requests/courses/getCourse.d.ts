import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IParamsId } from '../common/params';

type TGetCourseRequestParams = IParamsId;

type TGetCourseResponsePayload = ICourseWithStatus;
type TGetCourseResponseLocals = IAuthLocals;

type TGetCourseRequest = TBaseRequest<TGetCourseRequestParams>;
type TGetCourseResponse = TBaseResponse<TGetCourseResponsePayload, TGetCourseResponseLocals>;

export { TGetCourseRequest, TGetCourseResponse };
