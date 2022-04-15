import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';

const useAddCourseToEmployee = ({
  courseIdsList,
  onSuccess,
}: {
  courseIdsList: { courseId: string }[];
  onSuccess: () => void;
}): UseMutationResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.courseAdded, successSnackbar);
    onSuccess();
  };

  return useMutation(
    async (employeeId: string | unknown) => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.post(`${API.employees}/${employeeId}`, courseIdsList);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useAddCourseToEmployee;
