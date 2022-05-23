import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IGetCoursesRequestQuery } from '../common/queries';

type TRequestParams = never;
type TRequestBody = never;
type TRequestQuery = IGetCoursesRequestQuery;

type TResponseLocals = IAuthLocals;
type TResponsePayload = IClientCoursePopulated[];

type TGetClientCoursesRequest = TBaseRequest<TRequestParams, TRequestBody, TRequestQuery>;
type TGetClientCoursesResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetClientCoursesRequest, TGetClientCoursesResponse };
