import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ICourseMaterialsResponse } from 'types/course';
import { errorSnackbar } from 'constants/snackbarVariant';

const useGetCourseMaterials = (
  courseId: string | undefined,
): UseQueryResult<ICourseMaterialsResponse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    ['CourseInfo', courseId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getCourses}/${courseId}/materials`);
      const courseMaterialsResponse: Array<ICourseMaterialsResponse> = response.data;
      return courseMaterialsResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetCourseMaterials;
