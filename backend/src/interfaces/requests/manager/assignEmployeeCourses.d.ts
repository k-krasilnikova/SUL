import { ICourseToAssign } from 'interfaces/ICourses/IQueryCourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';
import { IParamsId } from '../common/params';

type TAssignEmployeeCoursesRequestParams = IParamsId;
type TAssignEmployeeCoursesRequestBody = ICourseToAssign[];

type TAssignEmployeeCoursesResponsePayload = string;
type TAssignEmployeeCoursesResponseLocals = IAuthLocals & {
  results: TAssignEmployeeCoursesResponsePayload; // remove results in "V1-247 Remove adapters"
};

type TAssignEmployeeCoursesRequest = TBaseRequest<
  TAssignEmployeeCoursesRequestParams,
  TAssignEmployeeCoursesRequestBody
>;
type TAssignEmployeeCoursesResponse = TBaseResponse<
  TAssignEmployeeCoursesResponsePayload,
  TAssignEmployeeCoursesResponseLocals
>;

export { TAssignEmployeeCoursesRequest, TAssignEmployeeCoursesResponse };
