import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IGetCoursesRequestQuery } from '../common/queries';

type TRequestParams = never;
type TRequestBody = never;
type TRequestQuery = IGetCoursesRequestQuery;

type TResponsePayload = ICourseWithStatus[];
type TResponseLocals = IAuthLocals;

type TGetAllCoursesRequest = TBaseRequest<TRequestParams, TRequestBody, TRequestQuery>;
type TGetAllCoursesResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetAllCoursesRequest, TGetAllCoursesResponse };
