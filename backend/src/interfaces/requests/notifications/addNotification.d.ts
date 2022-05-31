import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = never;

type TRequestBody = { courseId: string; clientCourseId: string; assessment: boolean };

type TAddNotificationRequest = TBaseRequest<IAuthLocals, TRequestBody>;
type TAddNotificationResponse = TBaseResponse<TResponsePayload>;

export { TAddNotificationRequest, TAddNotificationResponse };
