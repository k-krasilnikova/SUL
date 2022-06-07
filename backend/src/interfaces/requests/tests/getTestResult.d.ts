import { ITestResultResponse } from 'interfaces/response/response';
import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = ITestResultResponse;
type TResponseLocals = IAuthLocals;

type TGetTestResultRequest = TBaseRequest<TRequestParams>;
type TGetTestResultResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetTestResultRequest, TGetTestResultResponse };
