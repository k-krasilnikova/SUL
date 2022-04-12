import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { Course } from 'types/course';
import { QUERY_KEYS } from '../../constants/queryKeyConstants';

const useSearchAllCourses = (courseName: string): UseQueryResult<Array<Course>, AxiosError> => {
  return useQuery(
    [QUERY_KEYS.coursesRequests, courseName],
    async () => {
      const apiClient = apiClientWrapper();
      const courseNameEncoded = encodeURIComponent(courseName);
      const response = await apiClient.get(`${API.getCourses}?title=${courseNameEncoded}`);
      const searchResponse = response.data;
      return searchResponse;
    },
    {
      enabled: !!courseName,
    },
  );
};

export default useSearchAllCourses;
