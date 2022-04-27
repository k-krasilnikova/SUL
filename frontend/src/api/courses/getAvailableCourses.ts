import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { IShortCourseInfo } from 'types/course';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const useGetAvailableCourses = (
  employeeId?: string,
  title?: string,
): UseQueryResult<IShortCourseInfo[], AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  return useQuery(
    [QUERY_KEYS.availableCourses, title],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.employees}/${employeeId}/courses/available`, {
        params: { title },
      });
      const availableCoursesResponse: IShortCourseInfo[] = response.data;
      return availableCoursesResponse;
    },
    {
      enabled: Boolean(title),
      onError: handleSubmitError,
    },
  );
};

export default useGetAvailableCourses;
