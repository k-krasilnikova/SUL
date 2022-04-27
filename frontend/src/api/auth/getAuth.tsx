import { useMutation, UseMutationResult } from 'react-query';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { COOKIE_VALUES } from 'constants/authConstants';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import { ITokenResponse } from 'types/auth';

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
      const refreshToken = JSON.stringify(tokenResponse.refreshToken);
      const userId = JSON.stringify(tokenResponse._id);
      Cookies.set(COOKIE_VALUES.uniqAccessToken, accessToken, { secure: true, expires: 2 });
      Cookies.set(COOKIE_VALUES.uniqUserId, userId, { secure: true, expires: 2 });
      Cookies.set(COOKIE_VALUES.uniqRefreshToken, refreshToken, { secure: true, expires: 2 });
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
