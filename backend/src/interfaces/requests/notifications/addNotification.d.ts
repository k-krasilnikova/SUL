import { TNotification } from 'interfaces/response/response';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IAddNotificationPayload } from '../common/payloads';

type TRequestBody = IAddNotificationPayload;

type TResponsePayload = never;
type TResponseLocals = IAuthLocals;

type TAddNotificationRequest = TBaseRequest<TResponseLocals, TRequestBody>;
type TAddNotificationResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TAddNotificationRequest, TAddNotificationResponse };
