import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { getUserIdCookie } from 'utils/helpers/getUserIdCookie';
import { API } from 'constants/routes';
import { User } from 'types/user';
import { ResponseError } from 'types/serverError';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

type ProfileResponse = User & ResponseError;

const useGetProfile = (): UseQueryResult<ProfileResponse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.profile],
    async () => {
      const apiClient = apiClientWrapper();
      const userId = getUserIdCookie();
      const response = await apiClient.get(`${API.getProfile}/${userId}`);
      const profileResponse: ProfileResponse = response.data;
      return profileResponse;
    },
    {
      staleTime: 600000,
      onError: handleSubmitError,
    },
  );
};

export default useGetProfile;
