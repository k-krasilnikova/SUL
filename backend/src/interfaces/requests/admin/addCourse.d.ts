import { ICourse } from 'interfaces/entities/courses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IPreparedCourseDataLocals } from '../common/locals';
import { TCreateCoursePayload } from '../common/payloads';

type TRequestParams = never;
type TRequestBody = TCreateCoursePayload;

type TResponsePayload = ICourse;
type TResponseLocals = IPreparedCourseDataLocals;

type TAddCourseRequest = TBaseRequest<TRequestParams, TRequestBody>;
type TAddCourseResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TAddCourseRequest, TAddCourseResponse };
