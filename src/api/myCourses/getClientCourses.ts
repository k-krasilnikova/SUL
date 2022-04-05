import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { errorSnackbar } from 'constants/snackbarVariant';
import { queryKeyConstants } from 'constants/queryKeyConstants';

const useGetMyCourses = (): UseQueryResult<Array<ClientCourse>, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [queryKeyConstants.myCourses],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}`);
      return response.data;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default useGetMyCourses;
