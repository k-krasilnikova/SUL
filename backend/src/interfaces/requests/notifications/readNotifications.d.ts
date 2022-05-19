import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = string;
type TResponseLocals = IAuthLocals;

type TReadNotificationsRequest = TBaseRequest;
type TReadNotificationsResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TReadNotificationsRequest, TReadNotificationsResponse };
