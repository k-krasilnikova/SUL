import { ITokens } from 'interfaces/auth/authInterfaces';

import { TBaseRequest, TBaseResponse } from '../base';

type TResponsePaylaod = ITokens;

type TRefreshRequest = TBaseRequest;
type TRefreshResponse = TBaseResponse<TResponsePaylaod>;

export { TRefreshRequest, TRefreshResponse };
