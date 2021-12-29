import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

import theme from 'themeSettings';

export const InfoContainer = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    minWidth: '326px',
    margin: '10px',
    height: '30px',
    padding: '0px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '410px',
    margin: '20px 10px',
    height: '50px',
    padding: '10px 5px 10px 5px',
  },
  display: 'inline-block',
  backgroundColor: 'white',
});
export const InfoItem = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    width: '80px',
    padding: '5px',
    fontSize: '10px',
    lineHeight: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100px',
    padding: '5px',
    fontSize: '14px',
    lineHeight: '24px',
  },
  display: 'inline-flex',
  verticalAlign: 'middle',
  color: 'grey',
});
