import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { getUserIdCookie } from 'utils/helpers/getUserIdCookie';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';

interface CourseObject {
  title: string;
  description: string;
  technology: Array<string>;
  requiredSkills: Array<string>;
  duration: string;
  testLink: string;
  lessons: number;
}

const useGetMyCourses = () =>
  useQuery('myCourses', async () => {
    let myCoursesResponse: Array<CourseObject>;
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
