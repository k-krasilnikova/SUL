import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { logOutHandler } from 'utils/helpers/logOutHandler';
import { removeMenuStatus } from 'utils/helpers/menuHelpers/removeMenuStatus';

const useLogOut = (): UseMutationResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const navigateTo = useNavigate();
  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      const logOutResponse = await apiClient.get(API.logOut);
      return logOutResponse;
    },
    {
      onSuccess: () => {
        logOutHandler();
        removeMenuStatus();
        queryClient.clear();
        navigateTo(PATHS.signIn);
      },
      onError: handleSubmitError,
    },
  );
};

export default useLogOut;
