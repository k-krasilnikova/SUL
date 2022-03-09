import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { ClientCourse } from 'types/clientCourse';

const useStartClientCourse = (params: {
  courseId?: string | undefined;
  enabled?: boolean;
}): UseQueryResult<ClientCourse, AxiosError> => {
  const { courseId, enabled = true } = params;
  return useQuery(
    ['StartClientCourse', courseId],
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.get(`${API.getMyCourses}/${courseId}/start`);
        const courseResponse: Array<ClientCourse> = response.data;
        return courseResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      enabled,
    },
  );
};

export default useStartClientCourse;
