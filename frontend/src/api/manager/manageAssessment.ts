import { useMutation, UseMutationResult } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { errorSnackbar, successSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { API } from 'constants/routes';
import { apiClientWrapper, queryClient } from 'api/base';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { IManageAssessmentDto } from 'types/api.dto';

const useManageAssessment = (): UseMutationResult<unknown, unknown, IManageAssessmentDto> => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const handleSubmitSuccess = (data: string) => {
    queryClient.invalidateQueries([QUERY_KEYS.pendingAssessments]);
    queryClient.invalidateQueries([QUERY_KEYS.profile]);
    enqueueSnackbar(data, successSnackbar);
  };

  return useMutation(
    async ({ id, action }) => {
      const payload = { action };
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(transformRoute(API.manageAssessment, id), payload);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useManageAssessment;
