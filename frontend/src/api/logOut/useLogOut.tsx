import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { logOutHandler } from 'utils/helpers/logOutHandler';

const useLogOut = (): UseMutationResult => {
  const { enqueueSnackbar } = useSnackbar();
  const navigateTo = useNavigate();

  const handleSubmitSuccess = () => {
    logOutHandler();
    queryClient.clear();
    navigateTo(PATHS.signIn);
  };
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      const logOutResponse = await apiClient.get(API.logOut);
      return logOutResponse;
    },
    {
      onSuccess: handleSubmitSuccess,
      onError: handleSubmitError,
    },
  );
};

export default useLogOut;
