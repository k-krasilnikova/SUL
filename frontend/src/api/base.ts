import axios, { AxiosInstance } from 'axios';
import { QueryClient } from 'react-query';

import { getAuthResponseData, TokenTypes } from 'utils/helpers/getAuthResponseData';
// import { PATHS } from 'constants/routes';
// import deleteAllCookies from 'utils/helpers/deleteAllCookies';

export const queryClient = new QueryClient();

export const apiClientWrapper = (): AxiosInstance => {
  const parsedAccessToken: string | undefined = getAuthResponseData(TokenTypes.accessToken);
  // const parsedRefreshToken: string | undefined = getAuthResponseData(TokenTypes.refreshToken);

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

  apiClient.interceptors.response.use(undefined, (err) => {
    const error = err.response;
    if (error.status === 403 || error.status === 401) {
      apiClient
        .get('/api/account/refresh', { withCredentials: true })
        .then((res) => {
          console.log('refreshSuccessful', res);

          return apiClient;
        })
        .catch((e) => {
          console.log('errorRefresh', e.message);
          // deleteAllCookies();
          // window.location.replace(PATHS.signIn);
        });
    }
  });

  return apiClient;
};
