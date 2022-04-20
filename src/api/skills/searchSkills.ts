import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ISkillsListProps } from 'types/skill';

const useSearchSkills = (skillName: string): UseQueryResult<ISkillsListProps[], AxiosError> => {
  return useQuery([QUERY_KEYS.skills, skillName], async () => {
    const apiClient = apiClientWrapper();
    const skillNameEncoded = encodeURIComponent(skillName);
    const response = await apiClient.get(`${API.skills}?search=${skillNameEncoded}`);
    return response.data;
  });
};

export default useSearchSkills;
