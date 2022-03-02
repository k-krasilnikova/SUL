import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { Course } from 'types/course';

const searchAllCourses = async (courseName: string): Promise<Course[]> => {
  const apiClient = apiClientWrapper();
  try {
    const response = await apiClient.get(`${API.getCourses}?title=${courseName}`);
    const searchResponse = response.data;
    return searchResponse;
  } catch (error) {
    throw new Error(`${REQUEST_ERRORS.getError}`);
  }
};

export default searchAllCourses;
