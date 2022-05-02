import { FC } from 'react';

import { EmployeeContentType } from 'enums/employee';
import { IEmployeeItemProps } from 'pages/Employees/types';

import EmployeeContent from '../EmployeeContent';

const EmployeeItem: FC<IEmployeeItemProps> = ({
  employee,
  visibleColumnLabels,
  hiddenColumnLabels,
  isVisibleContent,
  handleShowButtonClick,
}) => (
  <>
    <EmployeeContent
      employee={employee}
      config={visibleColumnLabels}
      isVisible={isVisibleContent}
      handleShowButtonClick={handleShowButtonClick}
    />
    {Boolean(hiddenColumnLabels.length) && (
      <EmployeeContent
        type={EmployeeContentType.hidden}
        employee={employee}
        config={hiddenColumnLabels}
        isVisible={isVisibleContent}
      />
    )}
  </>
);

export default EmployeeItem;
