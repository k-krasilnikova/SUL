import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = IClientCoursePopulated;

type TGetClientCourseRequest = TBaseRequest<TRequestParams>;
type TGetClientCourseResponse = TBaseResponse<TResponsePayload>;

export { TGetClientCourseRequest, TGetClientCourseResponse };
