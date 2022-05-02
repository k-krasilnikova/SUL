import { styled, Grid } from '@mui/material';

import { EmployeeContentType } from 'enums/employee';
import { IStyledColumnProps } from 'pages/Employees/types';

export const StyledColumn = styled(Grid)<IStyledColumnProps>(({ contentType }) => ({
  marginBottom: '16px',
  paddingLeft: '16px',
  ...(contentType === EmployeeContentType.hidden && { backgroundColor: '#F9FAFC' }),
}));
