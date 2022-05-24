import { ICourseToAssign } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;
type TRequestBody = ICourseToAssign[];

type TResponsePayload = string;
type TResponseLocals = IAuthLocals;

type TAssignEmployeeCoursesRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TAssignEmployeeCoursesResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TAssignEmployeeCoursesRequest, TAssignEmployeeCoursesResponse };
