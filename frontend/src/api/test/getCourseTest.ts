import { useQuery, useQueryClient, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { ITestResponse } from 'types/test';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';

const useGetCourseTest = (params: {
  courseId?: string | undefined;
  enabled?: boolean;
}): UseQueryResult<Array<ITestResponse>, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const { courseId, enabled = true } = params;
  const queryClient = useQueryClient();
  return useQuery(
    ['CourseTest'],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}/test`);
      const testResponse: Array<ITestResponse> = response.data;
      return testResponse;
    },
    {
      enabled,
      refetchOnWindowFocus: false,
      onSuccess: () => queryClient.removeQueries(['ClientCourseInfo', courseId]),
      onError: handleSubmitError,
    },
  );
};

export default useGetCourseTest;
