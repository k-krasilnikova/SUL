import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { ICourseMaterialsResponse } from 'types/course';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ClientCourse } from 'types/clientCourse';

const useGetClientCourseAndMaterials = (
  courseId?: string,
): UseQueryResult<[ClientCourse, ICourseMaterialsResponse], AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.courseAndMaterials, courseId],
    async () => {
      const apiClient = apiClientWrapper();

      const courseResponse = await apiClient.get(`${API.getMyCourses}/${courseId}`);
      const courseData: ClientCourse = courseResponse.data;

      const materialsResponse = await apiClient.get(
        `${API.courses}/${courseData.course._id}/materials`,
      );
      const materialsData: ICourseMaterialsResponse = materialsResponse.data;
      return [courseData, materialsData];
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetClientCourseAndMaterials;
