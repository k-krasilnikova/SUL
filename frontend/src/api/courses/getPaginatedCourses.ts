import { InfiniteData, useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { Course } from 'types/course';

interface HookResult {
  fetchNextPage: () => void;
  isLoading: boolean;
  data: InfiniteData<{ page: number; courses: Course[] }> | undefined;
  hasNextPage?: boolean;
}

const useGetPaginatedCourses = (): HookResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getCourses}`, {
      params: {
        pageN: pageParam,
      },
    });
    return { page: pageParam, courses: response.data };
  };
  const { fetchNextPage, hasNextPage, data, isLoading } = useInfiniteQuery(
    'paginatedCoursesList',
    getCourses,
    {
      getPreviousPageParam: (firstPage) => (firstPage.page === 1 ? false : firstPage.page - 1),
      getNextPageParam: (lastPage) => (lastPage.courses.length > 0 ? lastPage.page + 1 : false),
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
  return { hasNextPage, fetchNextPage, isLoading, data };
};

export default useGetPaginatedCourses;
