import axios from 'axios';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
