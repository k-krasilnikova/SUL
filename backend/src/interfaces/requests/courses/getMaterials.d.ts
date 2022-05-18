import { ICourse } from 'interfaces/Ientities/Icourses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IParamsId } from '../common/params';

type TGetMaterialsRequestParams = IParamsId;

type TGetMaterialsResponsePayload = Pick<ICourse, '_id' | 'materials'>; // actually should return only IMaterial[]

type TGetMaterialsRequest = TBaseRequest<TGetMaterialsRequestParams>;
type TGetMaterialsResponse = TBaseResponse<TGetMaterialsResponsePayload>;

export { TGetMaterialsRequest, TGetMaterialsResponse };
