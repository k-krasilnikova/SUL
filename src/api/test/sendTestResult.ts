import { useMutation, UseMutationResult } from 'react-query';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';

interface ITestResultParams {
  courseId: string | undefined;
}

const useSendTestResult = ({ courseId }: ITestResultParams): UseMutationResult => {
  return useMutation(async (data) => {
    const apiClient = apiClientWrapper();
    const url = `${API.getMyCourses}/${courseId}/test/result`;
    const response = await apiClient.put(url, data);
    return response.data;
  });
};

export default useSendTestResult;
