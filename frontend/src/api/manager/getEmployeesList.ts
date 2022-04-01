import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { apiClientWrapper } from 'api/base';
import { API } from 'constants/routes';
import { errorSnackbar } from 'constants/snackbarVariant';
import { IEmployee, IEmployees } from 'types/employee';

const useGetEmployeesList = (): UseQueryResult<IEmployee[], AxiosError> => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitError = (error: AxiosError) => {
    enqueueSnackbar(error?.response?.data, errorSnackbar);
  };
  return useQuery(
    'employees-list',
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(API.getEmployeesList);
      const employeesResponse: IEmployees = response?.data;
      return employeesResponse;
    },
    {
      refetchOnWindowFocus: false,
      onError: handleSubmitError,
    },
  );
};

export default useGetEmployeesList;
