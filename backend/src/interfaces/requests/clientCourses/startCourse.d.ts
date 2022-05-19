import { TBaseRequest, TBaseResponse } from '../base';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;

type TResponsePayload = {
  start: boolean; // refactor in "V1-248 Common response style"
};

type TStartCourseRequest = TBaseRequest<TRequestParams>;
type TStartCourseResponse = TBaseResponse<TResponsePayload>;

export { TStartCourseRequest, TStartCourseResponse };
