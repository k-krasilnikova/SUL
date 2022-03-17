import { useMutation, UseMutationResult } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { IResponseData } from 'types/test';
import { errorSnackbar } from 'constants/snackbarVariant';

interface ITestResultParams {
  courseId: string | undefined;
}

const useSendTestResult = (
  { courseId }: ITestResultParams,
  onSubmit?: () => void,
): UseMutationResult<IResponseData> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  return useMutation(
    async (data) => {
      const apiClient = apiClientWrapper();
      const url = `${API.getMyCourses}/${courseId}/test/result`;
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
