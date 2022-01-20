import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { logOutHandler } from 'utils/helpers/logOutHandler';

const useLogOut = (): UseMutationResult => {
  const navigateTo = useNavigate();
  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const logOutResponse = await apiClient.post(API.getToken, {
          login: 'user',
          password: 'user',
        });
        return logOutResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.logOutError}`);
      }
    },
    {
      onSuccess: () => {
        logOutHandler();
        navigateTo(PATHS.signIn);
      },
    },
  );
};

export default useLogOut;
