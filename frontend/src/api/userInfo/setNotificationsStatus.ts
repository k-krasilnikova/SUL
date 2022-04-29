import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useReadNotifications = (): UseMutationResult => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(API.readNotifications);
      return response.data;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.profile),
    },
  );
};

export default useReadNotifications;
