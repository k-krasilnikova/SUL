import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';

import { apiClientWrapper } from 'api/base';
import { API, PATHS } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';

const useApplyCourse = (): UseMutationResult => {
  const navigateTo = useNavigate();
  return useMutation(
    async (id: string | undefined | unknown) => {
      const data = { id };
      const apiClient = apiClientWrapper();
      try {
        const response = await apiClient.post(API.getCourses, data);
        return response.data;
      } catch (error) {
        throw new Error(`${REQUEST_ERRORS.getError}`);
      }
    },
    {
      onSuccess: () => {
        navigateTo(PATHS.myCourses);
      },
    },
  );
};

export default useApplyCourse;
