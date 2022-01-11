import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { CourseResponse } from 'types/course';

const useGetCourses = (): UseQueryResult<CourseResponse, AxiosError> =>
  useQuery(
    'Courses',
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const response: CourseResponse = await apiClient.get(`${API.getCourses}`);
        return response;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      refetchOnWindowFocus: false,
    },
  );

export default useGetCourses;
