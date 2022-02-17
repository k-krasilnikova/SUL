import { useQuery, useQueryClient, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { ITestResponse } from 'types/test';

const useGetCourseTest = (_id?: string): UseQueryResult<Array<ITestResponse>, AxiosError> => {
  const queryClient = useQueryClient();
  return useQuery(
    ['CourseTest'],
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.get(`${API.getMyCourses}/${_id}/test`);
        const testResponse: Array<ITestResponse> = response.data;
        return testResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: () => queryClient.removeQueries(['ClientCourseInfo', _id]),
    },
  );
};

export default useGetCourseTest;
