import { FC } from 'react';

import { COLUMNS_SIZE_CONFIGURATION } from 'constants/employeesPage';
import { IContentColumnProps } from 'pages/Employees/types';

import { StyledColumn } from './styled';

const ContentColumn: FC<IContentColumnProps> = ({ columnName, contentType, children }) => (
  <StyledColumn item contentType={contentType} {...COLUMNS_SIZE_CONFIGURATION[columnName]}>
    {children}
  </StyledColumn>
);

export default ContentColumn;
