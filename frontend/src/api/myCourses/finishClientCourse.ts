import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { errorSnackbar } from 'constants/snackbarVariant';

const useFinishClientCourse = (
  courseId: string | undefined,
): UseMutationResult<ClientCourse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}/finish`);
      return response.data;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default useFinishClientCourse;
