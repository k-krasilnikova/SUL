import { TAchievements, TestRuslt } from 'interfaces/entities/test';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IPassTestPayload, IPassTestResultPayload } from '../common/payloads';

type TRequestParams = { id: string };
type TRequestBody = IPassTestPayload;

type TResponsePayload = IPassTestResultPayload;
type TResponseLocals = IAuthLocals & { result: TestRuslt; achievements: TAchievements };

type TPassTestRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TPassTestResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TPassTestRequest, TPassTestResponse };
