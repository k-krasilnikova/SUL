import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IAddNotificationPayload } from '../common/payloads';

type TResponsePayload = never;
type TResponseLocals = IAuthLocals;

type TRequestBody = IAddNotificationPayload;

type TAddNotificationRequest = TBaseRequest<TResponseLocals, TRequestBody>;
type TAddNotificationResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TAddNotificationRequest, TAddNotificationResponse };
