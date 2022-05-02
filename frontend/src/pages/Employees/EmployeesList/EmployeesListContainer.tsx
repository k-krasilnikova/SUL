import { FC } from 'react';

import { useGetWindowSizeLabel } from 'hooks';

import { IEmployeesListContainerProps, TWindowSize } from 'pages/Employees/types';

import EmployeesList from './EmployeesList';

export const EmployeesListContainer: FC<IEmployeesListContainerProps> = ({ employees }) => {
  const windowSize = useGetWindowSizeLabel() as TWindowSize;

  return <EmployeesList windowSize={windowSize} employees={employees} />;
};

export default EmployeesListContainer;
