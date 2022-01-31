import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { ClientCourse } from 'types/clientCourse';

const useGetClientCourseInfo = (_id?: string): UseQueryResult<ClientCourse, AxiosError> =>
  useQuery(
    ['ClientCourseInfo', _id],
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.get(`${API.getMyCourses}/${_id}`);
        const courseResponse: Array<ClientCourse> = response.data;
        return courseResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      refetchOnWindowFocus: false,
    },
  );

export default useGetClientCourseInfo;
