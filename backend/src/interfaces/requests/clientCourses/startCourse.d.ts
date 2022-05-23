import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = {
  start: boolean; // refactor in "V1-248 Common response style"
};

type TStartCourseRequest = TBaseRequest<TRequestParams>;
type TStartCourseResponse = TBaseResponse<TResponsePayload>;

export { TStartCourseRequest, TStartCourseResponse };
