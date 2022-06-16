import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper, queryClient } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { IApproveCourseDto } from 'types/api.dto';

const useApproveRequest = (): UseMutationResult<unknown, unknown, IApproveCourseDto> => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmitSuccess = () => {
    queryClient.invalidateQueries([QUERY_KEYS.coursesRequests]);
    queryClient.invalidateQueries([QUERY_KEYS.profile]);
  };

  return useMutation(
    async ({ requestId, withAssessment }) => {
      const data = { clientCourseId: requestId, assessment: withAssessment };
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(API.approveRequest, data);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useApproveRequest;
