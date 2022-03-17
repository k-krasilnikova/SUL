import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import { COURSE_STATUSES } from 'constants/statuses';

const useStartClientCourse = (
  courseId?: string,
  courseStatus?: string,
): UseMutationResult<ClientCourse | undefined, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.courseStarted, successSnackbar);
  };
  return useMutation(
    async () => {
      let courseStarted: ClientCourse | undefined;
      if (courseStatus === COURSE_STATUSES.approved) {
        const apiClient = apiClientWrapper();
        const response = await apiClient.get(`${API.getMyCourses}/${courseId}/start`);
        handleSubmitSuccess();
        courseStarted = response.data;
      }
      return courseStarted;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default useStartClientCourse;
