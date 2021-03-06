import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { QUERY_KEYS } from 'constants/queryKeyConstants';
import { IEmployee } from 'types/employee';

const useGetEmployeesList = (): UseQueryResult<IEmployee[], AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    [QUERY_KEYS.employeesList],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(API.getEmployeesList);
      const employeesResponse: IEmployee[] = response?.data;
      return employeesResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetEmployeesList;
