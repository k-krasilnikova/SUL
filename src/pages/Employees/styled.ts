import { Box, Table, TableCell, TableRow } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';

export const EmployeesWrapper = styled('div')({
  padding: '41px 40px',
  fontFamily: '"Ubuntu", sans-serif',
  [theme.breakpoints.down('xl')]: {
    padding: '16px',
  },
});

export const Cell = styled(TableCell)({
  '&.MuiTableCell-root': {
    textAlign: 'left',
    paddingTop: '0',
    paddingBottom: '0',
  },
  '&.MuiTableCell-head': {
    color: '#6c6c6c',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '21px',
    paddingBottom: '30px',
    [theme.breakpoints.down('xl')]: {
      fontSize: '16px',
      lineHeight: '18px',
      paddingBottom: '26px',
    },
  },
  '&.MuiTableCell-body': {
    fontSize: '24px !important',
    fontWeight: '400',
    letterSpacing: '0.01em',
    color: '#131313',
    marginTop: '19px',
    paddingBottom: '23px',
    paddingTop: '16px',
    [theme.breakpoints.down('xl')]: {
      fontSize: '16px !important',
      paddingBottom: '16px',
      paddingTop: '14px',
    },
  },
});

export const UserInfo = styled(Box)({
  display: 'flex',
});

export const StackItem = styled('p')({
  margin: '0',
});

export const HeaderRow = styled(TableRow)({
  '&:last-child td, &:last-child th': { border: 0 },
});

export const EmployeesTable = styled(Table)({
  minWidth: '650px',
});

export const ImageWrapper = styled('div')({
  height: '50px',
  width: '50px',
});

export const InfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
});

export const UserName = styled('p')({
  whiteSpace: 'nowrap',
  lineHeight: '28px',
  color: theme.palette.text.primary,
  margin: '0',
  padding: '0',
  [theme.breakpoints.down('xl')]: {
    lineHeight: '21px',
    fontSize: '18px',
  },
});

export const Position = styled('p')({
  fontSize: '20px',
  lineHeight: '23px',
  marginTop: '8px',
  color: '#131313',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px !important',
    lineHeight: '18px',
    marginTop: '10px',
  },
});
