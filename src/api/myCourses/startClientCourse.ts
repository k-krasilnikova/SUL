import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { IClientCourse } from 'types/clientCourse';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';
import { CourseStatus } from 'enums/course';

const useStartClientCourse = (
  courseId?: string,
): UseMutationResult<IClientCourse | undefined, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.courseStarted, successSnackbar);
  };

  return useMutation(
    async () => {
      let courseStarted: IClientCourse | undefined;
      const apiClient = apiClientWrapper();
      const responseCourse = await apiClient.get(`${API.getMyCourses}/${courseId}`);
      const courseResponse: IClientCourse = responseCourse.data;
      if (courseResponse?.status === CourseStatus.approved) {
        const response = await apiClient.get(`${API.getMyCourses}/${courseId}/start`);
        courseStarted = response.data;
      }
      return courseStarted;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useStartClientCourse;
