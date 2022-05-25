import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = IClientCoursePopulated;

type TGetClientCourseRequest = TBaseRequest<TRequestParams>;
type TGetClientCourseResponse = TBaseResponse<TResponsePayload>;

export { TGetClientCourseRequest, TGetClientCourseResponse };
