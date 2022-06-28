import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ICourseMaterialsResponse } from 'types/course';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useGetCourseMaterials = (
  courseId: string | undefined,
): UseQueryResult<ICourseMaterialsResponse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.courseInfo, courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.courses}/${courseId}/materials`);
      const courseMaterialsResponse: Array<ICourseMaterialsResponse> = response.data;
      return courseMaterialsResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
      enabled: !!courseId,
    },
  );
};

export default useGetCourseMaterials;
