import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { ITestResponse } from 'types/test';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';

interface IParams {
  courseId?: string;
  enabled?: boolean;
}

const useGetCourseTest = ({
  courseId,
  enabled = true,
}: IParams): UseQueryResult<ITestResponse[], AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  return useQuery(
    ['CourseTest'],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}/test`);
      const testResponse: ITestResponse[] = response.data;
      return testResponse;
    },
    {
      enabled,
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetCourseTest;
