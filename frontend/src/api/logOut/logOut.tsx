import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { logOutHandler } from 'utils/helpers/logOutHandler';
import { removeMenuStatus } from 'utils/helpers/menuHelpers/removeMenuStatus';

const useLogOut = (): UseMutationResult => {
  const navigateTo = useNavigate();
  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();
      try {
        const logOutResponse = await apiClient.get(API.logOut);
        return logOutResponse;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      onSuccess: () => {
        logOutHandler();
        removeMenuStatus();
        navigateTo(PATHS.signIn);
      },
    },
  );
};

export default useLogOut;
