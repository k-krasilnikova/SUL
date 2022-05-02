import { FC } from 'react';

import { COLUMNS_SIZE_CONFIGURATION } from 'constants/employeesPage';
import { IContentColumnProps } from 'pages/Employees/types';

import { StyledColumn } from './styled';

const ContentColumn: FC<IContentColumnProps> = ({ columnName, children }) => (
  <StyledColumn item {...COLUMNS_SIZE_CONFIGURATION[columnName]}>
    {children}
  </StyledColumn>
);

export default ContentColumn;
