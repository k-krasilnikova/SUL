import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { Course } from 'types/course';

const useGetCourses = (): UseQueryResult<Array<Course>, AxiosError> =>
  useQuery(
    'courses',
    async () => {
      let сoursesResponse: Array<Course>;
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.get(`${API.getCourses}`);
        сoursesResponse = response?.data;
        return сoursesResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      refetchOnWindowFocus: false,
    },
  );

export default useGetCourses;
