import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { PATHS } from 'constants/routes';

import { logOutHandler } from 'utils/helpers/logOutHandler';

const useLogOut = (): UseMutationResult => {
  const navigateTo = useNavigate();
  return useMutation(
    async (initialData: string | unknown) => {
      const apiClient = apiClientWrapper();
      try {
        const logOutResponse = await apiClient.post(API.getToken, initialData);
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
