import { FC } from 'react';

import { TABLE_CONFIGURATION } from 'constants/employeesPage';
import { IEmployeesListProps, TTableConfig } from 'pages/Employees/types';
import { EmployeeColumnName } from 'enums/employee';

import { ColumnLabel } from './styled';
import ContentGrid from './ContentGrid';
import ContentColumn from './ContentColumn';
import EmployeeItem from './EmployeeItem';

const EmployeesList: FC<IEmployeesListProps> = ({ employees, windowSize }) => {
  const { visibleColumnLabels, hiddenColumnLabels } = TABLE_CONFIGURATION[
    windowSize
  ] as TTableConfig;

  return (
    <>
      <ContentGrid>
        {visibleColumnLabels.map((columnName) => (
          <ContentColumn key={columnName} columnName={columnName}>
            <ColumnLabel>{columnName === EmployeeColumnName.button ? '' : columnName}</ColumnLabel>
          </ContentColumn>
        ))}
      </ContentGrid>
      {employees?.map((employee) => (
        <EmployeeItem
          key={employee._id}
          employee={employee}
          visibleColumnLabels={visibleColumnLabels}
          hiddenColumnLabels={hiddenColumnLabels}
        />
      ))}
    </>
  );
};

export default EmployeesList;
