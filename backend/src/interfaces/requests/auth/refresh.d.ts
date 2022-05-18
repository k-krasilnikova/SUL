import { ITokens } from 'interfaces/Iauth/authInterfaces';

import { TBaseRequest, TBaseResponse } from '../base';

type TResponsePaylaod = ITokens;

type TRefreshRequest = TBaseRequest;
type TRefreshResponse = TBaseResponse<TResponsePaylaod>;

export { TRefreshRequest, TRefreshResponse };
