import { ICourse } from 'interfaces/Ientities/Icourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IPreparedCourseDataLocals } from '../common/locals';
import { TCreateCoursePayload } from '../common/payloads';

type TRequestParams = never;
type TRequestBody = TCreateCoursePayload;

type TResponsePayload = ICourse;
type TResponseLocals = IPreparedCourseDataLocals & { results: TResponsePayload }; // remove results in "V1-247 Remove adapters"

type TAddCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TAddCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TAddCourseRequest, TAddCourseResponse };
