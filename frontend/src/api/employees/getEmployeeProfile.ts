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
    'employee',
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getEmployees}/${employeeId}`);
      const profileResponse: ProfileResponse = response.data;
      return profileResponse;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default useGetEmployeeProfile;
