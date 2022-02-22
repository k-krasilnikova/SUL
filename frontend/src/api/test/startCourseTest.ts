import { useQuery, UseQueryResult } from 'react-query';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';

const useStartCourseTest = (params: { courseId?: string; enabled: boolean }): UseQueryResult => {
  const { courseId, enabled = true } = params;

  return useQuery(
    ['StartCourseTest', courseId],
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const url = `${API.getMyCourses}/${courseId}/test/start`;
        const startCourseResponse = await apiClient.get(url);
        return startCourseResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      enabled,
    },
  );
};

export default useStartCourseTest;
