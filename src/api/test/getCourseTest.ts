import { useQuery, useQueryClient, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { ITestResponse } from 'types/test';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';

const useGetCourseTest = (params: {
  courseId?: string | undefined;
  enabled?: boolean;
}): UseQueryResult<Array<ITestResponse>, AxiosError> => {
  const { courseId, enabled = true } = params;
  const queryClient = useQueryClient();
  return useQuery(
    ['CourseTest'],
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.get(`${API.getMyCourses}/${courseId}/test`);
        const testResponse: Array<ITestResponse> = response.data;
        return testResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      enabled,
      refetchOnWindowFocus: false,
      onSuccess: () => queryClient.removeQueries(['ClientCourseInfo', courseId]),
    },
  );
};

export default useGetCourseTest;
