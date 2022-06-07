import { ICourse } from 'interfaces/entities/courses';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TRequestParams = IIdParams;

type TResponsePayload = Pick<ICourse, '_id' | 'materials'>; // actually should return only IMaterial[]

type TGetMaterialsRequest = TBaseRequest<TRequestParams>;
type TGetMaterialsResponse = TBaseResponse<TResponsePayload>;

export { TGetMaterialsRequest, TGetMaterialsResponse, TResponsePayload };
