import { ITokens } from 'interfaces/Iauth/authInterfaces';

import { TBaseRequest, TBaseResponse } from '../base';

type TRefreshResponsePaylaod = ITokens;

type TRefreshRequest = TBaseRequest;
type TRefreshResponse = TBaseResponse<TRefreshResponsePaylaod>;

export { TRefreshRequest, TRefreshResponse };
