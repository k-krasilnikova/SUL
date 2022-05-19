import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;

type TResponsePayload = IClientCoursePopulated;

type TGetClientCourseRequest = TBaseRequest<TRequestParams>;
type TGetClientCourseResponse = TBaseResponse<TResponsePayload>;

export { TGetClientCourseRequest, TGetClientCourseResponse };
