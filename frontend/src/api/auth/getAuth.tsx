import { useMutation, UseMutationResult } from 'react-query';
import Cookies from 'js-cookie';
import { useNavigate, useLocation } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { COOKIE_VALUES } from 'constants/authConstants';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import { ITokenResponse } from 'types/auth';

import { TLocation } from './types';

const useGetAuth = (): UseMutationResult => {
  const navigateTo = useNavigate();
  const { state } = useLocation() as TLocation;
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.authorized, successSnackbar);
    navigateTo(state.from || PATHS.profile, { replace: true });
  };

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

      return tokenResponse;
    },
    {
      onSuccess: handleSubmitSuccess,
      onError: handleSubmitError,
    },
  );
};

export default useGetAuth;
