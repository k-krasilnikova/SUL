import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useDeclineRequest = (): UseMutationResult => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useMutation(
    async (id: string | undefined | unknown) => {
      const data = { id };
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(API.declineRequest, data);
      return response.data;
    },
    {
      onError: handleSubmitError,
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.coursesRequests]);
      },
    },
  );
};

export default useDeclineRequest;