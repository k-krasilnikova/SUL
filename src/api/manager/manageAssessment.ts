import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { errorSnackbar, successSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { API } from 'constants/routes';
import { apiClientWrapper } from 'api/base';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { IManageAssessmentDto } from 'types/api.dto';

const useManageAssessment = (): UseMutationResult<unknown, unknown, IManageAssessmentDto> => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSuccess = (data: string) => {
    queryClient.invalidateQueries([QUERY_KEYS.pendingAssessments]);
    enqueueSnackbar(data, successSnackbar);
  };
  return useMutation(
    async ({ action, id }) => {
      const payload = { action };
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(transformRoute(API.manageAssessment, id), payload);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSuccess,
    },
  );
};

export default useManageAssessment;
