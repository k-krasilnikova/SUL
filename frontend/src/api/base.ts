import axios from 'axios';
import { QueryClient } from 'react-query';

import accessToken from 'constants/accessToken';
import { REACT_APP_BACKEND_URL } from './authConstants';

export const queryClient = new QueryClient();

export const apiClient = accessToken
  ? axios.create({
      // baseURL: process.env.REACT_APP_BACKEND_URL, Wrong Path - 3000
      baseURL: REACT_APP_BACKEND_URL,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
  : axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
    });
