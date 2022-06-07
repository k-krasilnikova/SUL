import { InfiniteData, useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { IClientCourse } from 'types/clientCourse';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const PAGE_CHANGE = 1;
const FIRST_PAGE = 1;
const EMPTY_LENGTH = 0;

const useGetClientPaginatedCourses = (
  filters,
): UseInfiniteQueryResult<{
  page: number;
  courses: IClientCourse[];
}> => {
  console.log(filters);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getClientCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getMyCourses}`, {
      params: {
        ...filters,
        pageN: pageParam,
      },
    });
    return { page: pageParam, clientCourses: response.data };
  };
  return useInfiniteQuery([QUERY_KEYS.paginatedClientCoursesList, filters], getClientCourses, {
    getPreviousPageParam: (firstPage) =>
      firstPage.page === FIRST_PAGE ? false : firstPage.page - PAGE_CHANGE,
    getNextPageParam: (lastPage) =>
      lastPage.clientCourses.length > EMPTY_LENGTH ? lastPage.page + PAGE_CHANGE : false,
    refetchOnWindowFocus: false,
    onError: handleSubmitError,
  });
};

export default useGetClientPaginatedCourses;
