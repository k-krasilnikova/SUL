import { ITestResultResponse } from 'interfaces/IResponse/IResponse';
import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = ITestResultResponse;
type TResponseLocals = IAuthLocals & { results: TResponsePayload }; // remove after removing adapters

type TGetTestResultRequest = TBaseRequest<TRequestParams>;
type TGetTestResultResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetTestResultRequest, TGetTestResultResponse };