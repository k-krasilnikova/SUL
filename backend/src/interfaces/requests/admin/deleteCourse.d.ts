import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = string;

type TDeleteCourseRequest = TBaseRequest<TRequestParams>;
type TDeleteCourseResponse = TBaseResponse<TResponsePayload>;

export { TDeleteCourseRequest, TDeleteCourseResponse };
