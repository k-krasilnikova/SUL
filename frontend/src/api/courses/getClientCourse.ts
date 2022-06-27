import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { IClientCourse } from 'types/clientCourse';

const useGetClientCourse = (courseId?: string): UseQueryResult<IClientCourse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.courseAndMaterials, courseId],
    async () => {
      const apiClient = apiClientWrapper();

      const courseResponse = await apiClient.get(`${API.getMyCourses}/${courseId}`);
      const courseData: IClientCourse = courseResponse.data;
      return courseData;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetClientCourse;
