import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ICourseEditorResponse } from 'pages/CourseEditor/types';

const useGetCourseEditorData = (
  courseId?: string,
  onSuccessLoadCourseData?: (data: ICourseEditorResponse) => void,
): UseQueryResult<ICourseEditorResponse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.courseEditorData],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.courses}/${courseId}/edit/payload`);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
      onSuccess: onSuccessLoadCourseData,
    },
  );
};

export default useGetCourseEditorData;
