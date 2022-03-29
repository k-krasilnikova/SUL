import { Grid } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';

export const EmployeesWrapper = styled('div')({
  padding: '41px 40px',
  fontFamily: '"Ubuntu", sans-serif',
  height: 'calc(100% - 100px)',
  maxWidth: '1800px',
  width: '100%',
  [theme.breakpoints.down('xl')]: {
    padding: '16px',
  },
});

export const HeaderText = styled('p')({
  color: '#6c6c6c',
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '21px',
  margin: '0',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
    lineHeight: '18px',
  },
});

export const HeaderCell = styled(Grid)({
  marginBottom: '30px !important',
  minWidth: '200px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '26px !important',
    minWidth: '130px',
  },
  [theme.breakpoints.up(1800)]: {
    minWidth: '300px',
  },
  ':first-child': {
    minWidth: '350px',
  },
});
