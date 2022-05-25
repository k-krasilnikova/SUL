import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = ICoursesMapResponse;
type TResponseLocals = IAuthLocals & { results: TResponsePayload }; // remove results in "V1-247 Remove adapters"

type TGetCoursesMapRequest = TBaseRequest;
type TGetCoursesMapResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetCoursesMapRequest, TGetCoursesMapResponse };
