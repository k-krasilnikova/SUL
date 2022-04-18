import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper, queryClient } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { CourseStatus } from 'enums/courseEnums';

const useStartClientCourse = (
  courseId?: string,
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
      const apiClient = apiClientWrapper();
      const responseCourse = await apiClient.get(`${API.getMyCourses}/${courseId}`);
      const courseResponse: ClientCourse = responseCourse.data;
      if (courseResponse?.status === CourseStatus.approved) {
        const response = await apiClient.get(`${API.getMyCourses}/${courseId}/start`);
        handleSubmitSuccess();
        courseStarted = response.data;
      }
      return courseStarted;
    },
    {
      onError: handleSubmitError,
      onSuccess: () => queryClient.refetchQueries([QUERY_KEYS.courseAndMaterials, courseId]),
    },
  );
};

export default useStartClientCourse;
