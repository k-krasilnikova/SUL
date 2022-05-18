import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IGetCoursesRequestQuery } from '../common/queries';

type TGetAllCoursesRequestParams = never;
type TGetAllCoursesRequestBody = never;
type TGetAllCoursesRequestQuery = IGetCoursesRequestQuery;

type TGetAllCoursesResponsePayload = ICourseWithStatus[];
type TGetAllCoursesResponseLocals = IAuthLocals;

type TGetAllCoursesRequest = TBaseRequest<
  TGetAllCoursesRequestParams,
  TGetAllCoursesRequestBody,
  TGetAllCoursesRequestQuery
>;
type TGetAllCoursesResponse = TBaseResponse<
  TGetAllCoursesResponsePayload,
  TGetAllCoursesResponseLocals
>;

export { TGetAllCoursesRequest, TGetAllCoursesResponse };
