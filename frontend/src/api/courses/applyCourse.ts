import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';

const useApplyCourse = (): UseMutationResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.applied, successSnackbar);
  };
  const navigateTo = useNavigate();
  return useMutation(
    async (id: string | undefined | unknown) => {
      const data = { id };
      const apiClient = apiClientWrapper();
      const response = await apiClient.post(API.courses, data);
      return response.data;
    },
    {
      onSuccess: () => {
        navigateTo(PATHS.myCourses);
        handleSubmitSuccess();
      },
      onError: handleSubmitError,
    },
  );
};

export default useApplyCourse;
