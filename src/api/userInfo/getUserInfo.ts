import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { getUserIdCookie } from 'utils/helpers/getUserIdCookie';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { INotification } from 'types/Notification';

interface UserResponse {
  role: string;
  position?: string;
  firstName?: string;
  lastName?: string;
  skills?: Array<string>;
  courses?: Array<string>;
  avatar?: string;
  birthday?: Date;
  skype?: string;
  notifications?: INotification[];
  error?: unknown;
}

const useGetUserInfo = (): UseQueryResult<UserResponse, AxiosError> => {
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
      return response.data;
    },
    {
      cacheTime: 600000,
      staleTime: 600000,
      onError: handleSubmitError,
    },
  );
};

export default useGetUserInfo;
