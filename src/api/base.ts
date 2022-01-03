import axios, { AxiosInstance } from 'axios';
import { QueryClient } from 'react-query';

import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';

export const queryClient = new QueryClient();

export const apiClientWrapper = (cookieName: string): AxiosInstance => {
  const parseToken: string | undefined = getAuthResponseData(cookieName);
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
  return apiClient;
};
