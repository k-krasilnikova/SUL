import { ITokens } from 'interfaces/auth/auth';

import { TBaseRequest, TBaseResponse } from '../base';

type TResponsePaylaod = ITokens;

type TRefreshRequest = TBaseRequest;
type TRefreshResponse = TBaseResponse<TResponsePaylaod>;

export { TRefreshRequest, TRefreshResponse };
