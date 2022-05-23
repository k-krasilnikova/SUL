import { TAvailableCourse } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IIdParams } from '../common/params';
import { ITitleQuery } from '../common/queries';

type TRequestParams = IIdParams;
type TRequestBody = never;
type TRequestQuery = ITitleQuery;

type TResponsePayload = TAvailableCourse[];
type TResponseLocals = IAuthLocals & {
  results: TResponsePayload; // remove results in "V1-247 Remove adapters"
};

type TGetEmployeeAvailableCoursesRequest = TBaseRequest<
  TRequestParams,
  TRequestBody,
  TRequestQuery
>;
type TGetEmployeeAvailableCoursesResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetEmployeeAvailableCoursesRequest, TGetEmployeeAvailableCoursesResponse };
