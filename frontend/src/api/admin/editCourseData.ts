import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';

const useEditCourseData = (courseId?: string): UseMutationResult => {
  const navigateTo = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.courseDataUpdated, successSnackbar);
    navigateTo(PATHS.coursesList, { replace: true });
  };

  return useMutation(
    async (data) => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(`${API.courses}/${courseId}/edit`, data);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useEditCourseData;
