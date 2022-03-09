import { useMutation, UseMutationResult } from 'react-query';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { COOKIE_VALUES, ITokenResponse } from 'constants/authConstants';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';

const useGetAuth = (): UseMutationResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.authorized, successSnackbar);
  };
  const navigateTo = useNavigate();
  return useMutation(
    async (initialData: string | unknown) => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.post(API.getToken, initialData);
      const tokenResponse: ITokenResponse = response.data;
      const accessToken = JSON.stringify(tokenResponse.accessToken);
      const userId = JSON.stringify(tokenResponse._id);
      Cookies.set(COOKIE_VALUES.uniqAccessToken, accessToken, { secure: true });
      Cookies.set(COOKIE_VALUES.uniqUserId, userId, { secure: true });
      handleSubmitSuccess();
      return tokenResponse;
    },
    {
      onSuccess: () => {
        navigateTo(PATHS.profile);
      },
      onError: handleSubmitError,
    },
  );
};

export default useGetAuth;
