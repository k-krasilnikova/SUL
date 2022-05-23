import { TAchievements, TestRuslt } from 'interfaces/Ientities/Itest';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { IPassTestPayload, IPassTestResultPayload } from '../common/payloads';

type TRequestParams = IIdParams;
type TRequestBody = IPassTestPayload;

type TResponsePayload = IPassTestResultPayload;
type TResponseLocals = IAuthLocals & { result: TestRuslt; achievements: TAchievements };

type TPassTestRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TPassTestResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TPassTestRequest, TPassTestResponse };
