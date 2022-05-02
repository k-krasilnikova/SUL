import { FC, BaseSyntheticEvent } from 'react';

import { useToggle } from 'hooks';
import { IEmployeeItemContainerProps } from 'pages/Employees/types';

import EmployeeItem from './EmployeeItem';

export const EmployeeItemContainer: FC<IEmployeeItemContainerProps> = (props) => {
  const [isVisibleContent, toggleIsVisible] = useToggle();

  const handleShowButtonClick = (event: BaseSyntheticEvent) => {
    event.stopPropagation();
    toggleIsVisible();
  };

  return (
    <EmployeeItem
      isVisibleContent={isVisibleContent}
      handleShowButtonClick={handleShowButtonClick}
      {...props}
    />
  );
};

export default EmployeeItemContainer;
