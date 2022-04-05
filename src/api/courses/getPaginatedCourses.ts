import { InfiniteData, useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { queryKeyConstants } from 'constants/queryKeyConstants';
import { Course } from 'types/course';

const PAGE_CHANGE = 1;
const FIRST_PAGE = 1;
const EMPTY_LENGTH = 0;
interface HookResult {
  fetchNextPage: () => void;
  isLoading: boolean;
  data: InfiniteData<{ page: number; courses: Course[] }> | undefined;
  hasNextPage?: boolean;
}

const useGetPaginatedCourses = (title?: string): HookResult => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  const getCourses = async ({ pageParam = 1 }) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.get(`${API.getCourses}`, {
      params: {
        title,
        pageN: pageParam,
      },
    });
    return { page: pageParam, courses: response.data };
  };
  const { fetchNextPage, hasNextPage, data, isLoading } = useInfiniteQuery(
    [queryKeyConstants.paginatedCoursesList, title],
    getCourses,
    {
      enabled: title === undefined ? true : !!title,
      getPreviousPageParam: (firstPage) =>
        firstPage.page === FIRST_PAGE ? false : firstPage.page - PAGE_CHANGE,
      getNextPageParam: (lastPage) =>
        lastPage.courses.length > EMPTY_LENGTH ? lastPage.page + PAGE_CHANGE : false,
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
  return { hasNextPage, fetchNextPage, isLoading, data };
};

export default useGetPaginatedCourses;
