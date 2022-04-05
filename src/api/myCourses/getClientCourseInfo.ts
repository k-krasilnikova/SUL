import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { errorSnackbar } from 'constants/snackbarVariant';
import { queryKeyConstants } from 'constants/queryKeyConstants';

const useGetClientCourseInfo = (courseId?: string): UseQueryResult<ClientCourse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [queryKeyConstants.clientCourseInfo, courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}`);
      const courseResponse: Array<ClientCourse> = response.data;
      return courseResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetClientCourseInfo;
