import { useQuery } from 'react-query';

import { apiClientWrapper } from 'api/base';
import { getUserIdCookie } from 'utils/helpers/getUserIdCookie';
import { API } from 'constants/routes';
import { REQUEST_ERRORS } from 'constants/authConstants';

const useGetProfile = () =>
  useQuery('profile', async () => {
    let profileResponse: {
      position?: string;
      firstName?: string;
      lastName?: string;
      skills?: Array<string>;
      courses?: Array<string>;
      avatar?: string;
      birthday?: Date;
      skype?: string;
      error?: unknown;
    };
    const apiClient = apiClientWrapper();
    const userId = getUserIdCookie();
    try {
      const response = await apiClient.get(`${API.getProfile}/${userId}`);
      profileResponse = response.data;
      return profileResponse;
    } catch (error) {
      throw new Error(`${REQUEST_ERRORS.getError}`);
    }
  });

export default useGetProfile;
