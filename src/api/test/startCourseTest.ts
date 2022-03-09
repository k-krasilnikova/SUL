import { useQuery, UseQueryResult } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';

const useStartCourseTest = (params: { courseId?: string; enabled: boolean }): UseQueryResult => {
  const { courseId, enabled = true } = params;
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    ['StartCourseTest', courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const url = `${API.getMyCourses}/${courseId}/test/start`;
      const startCourseResponse = await apiClient.get(url);
      return startCourseResponse;
    },
    {
      enabled,
      onError: handleSubmitError,
    },
  );
};

export default useStartCourseTest;
