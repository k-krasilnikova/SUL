import { IEmployeeShortInfo } from 'interfaces/IResponse/IResponse';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = IEmployeeShortInfo[];
type TResponseLocals = IAuthLocals;

type TGetEmployeesRequest = TBaseRequest;
type TGetEmployeesResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetEmployeesRequest, TGetEmployeesResponse };
