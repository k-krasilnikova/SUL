import { useMutation, UseMutationResult } from 'react-query';
import Cookies from 'js-cookie';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { COOKIE_VALUES, REQUEST_ERRORS } from 'constants/authConstants';

const useGetAuth = (): UseMutationResult =>
  useMutation(async (initialData: string | unknown) => {
    let tokenResponse: {
      accessToken?: string;
      _id?: string;
      error?: unknown;
    };
    const apiClient = apiClientWrapper(COOKIE_VALUES?.uniqAccessToken);

    try {
      const response = await apiClient.post(API.getToken, initialData);
      tokenResponse = response.data;
      const resAccess = JSON.stringify(tokenResponse.accessToken);
      const resUserId = JSON.stringify(tokenResponse._id);
      Cookies.set(COOKIE_VALUES.uniqAccessToken, resAccess, { secure: true });
      Cookies.set(COOKIE_VALUES.uniqUserId, resUserId, { secure: true });
      return tokenResponse;
    } catch (error) {
      throw new Error(`${REQUEST_ERRORS.postError}`);
    }
  });

export default useGetAuth;
