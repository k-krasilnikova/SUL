import { Box, Divider, Grid } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';

export const ImageWrapper = styled('div')({
  height: '50px',
  width: '50px',
});

export const EmployeeContainer = styled(Grid)({
  display: 'flex',
  minWidth: '350px',
  marginTop: '160px',
  [theme.breakpoints.down('xl')]: {
    marginTop: '14px',
  },
});

export const InfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
});

export const Text = styled('p')({
  margin: 0,
  fontSize: '24px',
  fontWeight: '400',
  letterSpacing: '0.01em',
  color: '#131313',
  marginTop: '19px',
  wordBreak: 'break-word',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
});

export const Cell = styled(Grid)({
  minWidth: '200px',
  [theme.breakpoints.down('xl')]: {
    minWidth: '130px',
  },
  [theme.breakpoints.up(1800)]: {
    minWidth: '300px',
  },
  ':first-child': {
    minWidth: '350px',
  },
});

export const UserName = styled(Text)({
  whiteSpace: 'nowrap',
  lineHeight: '28px',
  color: theme.palette.text.primary,
  marginTop: '0',
  [theme.breakpoints.down('xl')]: {
    lineHeight: '21px',
    fontSize: '18px',
  },
});

export const Position = styled(Text)({
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

export const StyledDivider = styled(Divider)({
  width: '1594px',
  marginTop: '16px !important',
  marginBottom: '20px !important',
  [theme.breakpoints.down('xl')]: {
    marginTop: '23px !important',
    marginBottom: '12px !important',
  },
});
