import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { ITest } from 'types/test';

const useGetCourseTest = (_id?: string): UseQueryResult<Array<ITest>, AxiosError> =>
  useQuery(
    ['CourseTest', _id],
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.get(`${API.getMyCourses}/${_id}/test`);
        const testResponse: Array<ITest> = response.data;
        return testResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      refetchOnWindowFocus: false,
    },
  );

export default useGetCourseTest;
