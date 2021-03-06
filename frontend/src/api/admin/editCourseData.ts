import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { useGetCoursesPaths } from 'hooks';
import { API } from 'constants/routes';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import transformRoute from 'utils/helpers/paths/transformRoute';

const useEditCourseData = (courseId?: string): UseMutationResult => {
  const { coursesPath } = useGetCoursesPaths();
  const navigateTo = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.courseDataUpdated, successSnackbar);
    navigateTo(coursesPath, { replace: true });
  };

  return useMutation(
    async (data) => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(transformRoute(API.editCourse, courseId), data);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useEditCourseData;
