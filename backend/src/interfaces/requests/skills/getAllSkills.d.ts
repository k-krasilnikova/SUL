import { ISkillGroup } from 'interfaces/entities/skillGroup';

import { TBaseRequest, TBaseResponse } from '../base';
import { ISearchQuery } from '../common/queries';

type TRequestParams = never;
type TRequestBody = never;
type TRequestQuery = ISearchQuery;

type TResponsePayload = ISkillGroup[];

type TGetAllSkillsRequest = TBaseRequest<TRequestParams, TRequestBody, TRequestQuery>;
type TGetAllSkillsResponse = TBaseResponse<TResponsePayload>;

export { TGetAllSkillsRequest, TGetAllSkillsResponse };
