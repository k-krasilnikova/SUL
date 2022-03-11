import { useMutation, UseMutationResult } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { IPassingTestResponse } from 'types/test';
import { errorSnackbar } from 'constants/snackbarVariant';

const usePassClientCourse = (
  courseId: string | undefined,
): UseMutationResult<IPassingTestResponse> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useMutation(
    async (stage) => {
      const apiClient = apiClientWrapper();
      const url = `${API.getMyCourses}/${courseId}?stage=${stage}`;
      const response = await apiClient.put(url, stage);
      return response.data;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default usePassClientCourse;
