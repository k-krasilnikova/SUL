import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { IEmployee } from 'types/employee';

const useGetEmployeeProfile = (employeeId?: string): UseQueryResult<IEmployee, AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.employeeProfile, employeeId],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(`${API.getEmployeesList}/${employeeId}`);
      return response.data;
    },
    {
      onError: handleSubmitError,
    },
  );
};

export default useGetEmployeeProfile;
