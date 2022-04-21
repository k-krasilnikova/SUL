import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ICoursesMapResponse } from 'types/course';

const useGetCoursesMap = (): UseQueryResult<ICoursesMapResponse, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };

  return useQuery(
    [QUERY_KEYS.coursesMap],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(API.coursesMap);
      const courseResponse: ICoursesMapResponse = response.data;
      return courseResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetCoursesMap;
