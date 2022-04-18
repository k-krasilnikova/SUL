import { styled, Table, TableCell, TableRow } from '@mui/material';

import theme from 'themeSettings';

export const HeaderRow = styled(TableRow)({
  '&:last-child td, &:last-child th': { border: 0 },
});

export const EmployeesTable = styled(Table)({
  minWidth: '650px',
});

export const Cell = styled(TableCell)({
  '&.MuiTableCell-root': {
    textAlign: 'left',
    paddingTop: '0',
    paddingBottom: '0',
  },
  '&.MuiTableCell-head': {
    color: '#6c6c6c',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '21px',
    paddingBottom: '30px',
    [theme.breakpoints.down('xl')]: {
      lineHeight: '18px',
      paddingBottom: '26px',
    },
  },
  '&.MuiTableCell-body': {
    fontSize: '18px',
    fontWeight: '400',
    letterSpacing: '0.01em',
    color: '#131313',
    marginTop: '19px',
    paddingBottom: '23px',
    paddingTop: '16px',
    [theme.breakpoints.down('xl')]: {
      paddingBottom: '16px',
      paddingTop: '14px',
    },
  },
});
