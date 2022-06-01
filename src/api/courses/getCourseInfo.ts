import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ICourse } from 'types/course';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useGetCourseInfo = (courseId: string): UseQueryResult<ICourse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.courseInfo, courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.courses}/${courseId}`);
      const courseResponse: ICourse[] = response.data;
      return courseResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetCourseInfo;
