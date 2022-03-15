import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';
import { ClientCourse } from 'types/clientCourse';

const searchClientCourses = async (): Promise<ClientCourse[]> => {
  const apiClient = apiClientWrapper();
  try {
    const response = await apiClient.get(`${API.getMyCourses}`);
    const searchResponse = response.data;
    return searchResponse;
  } catch (error) {
    throw new Error(`${REQUEST_ERRORS.getError}`);
  }
};

export default searchClientCourses;
