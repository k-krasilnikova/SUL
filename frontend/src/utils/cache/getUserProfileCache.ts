import { queryClient } from 'api/base';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { IUser } from 'types/user';

const getUserProfileCache = (): IUser => queryClient.getQueryData(QUERY_KEYS.profile) as IUser;

export default getUserProfileCache;
