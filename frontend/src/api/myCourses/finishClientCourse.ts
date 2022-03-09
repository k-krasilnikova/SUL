import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';

const useFinishClientCourse = (
  courseId: string | undefined,
): UseMutationResult<ClientCourse, AxiosError> => {
  return useMutation(async () => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getMyCourses}/${courseId}/finish`);
    return response.data;
  });
};

export default useFinishClientCourse;
