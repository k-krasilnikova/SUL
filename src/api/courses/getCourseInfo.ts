import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { Course } from 'types/course';

const useGetCourseInfo = (_id: string | undefined): UseQueryResult<Course, AxiosError> =>
  useQuery(
    ['CourseInfo', _id],
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.get(`${API.getCourses}/${_id}`);
        const courseResponse: Array<Course> = response.data;
        return courseResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      refetchOnWindowFocus: false,
    },
  );

export default useGetCourseInfo;
