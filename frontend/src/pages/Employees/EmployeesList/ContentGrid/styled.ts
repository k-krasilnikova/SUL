import { styled, Grid } from '@mui/material';

import { EmployeeContentType } from 'enums/employee';
import { IStyledGridProps } from 'pages/Employees/types';

export const StyledGrid = styled(Grid)<IStyledGridProps>(
  ({ isVisible, contentHeight, contentType }) => ({
    ...(typeof isVisible === 'undefined'
      ? {}
      : !isVisible
      ? { height: 0 }
      : typeof contentHeight === 'undefined'
      ? {}
      : contentType === EmployeeContentType.hidden
      ? { height: `${contentHeight}px` }
      : {}),
    overflow: 'hidden',
    transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  }),
);
