import { TAvailableCourse } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IParamsId } from '../common/params';

type TGetEmployeeAvailableCoursesRequestParams = IParamsId;
type TGetEmployeeAvailableCoursesRequestBody = never;
type TGetEmployeeAvailableCoursesRequestQuery = { title: string };

type TGetEmployeeAvailableCoursesResponsePayload = TAvailableCourse[];
type TGetEmployeeAvailableCoursesResponseLocals = IAuthLocals & {
  results: TGetEmployeeAvailableCoursesResponsePayload; // remove results in "V1-247 Remove adapters"
};

type TGetEmployeeAvailableCoursesRequest = TBaseRequest<
  TGetEmployeeAvailableCoursesRequestParams,
  TGetEmployeeAvailableCoursesRequestBody,
  TGetEmployeeAvailableCoursesRequestQuery
>;
type TGetEmployeeAvailableCoursesResponse = TBaseResponse<
  TGetEmployeeAvailableCoursesResponsePayload,
  TGetEmployeeAvailableCoursesResponseLocals
>;

export { TGetEmployeeAvailableCoursesRequest, TGetEmployeeAvailableCoursesResponse };
