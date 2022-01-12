import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { getUserIdCookie } from 'utils/helpers/getUserIdCookie';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { User } from 'types/user';
import { ResponseError } from 'types/serverError';

type ProfileResponse = User & ResponseError;

const useGetProfile = (): UseQueryResult<ProfileResponse, AxiosError> =>
  useQuery('profile', async () => {
    let profileResponse: ProfileResponse;
    const apiClient = apiClientWrapper();
    const userId = getUserIdCookie();
    try {
      const response = await apiClient.get(`${API.getProfile}/${userId}`);
      profileResponse = response.data;
      return profileResponse;
    } catch (error) {
      throw new Error(`${REQUEST_ERRORS.getError}`);
    }
  });

export default useGetProfile;
