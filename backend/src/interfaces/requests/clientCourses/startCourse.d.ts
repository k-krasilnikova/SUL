import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = string;

type TStartCourseRequest = TBaseRequest<TRequestParams>;
type TStartCourseResponse = TBaseResponse<TResponsePayload>;

export { TStartCourseRequest, TStartCourseResponse };
