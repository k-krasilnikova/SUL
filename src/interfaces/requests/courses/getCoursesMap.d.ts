import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TGetCoursesMapResponsePayload = ICoursesMapResponse;
type TGetCoursesMapResponseLocals = IAuthLocals & { results: TGetCoursesMapResponsePayload }; // remove results in "V1-247 Remove adapters"

type TGetCoursesMapRequest = TBaseRequest;
type TGetCoursesMapResponse = TBaseResponse<
  TGetCoursesMapResponsePayload,
  TGetCoursesMapResponseLocals
>;

export { TGetCoursesMapRequest, TGetCoursesMapResponse };
