import { useMutation, UseMutationResult } from 'react-query';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { COOKIE_VALUES, REQUEST_ERRORS } from 'constants/authConstants';

const useGetAuth = (): UseMutationResult => {
  const navigateTo = useNavigate();
  return useMutation(
    async (initialData: string | unknown) => {
      let tokenResponse: {
        accessToken?: string;
        _id?: string;
        error?: unknown;
      };
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.post(API.getToken, initialData);
        tokenResponse = response.data;
        const accessToken = JSON.stringify(tokenResponse.accessToken);
        const userId = JSON.stringify(tokenResponse._id);
        Cookies.set(COOKIE_VALUES.uniqAccessToken, accessToken, { secure: true });
        Cookies.set(COOKIE_VALUES.uniqUserId, userId, { secure: true });
        return tokenResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.postError}`);
      }
    },
    {
      onSuccess: () => {
        navigateTo(PATHS.profile);
      },
    },
  );
};

export default useGetAuth;
