import { InfiniteData, useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ICourse } from 'types/course';

const PAGE_CHANGE = 1;
const FIRST_PAGE = 1;
const EMPTY_LENGTH = 0;

const useGetPaginatedCourses = (
  filters,
): UseInfiniteQueryResult<{ page: number; courses: ICourse[] }> => {
  console.log(filters);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.courses}`, {
      params: {
        pageN: pageParam,
        filters,
      },
    });
    return { page: pageParam, courses: response.data };
  };
  return useInfiniteQuery([QUERY_KEYS.paginatedCoursesList], getCourses, {
    getPreviousPageParam: (firstPage) =>
      firstPage.page === FIRST_PAGE ? false : firstPage.page - PAGE_CHANGE,
    getNextPageParam: (lastPage) =>
      lastPage.courses.length > EMPTY_LENGTH ? lastPage.page + PAGE_CHANGE : false,
    refetchOnWindowFocus: false,
    onError: handleSubmitError,
  });
};

export default useGetPaginatedCourses;
