import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper, queryClient } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import { queryKeyConstants } from 'constants/queryKeyConstants';

const useFinishClientCourse = (
  courseId: string | undefined,
): UseMutationResult<ClientCourse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.finished, successSnackbar);
  };
  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getMyCourses}/${courseId}/finish`);
      handleSubmitSuccess();
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeyConstants.profile]);
        queryClient.invalidateQueries([queryKeyConstants.clientCourseInfo, courseId]);
      },
    },
  );
};

export default useFinishClientCourse;
