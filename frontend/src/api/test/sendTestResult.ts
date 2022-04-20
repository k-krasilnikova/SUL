import { useMutation, UseMutationResult } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ITestResult } from 'types/test';

interface ITestResultParams {
  courseId: string | undefined;
}

const useSendTestResult = ({ courseId }: ITestResultParams): UseMutationResult<ITestResult> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmit = () => {
    queryClient.invalidateQueries(QUERY_KEYS.profile);
    queryClient.refetchQueries([QUERY_KEYS.clientCourseInfo, courseId]);
  };
  return useMutation(
    async (data) => {
      const apiClient = apiClientWrapper();
      const url = `${API.getMyCourses}/${courseId}/test/pass`;
      const response = await apiClient.put(url, data);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmit,
    },
  );
};

export default useSendTestResult;
