import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { getUserIdCookie } from 'utils/helpers/getUserIdCookie';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { Course } from 'types/course';

const useGetMyCourses = (): UseQueryResult<Array<Course>, AxiosError> =>
  useQuery('myCourses', async () => {
    let myCoursesResponse: Array<Course>;
    const apiClient = apiClientWrapper();
    const userId = getUserIdCookie();
    try {
      const response = await apiClient.get(`${API.getMyCourses}/${userId}`);
      myCoursesResponse = response.data;
      return myCoursesResponse;
    } catch (error) {
      throw new Error(`${REQUEST_ERRORS.getError}`);
    }
  });

export default useGetMyCourses;
