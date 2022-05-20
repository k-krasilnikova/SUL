import { TBaseRequest } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = string;

type TGetEditCoursePayloadRequest = TBaseRequest<TRequestParams>;
type TGetEditCoursePayloadResponse = TBaseResponse<TResponsePayload>;

export { TGetEditCoursePayloadRequest, TGetEditCoursePayloadResponse };
