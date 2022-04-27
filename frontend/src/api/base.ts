/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance } from 'axios';
import { QueryClient } from 'react-query';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Cookies from 'js-cookie';

import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';
import { COOKIE_VALUES } from 'constants/authConstants';
import { API, PATHS } from 'constants/routes';
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

  const refreshAuthLogic = (failedRequest: AxiosError): Promise<any> => {
    return apiClient
      .get(API.refresh, { withCredentials: true })
      .then((tokenRefreshResponse) => {
        const tokens = tokenRefreshResponse.data;
        const accessToken = JSON.stringify(tokens.accessToken);
        const refreshToken = JSON.stringify(tokens.refreshToken);
        Cookies.set(COOKIE_VALUES.uniqAccessToken, accessToken, { secure: true, expires: 2 });
        Cookies.set(COOKIE_VALUES.uniqRefreshToken, refreshToken, { secure: true, expires: 2 });
        if (failedRequest?.response?.config.headers) {
          // eslint-disable-next-line no-param-reassign
          failedRequest.response.config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return Promise.resolve();
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          deleteAllCookies();
          window.location.replace(PATHS.signIn);
        }
      });
  };

  createAuthRefreshInterceptor(apiClient, refreshAuthLogic, {
    statusCodes: [401, 403],
    pauseInstanceWhileRefreshing: true,
  });

  return apiClient;
};
