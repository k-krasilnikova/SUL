import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { TBaseRequest, TBaseResponse } from '../base';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;
type TRequestBody = never;
type TRequestQuery = { stage: string };

type TResponsePayload = IClientCourse;

type TPassCourseRequest = TBaseRequest<TRequestParams, TRequestBody, TRequestQuery>;
type TPassCourseResponse = TBaseResponse<TResponsePayload>;

export { TPassCourseRequest, TPassCourseResponse };
