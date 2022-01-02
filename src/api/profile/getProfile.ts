import { useQuery } from 'react-query';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { COOKIE_VALUES } from 'constants/authConstants';

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
    const apiClient = apiClientWrapper(COOKIE_VALUES?.uniqAccessToken);
    try {
      const response = await apiClient.get(API.getProfile);
      profileResponse = response.data;
    } catch (error) {
      profileResponse = { error: error };
    }
    return profileResponse;
  });

export default useGetProfile;
