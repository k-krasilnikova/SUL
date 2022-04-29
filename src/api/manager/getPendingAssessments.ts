import { useQuery, UseQueryResult } from 'react-query';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { API } from 'constants/routes';
import { apiClientWrapper } from 'api/base';
import { IAssessment } from 'types/request';

const useGetPendingAssessments = (): UseQueryResult<IAssessment[], AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.pendingAssessments],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(API.getPendingAssessments);
      const assessments: IAssessment[] = response?.data;
      return assessments;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default useGetPendingAssessments;
