import { useQuery } from 'react-query';

import { apiClient } from 'api/base';

const useGetProfile = (accessToken: string | undefined) =>
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
    try {
      const response = await apiClient.get('/api/account/profile', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      profileResponse = response.data;
    } catch (error) {
      profileResponse = { error: error };
    }
    return profileResponse;
  });

export default useGetProfile;
