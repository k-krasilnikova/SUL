import { IEmployeeInfo } from 'interfaces/IResponse/IResponse';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;

type TResponseLocals = IAuthLocals;
type TResponsePayload = IEmployeeInfo;

type TGetEmployeeInfoRequest = TBaseRequest<TRequestParams>;
type TGetEmployeeInfoResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetEmployeeInfoRequest, TGetEmployeeInfoResponse };
