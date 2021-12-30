import styled from 'styled-components';
import { Box } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const PageContainer = styled('div')({
  [theme.breakpoints.up('lg')]: {
    maxHeight: '500px',
    maxWidth: '800px',
    overflowY: 'scroll',
  },
  [theme.breakpoints.up('xl')]: {
    maxHeight: '600px',
    maxWidth: '1150px',
    overflowY: 'scroll',
  },
  margin: '10px auto 10px auto',
  border: '1px solid #ebebeb',
  borderRadius: '10px',
});
export const CourseButton = styled(Button)({
  [theme.breakpoints.up('xs')]: {
    height: '30px',
    margin: '10px',
    fontSize: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '30px 10px 30px 10px',
    fontSize: '10px',
  },
});
