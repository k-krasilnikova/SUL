import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IEditCoursePayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = IEditCoursePayload;

type TResponsePayload = IEditCoursePayload;
type TResponseLocals = IAuthLocals;

type TEditCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TEditCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TEditCourseRequest, TEditCourseResponse };
