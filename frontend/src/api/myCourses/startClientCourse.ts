import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { errorSnackbar } from 'constants/snackbarVariant';

const useStartClientCourse = (params: {
  courseId?: string | undefined;
  enabled?: boolean;
}): UseQueryResult<ClientCourse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const { courseId, enabled = true } = params;
  return useQuery(
    ['StartClientCourse', courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}/start`);
      const courseResponse: Array<ClientCourse> = response.data;
      return courseResponse;
    },
    {
      enabled,
      onError: handleSubmitError,
    },
  );
};

export default useStartClientCourse;
