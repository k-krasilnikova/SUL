import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { IClientCourse } from 'types/clientCourse';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const CACHE_TIME = 120000;

const useSearchClientCourses = (): UseQueryResult<Array<IClientCourse>, AxiosError> => {
  return useQuery(
    QUERY_KEYS.myCourses,
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}`);
      const searchResponse = response.data;
      return searchResponse;
    },
    { cacheTime: CACHE_TIME },
  );
};

export default useSearchClientCourses;
