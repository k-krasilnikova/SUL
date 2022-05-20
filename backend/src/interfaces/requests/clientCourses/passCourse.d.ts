import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';
import { IStageQuery } from '../common/queries';

type TRequestParams = IIdParams;
type TRequestBody = never;
type TRequestQuery = IStageQuery;

type TResponsePayload = IClientCourse;

type TPassCourseRequest = TBaseRequest<TRequestParams, TRequestBody, TRequestQuery>;
type TPassCourseResponse = TBaseResponse<TResponsePayload>;

export { TPassCourseRequest, TPassCourseResponse };
