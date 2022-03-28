import { AxiosError, AxiosResponse } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { Course } from 'types/course';

const searchAllCourses = async (
  courseName: string,
): Promise<AxiosResponse<Course[], AxiosError>> => {
  const apiClient = apiClientWrapper();
  try {
    const courseNameEncoded = encodeURIComponent(courseName);
    const response = await apiClient.get(`${API.getCourses}?title=${courseNameEncoded}`);
    const searchResponse = response;
    return searchResponse;
  } catch (error) {
    throw new Error(`${REQUEST_ERRORS.getError}`);
  }
};

export default searchAllCourses;
