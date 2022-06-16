import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { IClientCourse } from 'types/clientCourse';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useGetClientCourseInfo = (
  courseId?: string,
  byCommonCourse?: boolean,
): UseQueryResult<IClientCourse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.clientCourseInfo, courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}`, {
        params: { byCommonCourse },
      });
      const courseResponse: Array<IClientCourse> = response.data;
      return courseResponse;
    },
    {
      enabled: !!courseId,
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetClientCourseInfo;
