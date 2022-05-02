import { FC } from 'react';
import { useNavigate } from 'react-router';

import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { IEmployeeContentContainerProps } from 'pages/Employees/types';

import EmployeeContent from './EmployeeContent';

const EmployeeContentContainer: FC<IEmployeeContentContainerProps> = ({ employee, ...props }) => {
  const navigateTo = useNavigate();

  const handleUserInfoClick = () => {
    navigateTo(transformRoute(PATHS.employeeProfile, employee._id));
  };

  return (
    <EmployeeContent employee={employee} handleUserInfoClick={handleUserInfoClick} {...props} />
  );
};

export default EmployeeContentContainer;
