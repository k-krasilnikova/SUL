import axios, { AxiosInstance } from 'axios';
import { QueryClient } from 'react-query';

import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';
import { PATHS } from 'constants/routes';
import deleteAllCookies from 'utils/helpers/deleteAllCookies';

export const queryClient = new QueryClient();

export const apiClientWrapper = (): AxiosInstance => {
  const parseToken: string | undefined = getAuthResponseData();
  const apiClient = parseToken
    ? axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        headers: {
          authorization: `Bearer ${parseToken}`,
        },
      })
    : axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
      });

  apiClient.interceptors.response.use(undefined, (err) => {
    const error = err.response;
    if (error.status === 403 || error.status === 401) {
      deleteAllCookies();
      window.location.replace(PATHS.signIn);
    }
  });

  return apiClient;
};
