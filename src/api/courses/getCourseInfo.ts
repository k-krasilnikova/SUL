import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { Course } from 'types/course';
import { errorSnackbar } from 'constants/snackbarVariant';
import { queryKeyConstants } from 'constants/queryKeyConstants';

const useGetCourseInfo = (courseId: string | undefined): UseQueryResult<Course, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [queryKeyConstants.courseInfo, courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getCourses}/${courseId}`);
      const courseResponse: Array<Course> = response.data;
      return courseResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetCourseInfo;
