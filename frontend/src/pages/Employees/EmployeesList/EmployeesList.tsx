import React from 'react';
import { TableBody, TableHead } from '@mui/material';

import { HEADER_COLUMNS } from 'constants/employeeInfo';
import { IEmployeesProps } from 'types/employee';

import { Cell, EmployeesTable, HeaderRow } from './styled';
import EmployeeItem from './EmployeeItem';

const EmployeesList: React.FC<IEmployeesProps> = ({ employees, handleNavigate }) => (
  <EmployeesTable stickyHeader>
    <TableHead>
      <HeaderRow>
        {HEADER_COLUMNS.map((columnName: string) => (
          <Cell key={columnName} variant="head">
            {columnName}
          </Cell>
        ))}
      </HeaderRow>
    </TableHead>
    <TableBody>
      {employees?.map((employee) => (
        <EmployeeItem employee={employee} handleNavigate={handleNavigate} />
      ))}
    </TableBody>
  </EmployeesTable>
);

export default EmployeesList;
