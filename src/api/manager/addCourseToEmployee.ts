import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper, queryClient } from 'api/base';
import { API } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { errorSnackbar, successSnackbar, successSnackbarMessage } from 'constants/snackbarVariant';

const useAddCourseToEmployee = ({
  courseIdsList,
  employeeId,
  onSuccess,
}: {
  courseIdsList: { courseId: string }[];
  onSuccess: () => void;
  employeeId?: string;
}): UseMutationResult => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  const handleSubmitSuccess = () => {
    enqueueSnackbar(successSnackbarMessage.courseAdded, successSnackbar);
    queryClient.refetchQueries([QUERY_KEYS.employeeProfile, employeeId]);
    onSuccess();
  };

  return useMutation(
    async () => {
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
