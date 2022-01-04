import styled from 'styled-components';
import { Grid } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const PageContainer = styled(Grid)({
  [theme.breakpoints.up('lg')]: {
    maxHeight: '100vh',
    maxWidth: '100%',
    overflowY: 'scroll',
    margin: '0px !important',
    marginTop: '25px !important',
  },
  [theme.breakpoints.up('xl')]: {
    maxHeight: '100vh',
    maxWidth: '100%',
    overflowY: 'scroll',
    margin: '0px !important',
    marginTop: '25px !important',
  },
  border: '1px solid #ebebeb',
  borderRadius: '10px',
});

export const CourseButton = styled(Button)({
  [theme.breakpoints.up('xs')]: {
    margin: '0px',
    fontSize: '10px',
    alignSelf: 'center',
    height: '40px',
    width: '120px',
    marginRight: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0px',
    height: '40px',
    fontSize: '10px',
    alignSelf: 'center',
    marginLeft: '20px',
  },
});
