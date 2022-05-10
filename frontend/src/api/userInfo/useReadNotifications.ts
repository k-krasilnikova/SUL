import { useMutation, UseMutationResult } from 'react-query';

import { apiClientWrapper, queryClient } from 'api/base';
import { API } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useReadNotifications = (): UseMutationResult => {
  const handleSubmitSuccess = () => {
    queryClient.invalidateQueries(QUERY_KEYS.profile);
  };
  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.put(API.readNotifications);
      return response.data;
    },
    {
      onSuccess: handleSubmitSuccess,
    },
  );
};

export default useReadNotifications;
