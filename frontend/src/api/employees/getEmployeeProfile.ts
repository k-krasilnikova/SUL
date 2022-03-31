import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { User } from 'types/user';
import { ResponseError } from 'types/serverError';
import { errorSnackbar } from 'constants/snackbarVariant';

type ProfileResponse = User & ResponseError;

const useGetEmployeeProfile = (
  employeeId?: string,
): UseQueryResult<ProfileResponse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    'profile',
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getProfile}/${employeeId}`);
      const profileResponse: ProfileResponse = response.data;
      return profileResponse;
    },
    {
      staleTime: 600000,
      onError: handleSubmitError,
    },
  );
};

export default useGetEmployeeProfile;
