import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useSearchClientCourses = (): UseQueryResult<Array<ClientCourse>, AxiosError> => {
  return useQuery(QUERY_KEYS.myCourses, async () => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getMyCourses}`);
    const searchResponse = response.data;
    return searchResponse;
  });
};

export default useSearchClientCourses;
