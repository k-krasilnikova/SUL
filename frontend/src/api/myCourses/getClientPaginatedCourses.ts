import { InfiniteData, useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { ClientCourse } from 'types/clientCourse';
import { queryKeyConstants } from 'constants/queryKeyConstants';

const PAGE_CHANGE = 1;
const FIRST_PAGE = 1;
const EMPTY_LENGTH = 0;

interface HookResult {
  fetchNextPage: () => void;
  isLoading: boolean;
  data: InfiniteData<{ page: number; clientCourses: ClientCourse[] }> | undefined;
  hasNextPage?: boolean;
}

const useGetClientPaginatedCourses = (): HookResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getClientCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getMyCourses}`, {
      params: {
        pageN: pageParam,
      },
    });
    return { page: pageParam, clientCourses: response.data };
  };
  const { fetchNextPage, hasNextPage, data, isLoading } = useInfiniteQuery(
    [queryKeyConstants.paginatedClientCoursesList],
    getClientCourses,
    {
      getPreviousPageParam: (firstPage) =>
        firstPage.page === FIRST_PAGE ? false : firstPage.page - PAGE_CHANGE,
      getNextPageParam: (lastPage) =>
        lastPage.clientCourses.length > EMPTY_LENGTH ? lastPage.page + PAGE_CHANGE : false,
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
  return { hasNextPage, fetchNextPage, isLoading, data };
};

export default useGetClientPaginatedCourses;
