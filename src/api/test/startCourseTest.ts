import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import transformRoute from 'utils/helpers/paths/transformRoute';

const useStartCourseTest = (courseId?: string): UseMutationResult<string, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const navigateTo = useNavigate();

  const handleSubmitError = (error: AxiosError) => {
    queryClient.refetchQueries([QUERY_KEYS.clientCourseInfo, courseId]);
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.testStarted, successSnackbar);
    navigateTo(transformRoute(PATHS.learnCourseTest, courseId));
  };

  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}/test/start`);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useStartCourseTest;
