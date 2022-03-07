import { useMutation, UseMutationResult } from 'react-query';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { IPassingTestResponse } from 'types/test';

const usePassClientCourse = (
  courseId: string | undefined,
): UseMutationResult<IPassingTestResponse> => {
  return useMutation(async (stage) => {
    const apiClient = apiClientWrapper();
    const url = `${API.getMyCourses}/${courseId}?stage=${stage}`;
    const response = await apiClient.put(url, stage);
    return response.data;
  });
};

export default usePassClientCourse;
