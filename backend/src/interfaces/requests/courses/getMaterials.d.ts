import { ICourse } from 'interfaces/Ientities/Icourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IParamsId } from '../common/params';

type TRequestParams = IParamsId;

type TResponsePayload = Pick<ICourse, '_id' | 'materials'>; // actually should return only IMaterial[]

type TGetMaterialsRequest = TBaseRequest<TRequestParams>;
type TGetMaterialsResponse = TBaseResponse<TResponsePayload>;

export { TGetMaterialsRequest, TGetMaterialsResponse };
