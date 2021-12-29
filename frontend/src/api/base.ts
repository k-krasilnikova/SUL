import axios from 'axios';
import { QueryClient } from 'react-query';

import accessToken from 'constants/accessToken';

export const queryClient = new QueryClient();

export const apiClient = accessToken
  ? axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  : axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
    });
