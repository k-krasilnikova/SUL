import { useQuery } from 'react-query';

import { apiClient } from 'api/base';
import { API } from 'constants/routes';

import { User } from 'types/user';

const useGetProfile = () =>
  useQuery('profile', async (): Promise<User> => {
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
    try {
      const response = await apiClient.get(API.getProfile);
      profileResponse = response.data;
    } catch (error) {
      profileResponse = { error: error };
    }
    return profileResponse;
  });
export default useGetProfile;
