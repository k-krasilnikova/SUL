import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';

const useStartCourseTest = (courseId?: string): UseMutationResult<string, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  // const { removeQueries } = useQueryClient();
  const navigateTo = useNavigate();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    // removeQueries(['ClientCourseInfo', courseId]);
    enqueueSnackbar(successSnackbarMessage.testStarted, successSnackbar);
    navigateTo(`${PATHS.learnCourse}/${courseId}/test`);
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
