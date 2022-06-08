import { InfiniteData, useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ICourse, ICoursesFilterValues } from 'types/course';

const PAGE_CHANGE = 1;
const EMPTY_LENGTH = 0;

const useGetPaginatedCourses = (
  filters: ICoursesFilterValues,
): UseInfiniteQueryResult<{ page: number; courses: ICourse[] }> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.courses}`, {
      params: {
        pageN: pageParam,
        ...filters,
      },
    });
    return { page: pageParam, courses: response.data };
  };
  return useInfiniteQuery([QUERY_KEYS.paginatedCoursesList, filters], getCourses, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) =>
      lastPage.courses.length > EMPTY_LENGTH ? lastPage.page + PAGE_CHANGE : undefined,
    onError: handleSubmitError,
  });
};

export default useGetPaginatedCourses;
