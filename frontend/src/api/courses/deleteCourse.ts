import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { useGetCoursesPaths } from 'hooks';
import { API } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';

const useDeleteCourse = (): UseMutationResult => {
  const { coursesPath } = useGetCoursesPaths();
  const { enqueueSnackbar } = useSnackbar();
  const navigateTo = useNavigate();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    queryClient.refetchQueries([QUERY_KEYS.paginatedCoursesList]);
    enqueueSnackbar(successSnackbarMessage.courseDeleted, successSnackbar);
    navigateTo(coursesPath);
  };

  return useMutation(
    async (courseId?: string | unknown) => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.delete(`${API.courses}/${courseId}`);
      return response.data;
    },
    {
      onSuccess: handleSubmitSuccess,
      onError: handleSubmitError,
    },
  );
};

export default useDeleteCourse;
