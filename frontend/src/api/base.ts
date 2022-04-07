import axios, { AxiosInstance } from 'axios';
import { QueryClient } from 'react-query';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Cookies from 'js-cookie';

import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';
import { COOKIE_VALUES } from 'constants/authConstants';
import { PATHS } from 'constants/routes';
import deleteAllCookies from 'utils/helpers/deleteAllCookies';

export const queryClient = new QueryClient();

export const apiClientWrapper = (): AxiosInstance => {
  const parsedAccessToken: string | undefined = getAuthResponseData();

  const apiClient = parsedAccessToken
    ? axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        headers: {
          Authorization: `Bearer ${parsedAccessToken}`,
        },
      })
    : axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
      });

  const refreshAuthLogic = (failedRequest: any) => {
    return apiClient
      .get('/api/account/refresh', { withCredentials: true })
      .then((tokenRefreshResponse) => {
        const tokens = tokenRefreshResponse.data;
        const accessToken = JSON.stringify(tokens.accessToken);
        const refreshToken = JSON.stringify(tokens.refreshToken);
        // eslint-disable-next-line no-param-reassign
        failedRequest.response.config.headers.Authorization = `Bearer ${accessToken}`;
        Cookies.set(COOKIE_VALUES.uniqAccessToken, accessToken, { secure: true });
        Cookies.set(COOKIE_VALUES.uniqRefreshToken, refreshToken, { secure: true });
        return Promise.resolve();
      })
      .catch(() => {
        deleteAllCookies();
        window.location.replace(PATHS.signIn);
      });
  };

  createAuthRefreshInterceptor(apiClient, refreshAuthLogic, {
    statusCodes: [401, 403],
    pauseInstanceWhileRefreshing: true,
  });

  return apiClient;
};
