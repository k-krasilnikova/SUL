import { InfiniteData, useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { IClientCourse } from 'types/clientCourse';
import { ICoursesFilterValues } from 'types/course';
import { QUERY_KEYS } from 'constants/queryKeyConstants';

const PAGE_CHANGE = 1;
const EMPTY_LENGTH = 0;

interface HookResult {
  fetchNextPage: () => void;
  isLoading: boolean;
  data: InfiniteData<{ page: number; clientCourses: IClientCourse[] }> | undefined;
  hasNextPage?: boolean;
}

const useGetClientPaginatedCourses = (
  filters: ICoursesFilterValues,
): UseInfiniteQueryResult<{
  page: number;
  clientCourses: IClientCourse[];
}> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getClientCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getMyCourses}`, {
      params: {
        pageN: pageParam,
        ...filters,
      },
    });
    return { page: pageParam, clientCourses: response.data };
  };

  return useInfiniteQuery([QUERY_KEYS.paginatedClientCoursesList, filters], getClientCourses, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) =>
      lastPage.clientCourses.length > EMPTY_LENGTH ? lastPage.page + PAGE_CHANGE : undefined,
    onError: handleSubmitError,
  });
};

export default useGetClientPaginatedCourses;
