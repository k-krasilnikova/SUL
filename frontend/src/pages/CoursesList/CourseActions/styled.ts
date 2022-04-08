import { Box } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';

export const CourseActionsWrapper = styled('div')({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
    margin: '0px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    minWidth: 'auto',
  },
});

export const CourseActionsBox = styled(Box)({
  margin: '20px 15px 0 8px',
});
