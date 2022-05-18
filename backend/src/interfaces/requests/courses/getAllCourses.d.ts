import { Request, Response } from 'express';

import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

import { IAuthLocals } from '../common/locals';
import { IGetCoursesRequestQuery } from '../common/queries';

type TGetAllCoursesRequestParams = never;
type TGetAllCoursesRequestResBody = never;
type TGetAllCoursesRequestBody = never;
type TGetAllCoursesRequestQuery = IGetCoursesRequestQuery;

type TGetAllCoursesResponsePayload = ICourseWithStatus[];

type TGetAllCoursesRequest = Request<
  TGetAllCoursesRequestParams,
  TGetAllCoursesRequestResBody,
  TGetAllCoursesRequestBody,
  TGetAllCoursesRequestQuery
>;

type TGetAllCoursesResponse = Response<TGetAllCoursesResponsePayload, IAuthLocals>;

export { TGetAllCoursesRequest, TGetAllCoursesResponse };
