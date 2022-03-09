import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { Course, ICourses } from 'types/course';
import { errorSnackbar } from 'constants/snackbarVariant';

const useGetCourses = (): UseQueryResult<Array<Course>, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    'courses',
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getCourses}`);
      const сoursesResponse: ICourses = response?.data;
      return сoursesResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetCourses;
