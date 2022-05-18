import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;

type TResponsePayload = ICourseWithStatus;
type TResponseLocals = IAuthLocals;

type TGetCourseRequest = TBaseRequest<TRequestParams>;
type TGetCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetCourseRequest, TGetCourseResponse };
