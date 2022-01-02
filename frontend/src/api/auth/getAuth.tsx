import { useMutation } from 'react-query';
import Cookies from 'js-cookie';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { COOKIE_VALUES } from 'constants/authConstants';

const useGetAuth = () =>
  useMutation(async (initialData: string | unknown) => {
    let tokenResponse: {
      accessToken?: string;
      _id?: string;
      error?: unknown;
    };
    const apiClient = apiClientWrapper(COOKIE_VALUES?.uniqAccessToken);

    try {
      const response = await apiClient.post(API.getToken, initialData);
      tokenResponse = await response.data;
      const resAccess = JSON.stringify(tokenResponse.accessToken);
      const resUserId = JSON.stringify(tokenResponse._id);
      Cookies.set(COOKIE_VALUES.uniqAccessToken, resAccess, { secure: true });
      Cookies.set(COOKIE_VALUES.uniqUserId, resUserId, { secure: true });
    } catch (error) {
      tokenResponse = { error: error };
    }
    return tokenResponse;
  });

export default useGetAuth;
