import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { Course } from 'types/course';

const useGetCourses = (): UseQueryResult<Course, AxiosError> =>
  useQuery('courses', async () => {
    let coursesResponse: Array<Course>;
    const apiClient = apiClientWrapper();
    try {
      const response = await apiClient.get(`${API.getCourses}`);
      coursesResponse = response.data;
      return coursesResponse;
    } catch (error) {
      throw new Error(`${REQUEST_ERRORS.getError}`);
    }
  });

export default useGetCourses;
