import { IEmployeeInfo } from 'interfaces/response/response';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponseLocals = IAuthLocals;
type TResponsePayload = IEmployeeInfo;

type TGetEmployeeInfoRequest = TBaseRequest<TRequestParams>;
type TGetEmployeeInfoResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetEmployeeInfoRequest, TGetEmployeeInfoResponse };
