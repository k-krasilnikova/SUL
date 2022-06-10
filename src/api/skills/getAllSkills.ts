import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { ISkillsListProps } from 'types/skill';

const useGetAllSkills = (skillName: string): UseQueryResult<ISkillsListProps[], AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.skills, skillName],
    async () => {
      const apiClient = apiClientWrapper();
      const skillNameEncoded = encodeURIComponent(skillName);
      const response = await apiClient.get(`${API.skills}?search=${skillNameEncoded}`);
      const skillsResponse: ISkillsListProps = response.data;
      return skillsResponse;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default useGetAllSkills;
