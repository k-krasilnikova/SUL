import { useMutation, UseMutationResult } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { API } from 'constants/routes';
import { IResponseData } from 'types/test';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

interface ITestResultParams {
  courseId: string | undefined;
}

const useSendTestResult = ({ courseId }: ITestResultParams): UseMutationResult<IResponseData> => {
  const { enqueueSnackbar } = useSnackbar();

  const updateQueries = () => {
    queryClient.invalidateQueries(QUERY_KEYS.profile);
    queryClient.refetchQueries([QUERY_KEYS.clientCourseInfo, courseId]);
  };

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
    updateQueries();
  };

  const handleSubmit = () => {
    updateQueries();
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
