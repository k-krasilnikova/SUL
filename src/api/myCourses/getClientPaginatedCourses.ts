import { InfiniteData, useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { ClientCourse } from 'types/clientCourse';

interface HookResult {
  fetchNextPage: () => void;
  isLoading: boolean;
  data: InfiniteData<{ page: number; clientCourses: ClientCourse[] }> | undefined;
  status: string;
  hasNextPage?: boolean;
}

const useGetClientPaginatedCourses = (): HookResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getMyCourses}`, {
      params: {
        pageN: pageParam,
      },
    });
    return { page: pageParam, clientCourses: response.data };
  };
  const { fetchNextPage, hasNextPage, data, isLoading, status } = useInfiniteQuery(
    'paginatedCoursesList',
    getCourses,
    {
      getPreviousPageParam: (firstPage) => (firstPage.page === 1 ? false : firstPage.page - 1),
      getNextPageParam: (lastPage) =>
        lastPage.clientCourses.length > 0 ? lastPage.page + 1 : false,
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
  return { hasNextPage, fetchNextPage, isLoading, data, status };
};

export default useGetClientPaginatedCourses;
