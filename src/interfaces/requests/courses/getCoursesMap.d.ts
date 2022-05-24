import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';

import { TBaseRequest, TBaseResponse } from '../base';
import { IAuthLocals } from '../common/locals';

type TResponsePayload = ICoursesMapResponse;
type TResponseLocals = IAuthLocals;

type TGetCoursesMapRequest = TBaseRequest;
type TGetCoursesMapResponse = TBaseResponse<TResponsePayload, TResponseLocals>;

export { TGetCoursesMapRequest, TGetCoursesMapResponse };
