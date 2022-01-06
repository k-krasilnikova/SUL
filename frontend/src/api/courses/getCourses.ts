import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';

interface CoursesResponse {
  position?: string;
  firstName?: string;
  lastName?: string;
  skills?: Array<string>;
  courses?: Array<string>;
  avatar?: string;
  birthday?: Date;
  skype?: string;
  error?: unknown;
}

const useGetCourses = (): UseQueryResult<CoursesResponse, AxiosError> =>
  useQuery('courses', async () => {
    let coursesResponse: Array<any>;
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
