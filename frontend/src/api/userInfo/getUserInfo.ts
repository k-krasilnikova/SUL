import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { getUserIdCookie } from 'utils/helpers/getUserIdCookie';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { Notification as NotificationType } from 'types/notification';

interface UserResponse {
  role: string;
  position?: string;
  firstName?: string;
  lastName?: string;
  skills?: Array<string>;
  courses?: Array<string>;
  avatar?: string;
  birthday?: Date;
  skype?: string;
  notifications?: NotificationType[];
  error?: unknown;
}

const useGetUserInfo = (): UseQueryResult<UserResponse, AxiosError> =>
  useQuery(
    'profile',
    async () => {
      const apiClient = apiClientWrapper();
      const userId = getUserIdCookie();
      try {
        const response = await apiClient.get(`${API.getProfile}/${userId}`);
        return response.data;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      cacheTime: 600000,
      staleTime: 600000,
    },
  );

export default useGetUserInfo;
