import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { API } from 'constants/routes';
import { ICourse } from 'types/course';

const useSearchAllCourses = (courseName: string): UseQueryResult<ICourse[], AxiosError> => {
  return useQuery(
    [QUERY_KEYS.coursesRequests, courseName],
    async () => {
      const apiClient = apiClientWrapper();
      const courseNameEncoded = encodeURIComponent(courseName);
      const response = await apiClient.get(`${API.courses}?title=${courseNameEncoded}`);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!courseName,
    },
  );
};

export default useSearchAllCourses;
