import { TNotification } from 'interfaces/response/response';

import { TBaseRequest, TBaseResponse } from '../base';

type TResponsePayload = never;
type TResponseLocals = TNotification; // refactor after removing adapters

type TAddNotificationRequest = TBaseRequest;
type TAddNotificationResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TAddNotificationRequest, TAddNotificationResponse };
